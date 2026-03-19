import type { CSSProperties, ReactNode } from 'react'

import type { LandingConfig } from '@/config/landing-schema'
import { cn } from '@/lib/utils'

const DARK_TOKENS = {
  '--nr-bg': '#07070b',
  '--nr-fg': '#f7f7fb',
  '--nr-muted': 'rgba(255, 255, 255, 0.75)',
  '--nr-border': 'rgba(255, 255, 255, 0.10)'
} as const

const LIGHT_TOKENS = {
  '--nr-bg': '#ffffff',
  '--nr-fg': '#0b0b10',
  '--nr-muted': 'rgba(11, 11, 16, 0.70)',
  '--nr-border': 'rgba(11, 11, 16, 0.12)'
} as const

export function LandingShell({
  config,
  children
}: {
  config: LandingConfig
  children: ReactNode
}) {
  const tokens = config.themeMode === 'dark' ? DARK_TOKENS : LIGHT_TOKENS

  return (
    <div
      className={cn(
        config.themeMode === 'dark' && 'dark',
        'min-h-dvh bg-[color:var(--nr-bg)] text-[color:var(--nr-fg)]'
      )}
      style={{
        ...tokens,
        '--nr-primary': config.primaryColor
      } as CSSProperties}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[color:var(--nr-bg)] focus:px-3 focus:py-2 focus:text-sm focus:text-[color:var(--nr-fg)] focus:outline-none focus:ring-2 focus:ring-[color:var(--nr-primary)]"
      >
        Aller au contenu
      </a>
      {children}
    </div>
  )
}
