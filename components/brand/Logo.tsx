import Link from 'next/link'

import { cn } from '@/lib/utils'

export function Logo({
  className,
  href = '/',
  label = 'NovaReach'
}: {
  className?: string
  href?: string
  label?: string
}) {
  return (
    <Link href={href} className={cn('inline-flex items-center gap-3', className)}>
      <span
        aria-hidden
        className="h-9 w-9 rounded-xl border border-[color:var(--nr-border)] bg-cover bg-center shadow-sm"
        style={{
          // 1) tente de charger l'image réelle si vous la placez dans /public/brand/logo.png
          // 2) fallback visuel (aucun "broken image")
          backgroundImage:
            "url('/brand/logo.png'), radial-gradient(circle at 30% 30%, rgba(124,58,237,0.55), transparent 55%), radial-gradient(circle at 70% 30%, rgba(56,189,248,0.55), transparent 55%), radial-gradient(circle at 50% 80%, rgba(244,114,182,0.55), transparent 60%)"
        }}
      />
      <span className="font-semibold tracking-tight">{label}</span>
    </Link>
  )
}
