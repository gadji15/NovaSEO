import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getLandingBySlug } from '@/lib/landing'

function pickWeighted<T extends { weight: number }>(items: T[]): T {
  const total = items.reduce((acc, i) => acc + i.weight, 0)
  if (total <= 0) return items[0]

  const r = Math.random() * total
  let acc = 0

  for (const item of items) {
    acc += item.weight
    if (r <= acc) return item
  }

  return items[0]
}

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl

  if (pathname === '/' || pathname.startsWith('/go/')) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  if (segments.length !== 1) return NextResponse.next()

  const slug = segments[0]
  const config = getLandingBySlug(slug)
  if (!config || !config.active) return NextResponse.next()

  const variants = config.variants && config.variants.length > 0 ? config.variants : null
  if (!variants) return NextResponse.next()

  const cookieName = `nr_v_${slug}`
  const requested = searchParams.get('variant')
  const requestedValid = requested
    ? variants.some((v) => v.id === requested)
    : false

  const existing = req.cookies.get(cookieName)?.value
  const existingValid = existing ? variants.some((v) => v.id === existing) : false

  const chosen = requestedValid
    ? requested!
    : existingValid
      ? existing!
      : pickWeighted(variants).id

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nr-variant', chosen)

  const res = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  if (!existingValid || chosen !== existing) {
    res.cookies.set(cookieName, chosen, {
      path: `/${slug}`,
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax'
    })
  }

  return res
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
}
