import Link from 'next/link'

import { listActiveLandings } from '@/lib/landing'

export default function HomePage() {
  const landings = listActiveLandings()

  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Landings</h1>
      <p className="mt-3 text-sm text-[color:var(--nr-muted)]">
        Sélectionnez une landing active.
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {landings.map((l) => (
          <Link
            key={l.slug}
            href={`/${l.slug}`}
            className="rounded-2xl border border-[color:var(--nr-border)] bg-black/5 p-5 hover:opacity-95 dark:bg-white/5"
          >
            <div className="text-sm font-semibold">/{l.slug}</div>
            <div className="mt-1 text-sm text-[color:var(--nr-muted)]">
              {l.seoTitle}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
