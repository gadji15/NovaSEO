import type { LandingConfig } from '@/config/landing-schema'

type OutboundValidation =
  | { ok: true; url: URL }
  | { ok: false; reason: string }

export function validateOutboundUrl(
  config: LandingConfig,
  rawUrl: string
): OutboundValidation {
  let url: URL

  try {
    url = new URL(rawUrl)
  } catch {
    return { ok: false, reason: 'invalid_url' }
  }

  if (url.protocol !== 'https:') {
    return { ok: false, reason: 'https_required' }
  }

  const hostname = url.hostname.toLowerCase()
  const allowed = new Set(
    config.destinationDomainsAllowlist.map((d) => d.toLowerCase())
  )

  if (!allowed.has(hostname)) {
    return { ok: false, reason: 'domain_not_allowed' }
  }

  return { ok: true, url }
}
