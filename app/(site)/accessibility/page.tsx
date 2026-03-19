export default function AccessibilityPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Accessibilité</h1>
      <p className="mt-4 text-sm text-[color:var(--nr-muted)]">
        Déclaration d’accessibilité (modèle). Indiquez votre niveau de conformité,
        les critères non conformes, et un moyen de contact.
      </p>

      <section className="mt-8 grid gap-4">
        <div className="rounded-2xl border border-[color:var(--nr-border)] bg-black/5 p-5 dark:bg-white/5">
          <h2 className="text-sm font-semibold">Contact accessibilité</h2>
          <p className="mt-2 text-sm text-[color:var(--nr-muted)]">
            support@votredomaine.com
          </p>
        </div>
      </section>
    </main>
  )
}
