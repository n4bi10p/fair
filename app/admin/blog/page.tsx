import Link from 'next/link'

import { deletePostAction } from '@/app/admin/actions'
import { createClient } from '@/lib/supabase/server'
import { formatDateLong } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function AdminBlogPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id,title,slug,author_name,published_at,is_published,tags')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black tracking-tighter">Blog Posts</h1>
        <Link href="/vault/blog/new" className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-3 hover:bg-fair-dark transition-none">
          New Post
        </Link>
      </div>

      <div className="border border-fair-ghost">
        {(posts ?? []).map((post) => (
          <div key={post.id} className="p-4 border-b border-fair-ghost last:border-b-0 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold tracking-tight">{post.title}</p>
              <p className="mt-1 text-xs text-fair-text/70">/{post.slug} · {post.author_name ?? 'FAIR'} · {post.published_at ? formatDateLong(post.published_at) : 'Not published yet'}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-[10px] uppercase font-bold tracking-[0.05em]">
                <span className={`px-2 py-1 ${post.is_published ? 'bg-[#dcefe3] text-[#2d6a4f]' : 'bg-[#f4e7dd] text-[#8a5a44]'}`}>
                  {post.is_published ? 'Published' : 'Draft'}
                </span>
                {(post.tags ?? []).map((tag: string) => (
                  <span key={tag} className="px-2 py-1 bg-fair-surface text-fair-text">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href={`/vault/blog/${post.id}`} className="px-3 py-2 text-xs uppercase font-bold border border-fair-text hover:bg-fair-surface transition-none">
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
  )
}
