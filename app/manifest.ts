import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NovaReach',
    short_name: 'NovaReach',
    description: 'Landing & web app orientée conversion.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07070b',
    theme_color: '#7c3aed',
    icons: [
      {
        src: '/icons/192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
