export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function formatDateShort(dateValue: string) {
  const date = new Date(dateValue)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
  }).format(date)
}

export function formatDateLong(dateValue: string) {
  const date = new Date(dateValue)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}

export function isFutureOrToday(dateValue: string) {
  return new Date(dateValue).getTime() >= Date.now()
}