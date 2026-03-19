'use client'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="fr">
      <body>
        <main className="mx-auto w-full max-w-5xl px-5 py-14">
          <h1 className="text-2xl font-semibold tracking-tight">
            Une erreur est survenue
          </h1>
          <p className="mt-3 text-sm text-[color:var(--nr-muted)]">
            {error.message}
          </p>
          <button
            onClick={reset}
            className="mt-8 inline-flex rounded-xl border border-[color:var(--nr-border)] bg-black/5 px-4 py-2 text-sm hover:opacity-95 dark:bg-white/5"
          >
            Réessayer
          </button>
        </main>
      </body>
    </html>
  )
}
