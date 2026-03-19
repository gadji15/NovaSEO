import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[color:var(--nr-bg)] focus:px-3 focus:py-2 focus:text-sm focus:text-[color:var(--nr-fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nr-primary)]"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
