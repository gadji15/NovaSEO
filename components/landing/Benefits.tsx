import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { LandingConfig } from '@/config/landing-schema'
import {
  ChartNoAxesColumn,
  ShieldCheck,
  Zap,
  type LucideIcon
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  ChartNoAxesColumn
}

export function Benefits({ config }: { config: LandingConfig }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Bénéfices clés
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--nr-muted)]">
            3 à 5 points maximum. Concrets, orientés résultat.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {config.benefits.map((b) => {
          const Icon = b.icon ? ICONS[b.icon] : undefined

          return (
            <Card key={b.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {Icon ? (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--nr-border)] bg-black/5 dark:bg-white/5">
                      <Icon className="h-5 w-5" />
                    </span>
                  ) : null}
                  {b.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[color:var(--nr-muted)]">
                  {b.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
