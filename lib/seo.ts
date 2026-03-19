import type { Metadata } from 'next'
import type { LandingConfig } from '@/config/landing-schema'

export function buildLandingMetadata(
  config: LandingConfig,
  baseUrl?: string
): Metadata {
  const url = baseUrl ? new URL(`/${config.slug}`, baseUrl).toString() : undefined

  return {
    title: config.seoTitle,
    description: config.seoDescription,
    alternates: url ? { canonical: url } : undefined,
    robots: {
      index: config.indexable,
      follow: config.indexable
    },
    openGraph: {
      title: config.seoTitle,
      description: config.seoDescription,
      url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seoTitle,
      description: config.seoDescription
    }
  }
}
