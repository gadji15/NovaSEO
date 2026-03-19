import { z } from 'zod'

const benefitSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().optional()
})

const stepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1)
})

const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1)
})

const trustItemSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1)
})

const landingVariantSchema = z.object({
  id: z.string().min(1),
  weight: z.number().int().min(0).max(100),
  overrides: z
    .object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      ctaLabel: z.string().optional(),
      primaryColor: z.string().optional(),
      heroBadge: z.string().optional()
    })
    .default({})
})

export const landingConfigSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  brandName: z.string().min(1),
  slogan: z.string().optional(),

  title: z.string().min(1),
  subtitle: z.string().min(1),

  ctaLabel: z.string().min(1),
  ctaUrl: z.string().url(),

  heroBadge: z.string().optional(),
  microReassurance: z.string().optional(),

  benefits: z.array(benefitSchema).min(1).max(5),
  steps: z.array(stepSchema).min(1).max(3),
  faq: z.array(faqItemSchema).max(12).default([]),
  trustItems: z.array(trustItemSchema).max(6).default([]),

  destinationDomainsAllowlist: z.array(z.string().min(1)).min(1),

  themeMode: z.enum(['dark', 'light']).default('dark'),
  primaryColor: z.string().default('#7c3aed'),

  seoTitle: z.string().min(1),
  seoDescription: z.string().min(1),

  indexable: z.boolean().default(false),
  active: z.boolean().default(true),

  affiliateDisclosure: z
    .object({
      enabled: z.boolean().default(false),
      text: z.string().min(1).default('Certains liens peuvent être affiliés.')
    })
    .default({ enabled: false, text: 'Certains liens peuvent être affiliés.' }),

  variants: z.array(landingVariantSchema).default([])
})

export type LandingConfig = z.infer<typeof landingConfigSchema>
export type LandingVariant = z.infer<typeof landingVariantSchema>
