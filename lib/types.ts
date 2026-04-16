export type EventFormat = 'WORKSHOP' | 'TALK' | 'PAPER CIRCLE' | 'BUILD SPRINT' | 'LAB'

export type EventRecord = {
  id: string
  title: string
  slug: string
  description: string | null
  body: string | null
  event_date: string
  location: string | null
  format: EventFormat | null
  rsvp_link: string | null
  is_sold_out: boolean | null
  is_published: boolean | null
  cover_image: string | null
  created_at: string | null
}

export type BlogPostRecord = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  body: string | null
  author_name: string | null
  author_role: string | null
  cover_image: string | null
  tags: string[] | null
  is_published: boolean | null
  published_at: string | null
  created_at: string | null
}

export type ApplicationInsert = {
  name: string
  email: string
  location: string | null
  role: string | null
  building: string | null
  link: string | null
  how_heard: string | null
  why_join: string | null
}