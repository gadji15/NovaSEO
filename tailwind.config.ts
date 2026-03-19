import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--nr-bg)',
        fg: 'var(--nr-fg)',
        muted: 'var(--nr-muted)',
        border: 'var(--nr-border)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  }
} satisfies Config
