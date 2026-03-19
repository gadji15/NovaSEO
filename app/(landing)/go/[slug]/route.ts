import { NextResponse } from 'next/server'

import { getLandingBySlug } from '@/lib/landing'
import { validateOutboundUrl } from '@/lib/outbound'

export function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const config = getLandingBySlug(params.slug)

  if (!config || !config.active) {
    return NextResponse.json({ error: 'not_found' }, { status: 404 })
  }

  const validation = validateOutboundUrl(config, config.ctaUrl)

  if (!validation.ok) {
    return NextResponse.json(
      { error: 'invalid_destination', reason: validation.reason },
      { status: 400 }
    )
  }

  return NextResponse.redirect(validation.url, 307)
}
