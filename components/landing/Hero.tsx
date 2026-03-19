import { Badge } from '@/components/ui/badge'
import type { LandingConfig } from '@/config/landing-schema'
import { MotionFadeIn } from '@/components/landing/MotionFadeIn'
import { CtaButton } from '@/components/landing/CtaButton'

export function Hero({
  config,
  slug,
  variant
}: {
  config: LandingConfig
  slug: string
  variant: string
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 pb-10 pt-2">
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <MotionFadeIn>
            <div className="flex flex-wrap items-center gap-2">
              {config.heroBadge ? <Badge>{config.heroBadge}</Badge> : null}
              {config.slogan ? (
                <span className="text-xs text-[color:var(--nr-muted)]">
                  {config.slogan}
                </span>
              ) : null}
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.05}>
            <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {config.title}
            </h1>
          </MotionFadeIn>

          <MotionFadeIn delay={0.1}>
            <p className="mt-4 max-w-xl text-pretty text-base text-[color:var(--nr-muted)] md:text-lg">
              {config.subtitle}
            </p>
          </MotionFadeIn>

          <MotionFadeIn delay={0.15}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton slug={slug} variant={variant} label={config.ctaLabel} />
              {config.microReassurance ? (
                <span className="text-xs text-[color:var(--nr-muted)]">
                  {config.microReassurance}
                </span>
              ) : null}
            </div>
          </MotionFadeIn>
        </div>

        <div className="md:col-span-5">
          <MotionFadeIn delay={0.12}>
            <div className="rounded-2xl border border-[color:var(--nr-border)] bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 p-5">
              <div className="text-sm font-medium">Aperçu</div>
              <div className="mt-2 text-sm text-[color:var(--nr-muted)]">
                Mockup léger (à remplacer par votre visuel / logos de confiance).
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[color:var(--nr-border)] bg-black/5 p-3 dark:bg-white/5">
                  <div className="text-xs text-[color:var(--nr-muted)]">CTA</div>
                  <div className="mt-1 text-sm font-semibold">Visible</div>
                </div>
                <div className="rounded-xl border border-[color:var(--nr-border)] bg-black/5 p-3 dark:bg-white/5">
                  <div className="text-xs text-[color:var(--nr-muted)]">Perf</div>
                  <div className="mt-1 text-sm font-semibold">Mobile</div>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  )
}
