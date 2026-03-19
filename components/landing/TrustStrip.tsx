import type { LandingConfig } from '@/config/landing-schema'

export function TrustStrip({ config }: { config: LandingConfig }) {
  if (!config.trustItems || config.trustItems.length === 0) return null

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-2">
      <div className="grid gap-3 rounded-2xl border border-[color:var(--nr-border)] bg-black/5 dark:bg-white/5 p-4 sm:grid-cols-3">
        {config.trustItems.map((t) => (
          <div key={t.label} className="flex items-center justify-between gap-4">
            <div className="text-xs text-[color:var(--nr-muted)]">{t.label}</div>
            <div className="text-sm font-semibold">{t.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
