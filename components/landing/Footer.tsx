import Link from 'next/link'

import type { LandingConfig } from '@/config/landing-schema'

export function Footer({ config }: { config: LandingConfig }) {
  return (
    <footer className="border-t border-[color:var(--nr-border)]">
      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold">{config.brandName}</div>
            {config.slogan ? (
              <div className="mt-2 text-sm text-[color:var(--nr-muted)]">
                {config.slogan}
              </div>
            ) : null}
            {config.affiliateDisclosure.enabled ? (
              <div className="mt-4 text-xs text-[color:var(--nr-muted)]">
                {config.affiliateDisclosure.text}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-[color:var(--nr-muted)] md:grid-cols-3">
            <Link href="/privacy" className="hover:opacity-90">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:opacity-90">
              Cookies
            </Link>
            <Link href="/terms" className="hover:opacity-90">
              Conditions
            </Link>
            <Link href="/legal" className="hover:opacity-90">
              Mentions légales
            </Link>
            <Link href="/accessibility" className="hover:opacity-90">
              Accessibilité
            </Link>
            <Link href="/contact" className="hover:opacity-90">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-[color:var(--nr-muted)]">
          © {new Date().getFullYear()} {config.brandName}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
