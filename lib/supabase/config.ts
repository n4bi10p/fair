const FALLBACK_SUPABASE_URL = 'https://example.supabase.co'
const FALLBACK_SUPABASE_ANON_KEY = 'public-anon-key-placeholder'

function isHttpUrl(value: string | undefined) {
  if (!value) {
    return false
  }

  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function isPlaceholder(value: string | undefined) {
  if (!value) {
    return true
  }

  const normalized = value.trim().toLowerCase()
  return (
    normalized.length === 0 ||
    normalized.includes('your_supabase') ||
    normalized.includes('your_') ||
    normalized === 'placeholder'
  )
}

export function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const isConfigured = isHttpUrl(url) && !isPlaceholder(url) && !isPlaceholder(anonKey)

  return {
    isConfigured,
    url: isConfigured ? url! : FALLBACK_SUPABASE_URL,
    anonKey: isConfigured ? anonKey! : FALLBACK_SUPABASE_ANON_KEY,
  }
}
