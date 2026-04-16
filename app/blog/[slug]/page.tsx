import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import { getPublishedBlogPostBySlug, getPublishedBlogPosts } from '@/lib/content'
import { formatDateLong } from '@/lib/utils'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPublishedBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = (await getPublishedBlogPosts())
    .filter((item) => item.slug !== slug)
    .slice(0, 2)

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-sm mb-4">
            <Link href="/blog" className="hover:text-fair-brand">Blog</Link>
            <span className="mx-2 text-fair-ghost">/</span>
            <span className="text-fair-text/70">{post.tags?.[0] ?? 'Community'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">{post.title}</h1>
          <div className="mt-8 flex items-center">
            <img src="https://placehold.co/50x50/E8E6E1/2E2E2E?text=A" alt="Author" className="w-12 h-12 object-cover filter grayscale" />
            <div className="ml-4">
              <p className="font-bold">{post.author_name ?? 'FAIR'}</p>
              <p className="text-sm text-fair-text/70">{post.published_at ? formatDateLong(post.published_at) : 'Draft'}{post.author_role ? ` · ${post.author_role}` : ''}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-start-4 md:col-span-7">
            <div className="max-w-none leading-[1.8] space-y-6">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{post.body ?? ''}</ReactMarkdown>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-28 text-center">
              <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=A" alt="Author" className="w-24 h-24 object-cover filter grayscale hover:grayscale-0 mx-auto" />
              <p className="mt-4 font-bold">{post.author_name ?? 'FAIR'}</p>
              <p className="text-sm text-fair-text/70">{post.author_role ?? 'Community Member'}</p>
              <a href="#" className="mt-4 inline-block bg-fair-brand text-white uppercase font-bold text-xs px-6 py-3 w-full border border-transparent hover:bg-fair-surface hover:text-fair-text hover:border-fair-text">View Profile</a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-fair-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between">
          <Link href={relatedPosts[0] ? `/blog/${relatedPosts[0].slug}` : '/blog'} className="flex items-center group">
            <span className="material-symbols-outlined text-3xl mr-4">arrow_back</span>
            <div>
              <p className="text-sm uppercase tracking-wider text-fair-text/70">Previous Post</p>
              <p className="text-lg font-bold group-hover:text-fair-brand">{relatedPosts[0]?.title ?? 'Back to Blog'}</p>
            </div>
          </Link>
          <Link href={relatedPosts[1] ? `/blog/${relatedPosts[1].slug}` : '/blog'} className="flex items-center text-left md:text-right group md:self-auto self-start">
            <div>
              <p className="text-sm uppercase tracking-wider text-fair-text/70">Next Post</p>
              <p className="text-lg font-bold group-hover:text-fair-brand">{relatedPosts[1]?.title ?? 'Explore Blog'}</p>
            </div>
            <span className="material-symbols-outlined text-3xl ml-4">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  )
}
