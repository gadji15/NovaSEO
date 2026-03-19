import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[color:var(--nr-border)]">
      <div className="mx-auto w-full max-w-5xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="text-xs text-[color:var(--nr-muted)]">
            © {new Date().getFullYear()} NovaReach.
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-[color:var(--nr-muted)] md:grid-cols-5">
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
            <Link href="/contact" className="hover:opacity-90">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
