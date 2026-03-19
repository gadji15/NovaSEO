import type { MetadataRoute } from 'next'

import { listActiveLandings } from '@/lib/landing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const landings = listActiveLandings().filter((l) => l.indexable)

  const staticPages = [
    '/',
    '/privacy',
    '/terms',
    '/legal',
    '/cookies',
    '/accessibility',
    '/contact'
  ]

  return [
    ...staticPages.map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date()
    })),
    ...landings.map((l) => ({
      url: new URL(`/${l.slug}`, baseUrl).toString(),
      lastModified: new Date()
    }))
  ]
}
