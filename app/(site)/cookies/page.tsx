export default function CookiesPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Cookies</h1>
      <p className="mt-4 text-sm text-[color:var(--nr-muted)]">
        Si vous utilisez uniquement Plausible en mode sans cookies et aucun pixel
        publicitaire, un bandeau n’est souvent pas nécessaire. Si vous ajoutez
        GA4/Meta/TikTok, mettez en place un consentement (CMP).
      </p>

      <div className="mt-8 rounded-2xl border border-[color:var(--nr-border)] bg-black/5 p-5 text-sm text-[color:var(--nr-muted)] dark:bg-white/5">
        À compléter : liste des cookies/traceurs, finalités, durée, et procédure
        de retrait du consentement.
      </div>
    </main>
  )
}
