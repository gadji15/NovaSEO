import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const size = 512

  const origin = new URL(req.url).origin
  const logo = await fetch(`${origin}/brand/logo.png`)
  if (logo.ok) {
    return new Response(await logo.arrayBuffer(), {
      headers: {
        'content-type': 'image/png',
        'cache-control': 'public, max-age=86400, immutable'
      }
    })
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: size * 0.22,
          background: '#07070b',
          color: '#f7f7fb'
        }}
      >
        <div
          style={{
            width: size * 0.68,
            height: size * 0.68,
            borderRadius: size * 0.18,
            background:
              'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.75), transparent 60%), radial-gradient(circle at 70% 30%, rgba(124,58,237,0.75), transparent 60%), radial-gradient(circle at 50% 80%, rgba(244,114,182,0.75), transparent 65%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.12)'
          }}
        >
          <div style={{ fontSize: 140, fontWeight: 800, lineHeight: 1 }}>↗</div>
        </div>
      </div>
    ),
    {
      width: size,
      height: size
    }
  )
}
