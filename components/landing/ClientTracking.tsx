'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

import { track } from '@/lib/analytics'
import { readUtmFromSearchParams } from '@/lib/utm'

const DEPTHS = [25, 50, 75, 90] as const

export function ClientTracking({
  slug,
  variant
}: {
  slug: string
  variant: string
}) {
  const sp = useSearchParams()
  const utm = useMemo(
    () => readUtmFromSearchParams(new URLSearchParams(sp.toString())),
    [sp]
  )

  const firedDepths = useRef(new Set<number>())
  const firedTimes = useRef(new Set<number>())
  const lastScroll = useRef<number>(0)
  const mountedAt = useRef<number>(0)

  useEffect(() => {
    mountedAt.current = Date.now()

    track('landing_view', {
      slug,
      variant,
      ...utm
    })

    function computeScrollPct() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      if (height <= 0) return 0

      return Math.round((scrollTop / height) * 100)
    }

    function onScroll() {
      const pct = computeScrollPct()
      lastScroll.current = pct

      for (const d of DEPTHS) {
        if (pct >= d && !firedDepths.current.has(d)) {
          firedDepths.current.add(d)
          track('scroll_depth', { slug, variant, depth: d, ...utm })
        }
      }
    }

    function onExit() {
      const seconds = Math.round((Date.now() - mountedAt.current) / 1000)
      track('page_exit', {
        slug,
        variant,
        seconds,
        scroll: lastScroll.current,
        ...utm
      })
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') onExit()
    }

    const interval = window.setInterval(() => {
      const seconds = Math.round((Date.now() - mountedAt.current) / 1000)
      if (
        (seconds === 10 || seconds === 30 || seconds === 60) &&
        !firedTimes.current.has(seconds)
      ) {
        firedTimes.current.add(seconds)
        track('time_on_page', { slug, variant, seconds, ...utm })
      }
    }, 1000)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', onExit)
    document.addEventListener('visibilitychange', onVisibilityChange)

    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', onExit)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.clearInterval(interval)
    }
  }, [slug, utm, variant])

  return null
}
