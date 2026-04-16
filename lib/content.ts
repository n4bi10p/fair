import { createClient } from '@/lib/supabase/server'
import { getSupabaseEnv } from '@/lib/supabase/config'
import type { BlogPostRecord, EventRecord } from '@/lib/types'

export async function getLatestPublishedEvents(limit = 4): Promise<EventRecord[]> {
  if (!getSupabaseEnv().isConfigured) {
    return []
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .order('event_date', { ascending: true })
    .limit(limit)

  if (error || !data) {
    return []
  }

  return data as EventRecord[]
}

export async function getPublishedEvents(): Promise<EventRecord[]> {
  if (!getSupabaseEnv().isConfigured) {
    return []
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .order('event_date', { ascending: true })

  if (error || !data) {
    return []
  }

  return data as EventRecord[]
}

export async function getPublishedEventBySlug(slug: string): Promise<EventRecord | null> {
  if (!getSupabaseEnv().isConfigured) {
    return null
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (error || !data) {
    return null
  }

  return data as EventRecord
}

export async function getLatestPublishedBlogPosts(limit = 3): Promise<BlogPostRecord[]> {
  if (!getSupabaseEnv().isConfigured) {
    return []
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false, nullsFirst: false })
    .limit(limit)

  if (error || !data) {
    return []
  }

  return data as BlogPostRecord[]
}

export async function getPublishedBlogPosts(): Promise<BlogPostRecord[]> {
  if (!getSupabaseEnv().isConfigured) {
    return []
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false, nullsFirst: false })

  if (error || !data) {
    return []
  }

  return data as BlogPostRecord[]
}

export async function getPublishedBlogPostBySlug(slug: string): Promise<BlogPostRecord | null> {
  if (!getSupabaseEnv().isConfigured) {
    return null
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle()

  if (error || !data) {
    return null
  }

  return data as BlogPostRecord
}
