'use client'

import { useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { track } from '@/lib/analytics'
import { readUtmFromSearchParams } from '@/lib/utm'

export function CtaButton({
  slug,
  variant,
  label,
  className
}: {
  slug: string
  variant: string
  label: string
  className?: string
}) {
  const router = useRouter()
  const sp = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const navigatedRef = useRef(false)

  const utm = useMemo(
    () => readUtmFromSearchParams(new URLSearchParams(sp.toString())),
    [sp]
  )

  function navigate() {
    if (navigatedRef.current) return
    navigatedRef.current = true
    const qs = sp.toString()
    router.push(`/go/${slug}${qs ? `?${qs}` : ''}`)
  }

  async function onClick() {
    setIsLoading(true)

    let didCallback = false
    const maxWait = window.setTimeout(() => {
      if (didCallback) return
      navigate()
    }, 350)

    track(
      'cta_click',
      {
        slug,
        variant,
        ...utm
      },
      () => {
        didCallback = true
        window.clearTimeout(maxWait)
        navigate()
      }
    )
  }

  return (
    <Button
      size="lg"
      onClick={onClick}
      disabled={isLoading}
      aria-label={label}
      className={className}
    >
      {isLoading ? 'Redirection…' : label}
    </Button>
  )
}
