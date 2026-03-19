import { LANDINGS } from '@/config/landings'
import { landingConfigSchema, type LandingConfig } from '@/config/landing-schema'

export function getLandingBySlug(slug: string): LandingConfig | null {
  const raw = LANDINGS.find((l) => l.slug === slug)
  if (!raw) return null

  const parsed = landingConfigSchema.safeParse(raw)
  if (!parsed.success) {
    throw new Error(`Invalid LandingConfig for slug "${slug}": ${parsed.error.message}`)
  }

  return parsed.data
}

export function listActiveLandings(): LandingConfig[] {
  return LANDINGS.filter((l) => l.active)
}

type VariantPick = {
  id: string
  overrides: NonNullable<LandingConfig['variants']>[number]['overrides']
}

export function resolveVariant(
  config: LandingConfig,
  variantId: string | null
): VariantPick {
  const variants = config.variants
  if (!variants || variants.length === 0) {
    return { id: 'v1', overrides: {} }
  }

  const match = variantId
    ? variants.find((v) => v.id === variantId)
    : undefined

  if (match) {
    return { id: match.id, overrides: match.overrides ?? {} }
  }

  return { id: variants[0].id, overrides: variants[0].overrides ?? {} }
}

export function applyVariant(
  config: LandingConfig,
  variant: VariantPick
): LandingConfig {
  return {
    ...config,
    ...variant.overrides
  }
}
