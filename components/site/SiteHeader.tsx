import Link from 'next/link'

import { Logo } from '@/components/brand/Logo'

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--nr-border)]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-5 py-4">
        <Logo />
        <nav
          aria-label="Navigation"
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-[color:var(--nr-muted)]"
        >
          <Link href="/privacy" className="hover:opacity-90">
            Confidentialité
          </Link>
          <Link href="/legal" className="hover:opacity-90">
            Mentions légales
          </Link>
          <Link href="/contact" className="hover:opacity-90">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
