export type AnalyticsProps = Record<string, string | number | boolean>

type PlausibleOptions = {
  props?: AnalyticsProps
  callback?: () => void
}

declare global {
  interface Window {
    plausible?: (event: string, options?: PlausibleOptions) => void
  }
}

function normalizeProps(props: Record<string, unknown> | undefined): AnalyticsProps {
  const out: AnalyticsProps = {}
  if (!props) return out

  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null) continue

    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      out[k] = v
      continue
    }

    out[k] = String(v)
  }

  return out
}

export function track(event: string, props?: Record<string, unknown>, cb?: () => void) {
  if (typeof window === 'undefined') return

  const plausible = window.plausible
  const options: PlausibleOptions = { props: normalizeProps(props) }

  if (cb) options.callback = cb

  if (typeof plausible === 'function') {
    plausible(event, options)
    return
  }

  if (cb) cb()
}
