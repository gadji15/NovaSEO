import type { LandingConfig } from '@/config/landing-schema'

export function HowItWorks({ config }: { config: LandingConfig }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        Comment ça marche
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[color:var(--nr-muted)]">
        3 étapes maximum. Visuel, rapide à comprendre.
      </p>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {config.steps.map((s, idx) => (
          <li
            key={s.title}
            className="rounded-2xl border border-[color:var(--nr-border)] bg-black/5 dark:bg-white/5 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs text-[color:var(--nr-muted)]">
                Étape {idx + 1}
              </div>
              <div className="h-8 w-8 rounded-full bg-[color:var(--nr-primary)]/15 text-center text-sm leading-8 text-[color:var(--nr-fg)]">
                {idx + 1}
              </div>
            </div>
            <div className="mt-3 text-sm font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-[color:var(--nr-muted)]">
              {s.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
