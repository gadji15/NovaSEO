import type { LandingConfig } from '@/config/landing-schema'
import { Badge } from '@/components/ui/badge'
import { CtaButton } from '@/components/landing/CtaButton'

export function CTASection({
  config,
  slug,
  variant
}: {
  config: LandingConfig
  slug: string
  variant: string
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 pb-14 pt-6">
      <div className="rounded-3xl border border-[color:var(--nr-border)] bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 p-6 md:p-8">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">Action</Badge>
              <span className="text-xs text-[color:var(--nr-muted)]">
                Une seule action dominante
              </span>
            </div>
            <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
              {config.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[color:var(--nr-muted)]">
              {config.subtitle}
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col gap-2 md:mt-0 md:w-auto md:items-end">
            <CtaButton
              slug={slug}
              variant={variant}
              label={config.ctaLabel}
              className="w-full md:w-auto"
            />
            {config.microReassurance ? (
              <span className="text-xs text-[color:var(--nr-muted)]">
                {config.microReassurance}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
