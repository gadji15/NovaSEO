import type { LandingConfig } from '@/config/landing-schema'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export function FAQ({ config }: { config: LandingConfig }) {
  if (!config.faq || config.faq.length === 0) return null

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10">
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        Questions fréquentes
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[color:var(--nr-muted)]">
        Répond aux objections principales avant le clic.
      </p>

      <Accordion type="single" collapsible className="mt-6 grid gap-3">
        {config.faq.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
