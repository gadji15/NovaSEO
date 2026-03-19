import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

import { Benefits } from '@/components/landing/Benefits'
import { ClientTracking } from '@/components/landing/ClientTracking'
import { CTASection } from '@/components/landing/CTASection'
import { FAQ } from '@/components/landing/FAQ'
import { Footer } from '@/components/landing/Footer'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { LandingShell } from '@/components/landing/LandingShell'
import { TrustStrip } from '@/components/landing/TrustStrip'

import { applyVariant, getLandingBySlug, resolveVariant } from '@/lib/landing'
import { buildLandingMetadata } from '@/lib/seo'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const config = getLandingBySlug(slug)
  if (!config) return {}

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  return buildLandingMetadata(config, baseUrl)
}

export default async function LandingPage({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const config = getLandingBySlug(slug)

  if (!config || !config.active) {
    notFound()
  }

  const variantId = headers().get('x-nr-variant')
  const picked = resolveVariant(config, variantId)
  const resolved = applyVariant(config, picked)

  return (
    <LandingShell config={resolved}>
      <Header config={resolved} />
      <main id="main">
        <Hero config={resolved} slug={slug} variant={picked.id} />
        <TrustStrip config={resolved} />
        <Benefits config={resolved} />
        <HowItWorks config={resolved} />
        <FAQ config={resolved} />
        <CTASection config={resolved} slug={slug} variant={picked.id} />
      </main>
      <Footer config={resolved} />

      <ClientTracking slug={slug} variant={picked.id} />
    </LandingShell>
  )
}
