import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'

import { PlausibleScript } from '@/components/analytics/PlausibleScript'

import './globals.css'

export const viewport: Viewport = {
  themeColor: '#07070b',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  applicationName: 'NovaReach',
  title: {
    default: 'NovaReach',
    template: '%s — NovaReach'
  },
  description: 'Landing & web app premium orientée conversion.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/icons/192.png', type: 'image/png', sizes: '192x192' }]
  },
  appleWebApp: {
    capable: true,
    title: 'NovaReach'
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <PlausibleScript />
        {children}
      </body>
    </html>
  )
}
