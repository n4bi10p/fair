'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/utils'

function truthyFlag(value: FormDataEntryValue | null) {
  return value === 'on' || value === 'true' || value === '1'
}

function normalizeTags(value: string) {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
}

export async function createEventAction(formData: FormData) {
  const supabase = await createClient()
  const title = String(formData.get('title') ?? '')
  const providedSlug = String(formData.get('slug') ?? '')
  const targetStatus = String(formData.get('target_status') ?? 'draft')

  const payload = {
    title,
    slug: providedSlug || slugify(title),
    description: String(formData.get('description') ?? ''),
    body: String(formData.get('body') ?? ''),
    event_date: String(formData.get('event_date') ?? ''),
    location: String(formData.get('location') ?? ''),
    format: String(formData.get('format') ?? 'WORKSHOP'),
    rsvp_link: String(formData.get('rsvp_link') ?? ''),
    cover_image: String(formData.get('cover_image') ?? ''),
    is_sold_out: truthyFlag(formData.get('is_sold_out')),
    is_published: targetStatus === 'publish',
  }

  await supabase.from('events').insert(payload)

  revalidatePath('/admin')
  revalidatePath('/admin/events')
  revalidatePath('/events')
  revalidatePath('/')
  redirect('/admin/events')
}

export async function updateEventAction(formData: FormData) {
  const supabase = await createClient()
  const id = String(formData.get('id') ?? '')
  const title = String(formData.get('title') ?? '')
  const providedSlug = String(formData.get('slug') ?? '')
  const targetStatus = String(formData.get('target_status') ?? 'draft')

  const payload = {
    title,
    slug: providedSlug || slugify(title),
    description: String(formData.get('description') ?? ''),
    body: String(formData.get('body') ?? ''),
    event_date: String(formData.get('event_date') ?? ''),
    location: String(formData.get('location') ?? ''),
    format: String(formData.get('format') ?? 'WORKSHOP'),
    rsvp_link: String(formData.get('rsvp_link') ?? ''),
    cover_image: String(formData.get('cover_image') ?? ''),
    is_sold_out: truthyFlag(formData.get('is_sold_out')),
    is_published: targetStatus === 'publish',
  }

  await supabase.from('events').update(payload).eq('id', id)

  revalidatePath('/admin')
  revalidatePath('/admin/events')
  revalidatePath('/events')
  revalidatePath('/')
  redirect('/admin/events')
}

export async function deleteEventAction(formData: FormData) {
  const supabase = await createClient()
  const id = String(formData.get('id') ?? '')

  await supabase.from('events').delete().eq('id', id)

  revalidatePath('/admin')
  revalidatePath('/admin/events')
  revalidatePath('/events')
  revalidatePath('/')
}

export async function createPostAction(formData: FormData) {
  const supabase = await createClient()
  const title = String(formData.get('title') ?? '')
  const providedSlug = String(formData.get('slug') ?? '')
  const targetStatus = String(formData.get('target_status') ?? 'draft')
  const willPublish = targetStatus === 'publish'

  const payload = {
    title,
    slug: providedSlug || slugify(title),
    excerpt: String(formData.get('excerpt') ?? ''),
    body: String(formData.get('body') ?? ''),
    author_name: String(formData.get('author_name') ?? ''),
    author_role: String(formData.get('author_role') ?? ''),
    cover_image: String(formData.get('cover_image') ?? ''),
    tags: normalizeTags(String(formData.get('tags') ?? '')),
    is_published: willPublish,
    published_at: willPublish ? new Date().toISOString() : null,
  }

  await supabase.from('blog_posts').insert(payload)

  revalidatePath('/admin')
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
  revalidatePath('/')
  redirect('/admin/blog')
}

export async function updatePostAction(formData: FormData) {
  const supabase = await createClient()
  const id = String(formData.get('id') ?? '')
  const title = String(formData.get('title') ?? '')
  const providedSlug = String(formData.get('slug') ?? '')
  const targetStatus = String(formData.get('target_status') ?? 'draft')
  const willPublish = targetStatus === 'publish'

  const payload = {
    title,
    slug: providedSlug || slugify(title),
    excerpt: String(formData.get('excerpt') ?? ''),
    body: String(formData.get('body') ?? ''),
    author_name: String(formData.get('author_name') ?? ''),
    author_role: String(formData.get('author_role') ?? ''),
    cover_image: String(formData.get('cover_image') ?? ''),
    tags: normalizeTags(String(formData.get('tags') ?? '')),
    is_published: willPublish,
    published_at: willPublish ? new Date().toISOString() : null,
  }

  await supabase.from('blog_posts').update(payload).eq('id', id)

  revalidatePath('/admin')
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
  revalidatePath('/')
  redirect('/admin/blog')
}

export async function deletePostAction(formData: FormData) {
  const supabase = await createClient()
  const id = String(formData.get('id') ?? '')

  await supabase.from('blog_posts').delete().eq('id', id)

  revalidatePath('/admin')
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
  revalidatePath('/')
}
