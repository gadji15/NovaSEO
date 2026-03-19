export default function LegalPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-5xl px-5 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Mentions légales</h1>
      <p className="mt-4 text-sm text-[color:var(--nr-muted)]">
        Cette page est un modèle. Complétez les informations obligatoires selon
        votre pays (éditeur, hébergeur, SIRET, adresse, contact, etc.).
      </p>

      <section className="mt-8 grid gap-4">
        <div className="rounded-2xl border border-[color:var(--nr-border)] bg-black/5 p-5 dark:bg-white/5">
          <h2 className="text-sm font-semibold">Éditeur</h2>
          <p className="mt-2 text-sm text-[color:var(--nr-muted)]">
            Nom / société — adresse — contact
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--nr-border)] bg-black/5 p-5 dark:bg-white/5">
          <h2 className="text-sm font-semibold">Hébergement</h2>
          <p className="mt-2 text-sm text-[color:var(--nr-muted)]">
            Hébergeur — adresse — contact
          </p>
        </div>
      </section>
    </main>
  )
}
