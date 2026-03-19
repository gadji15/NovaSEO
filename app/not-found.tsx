import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Page introuvable</h1>
      <p className="mt-3 text-sm text-[color:var(--nr-muted)]">
        Ce slug n’existe pas ou n’est pas actif.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl border border-[color:var(--nr-border)] bg-black/5 px-4 py-2 text-sm hover:opacity-95 dark:bg-white/5"
      >
        Retour
      </Link>
    </main>
  )
}
