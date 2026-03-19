import Link from 'next/link'

import { Logo } from '@/components/brand/Logo'
import type { LandingConfig } from '@/config/landing-schema'

export function Header({ config }: { config: LandingConfig }) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-5 py-5">
      <div className="flex items-center gap-3">
        <Logo href={`/${config.slug}`} label={config.brandName} />
      </div>

      <nav
        aria-label="Navigation"
        className="flex items-center gap-4 text-sm text-[color:var(--nr-muted)]"
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
    </header>
  )
}
