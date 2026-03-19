export type UTMParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

const UTM_KEYS: (keyof UTMParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term'
]

export function readUtmFromSearchParams(sp: URLSearchParams): UTMParams {
  const out: UTMParams = {}

  for (const key of UTM_KEYS) {
    const v = sp.get(key)
    if (v) out[key] = v
  }

  return out
}
