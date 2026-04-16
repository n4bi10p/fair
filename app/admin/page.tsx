import Link from 'next/link'

import { deleteEventAction, deletePostAction } from '@/app/admin/actions'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const [{ count: totalEvents }, { count: publishedEvents }, { count: totalPosts }, { count: publishedPosts }] = await Promise.all([
    supabase.from('events').select('*', { count: 'exact', head: true }),
    supabase.from('events').select('*', { count: 'exact', head: true }).eq('is_published', true),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('is_published', true),
  ])

  const [{ data: recentEvents }, { data: recentPosts }] = await Promise.all([
    supabase.from('events').select('id,title,is_published,created_at').order('created_at', { ascending: false }).limit(5),
    supabase.from('blog_posts').select('id,title,is_published,created_at').order('created_at', { ascending: false }).limit(5),
  ])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tighter">Admin Dashboard</h1>
          <p className="mt-2 text-fair-text/70">Manage FAIR events and posts.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/events/new" className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-3 hover:bg-fair-dark transition-none">
            New Event
          </Link>
          <Link href="/admin/blog/new" className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-3 hover:bg-fair-dark transition-none">
            New Post
          </Link>
        </div>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-fair-surface p-5 border-t-4 border-fair-brand">
          <p className="text-xs uppercase font-bold tracking-[0.05em] text-fair-text/60">Total Events</p>
          <p className="mt-3 text-4xl font-black tracking-tighter">{totalEvents ?? 0}</p>
        </div>
        <div className="bg-fair-surface p-5 border-t-4 border-fair-brand">
          <p className="text-xs uppercase font-bold tracking-[0.05em] text-fair-text/60">Published Events</p>
          <p className="mt-3 text-4xl font-black tracking-tighter">{publishedEvents ?? 0}</p>
        </div>
        <div className="bg-fair-surface p-5 border-t-4 border-fair-brand">
          <p className="text-xs uppercase font-bold tracking-[0.05em] text-fair-text/60">Total Posts</p>
          <p className="mt-3 text-4xl font-black tracking-tighter">{totalPosts ?? 0}</p>
        </div>
        <div className="bg-fair-surface p-5 border-t-4 border-fair-brand">
          <p className="text-xs uppercase font-bold tracking-[0.05em] text-fair-text/60">Published Posts</p>
          <p className="mt-3 text-4xl font-black tracking-tighter">{publishedPosts ?? 0}</p>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black tracking-tighter">Recent Events</h2>
            <Link href="/admin/events" className="text-sm font-bold uppercase hover:text-fair-brand">View All</Link>
          </div>
          <div className="border border-fair-ghost">
            {(recentEvents ?? []).map((event) => (
              <div key={event.id} className="p-4 border-b border-fair-ghost last:border-b-0 flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold tracking-tight">{event.title}</p>
                  <p className={`mt-1 text-xs uppercase font-bold tracking-[0.05em] ${event.is_published ? 'text-[#2d6a4f]' : 'text-[#8a5a44]'}`}>
                    {event.is_published ? 'Published' : 'Draft'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/events/${event.id}`} className="px-3 py-2 text-xs uppercase font-bold border border-fair-text hover:bg-fair-surface transition-none">
                    Edit
                  </Link>
                  <form action={deleteEventAction}>
                    <input type="hidden" name="id" value={event.id} />
                    <button type="submit" className="px-3 py-2 text-xs uppercase font-bold border border-[#9b2c2c] text-[#9b2c2c] hover:bg-[#f8e9e9] transition-none">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black tracking-tighter">Recent Posts</h2>
            <Link href="/admin/blog" className="text-sm font-bold uppercase hover:text-fair-brand">View All</Link>
          </div>
          <div className="border border-fair-ghost">
            {(recentPosts ?? []).map((post) => (
              <div key={post.id} className="p-4 border-b border-fair-ghost last:border-b-0 flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold tracking-tight">{post.title}</p>
                  <p className={`mt-1 text-xs uppercase font-bold tracking-[0.05em] ${post.is_published ? 'text-[#2d6a4f]' : 'text-[#8a5a44]'}`}>
                    {post.is_published ? 'Published' : 'Draft'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/blog/${post.id}`} className="px-3 py-2 text-xs uppercase font-bold border border-fair-text hover:bg-fair-surface transition-none">
                    Edit
                  </Link>
                  <form action={deletePostAction}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit" className="px-3 py-2 text-xs uppercase font-bold border border-[#9b2c2c] text-[#9b2c2c] hover:bg-[#f8e9e9] transition-none">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
