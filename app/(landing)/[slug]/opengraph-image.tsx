import { ImageResponse } from 'next/og'

import { getLandingBySlug } from '@/lib/landing'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function OpenGraphImage({
  params
}: {
  params: { slug: string }
}) {
  const config = getLandingBySlug(params.slug)

  const title = config?.seoTitle ?? 'NovaReach'
  const subtitle = config?.seoDescription ?? 'Landing page premium orientée conversion.'
  const primary = config?.primaryColor ?? '#7c3aed'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 64,
          background: '#07070b',
          color: '#f7f7fb'
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          {title}
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            opacity: 0.85,
            maxWidth: 980
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 42,
            width: 220,
            height: 10,
            borderRadius: 999,
            background: primary
          }}
        />
      </div>
    ),
    {
      ...size
    }
  )
}
