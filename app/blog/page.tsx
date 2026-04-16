import Link from 'next/link'

import { getPublishedBlogPosts } from '@/lib/content'
import { formatDateLong } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">From the community.</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-fair-text/80" style={{ lineHeight: 1.8 }}>
            Learnings, notes, and musings from FAIR members.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {featuredPost ? (
            <Link href={`/blog/${featuredPost.slug}`} className="block bg-fair-dark text-white p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center hover:bg-fair-brand">
              <div>
                <p className="text-sm uppercase font-bold tracking-wider text-white/70">Featured Post</p>
                <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter">{featuredPost.title}</h2>
              </div>
              <div className="text-white/80">
                <p className="text-lg" style={{ lineHeight: 1.8 }}>
                  {featuredPost.excerpt ?? 'Latest writing from FAIR.'}
                </p>
                <div className="mt-8 flex items-center">
                  <img src="https://placehold.co/50x50/E8E6E1/2E2E2E?text=A" alt="Author" className="w-12 h-12 object-cover filter grayscale" />
                  <div className="ml-4">
                    <p className="font-bold">{featuredPost.author_name ?? 'FAIR'}</p>
                    <p className="text-sm text-white/70">{featuredPost.published_at ? formatDateLong(featuredPost.published_at) : 'Draft'}</p>
                  </div>
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-8">
            <p className="text-xs uppercase font-bold tracking-wider text-fair-brand mb-8 text-[11px]">WRITINGS</p>
            <div className="space-y-8">
              {remainingPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block border-b border-fair-ghost/50 pb-8 group">
                  <div className="flex items-center text-sm text-fair-text/70 mb-2">
                    <span>{post.author_name ?? 'FAIR'}</span>
                    <span className="mx-2">/</span>
                    <span>{post.published_at ? formatDateLong(post.published_at) : 'Draft'}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-fair-brand">{post.title}</h3>
                  {post.excerpt ? (
                    <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                      {post.excerpt}
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(post.tags ?? []).map((tag) => (
                      <span key={tag} className="bg-fair-surface text-fair-text uppercase font-bold text-xs px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <h4 className="text-sm uppercase font-bold tracking-wider text-fair-brand">Categories</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Tutorials</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Recaps</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Research</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
