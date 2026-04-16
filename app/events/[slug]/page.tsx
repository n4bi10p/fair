import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

import { getPublishedEventBySlug } from '@/lib/content'
import { formatDateLong } from '@/lib/utils'

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getPublishedEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return (
    <>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-12">
          <div className="text-sm mb-6">
            <Link href="/events" className="hover:text-fair-brand">
              Events
            </Link>
            <span className="mx-2 text-fair-ghost">/</span>
            <span className="text-fair-text/70">{event.format ?? 'EVENT'}</span>
          </div>

          <h1 className="text-6xl font-black tracking-tighter">{event.title}</h1>

          <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase font-bold tracking-wider text-fair-text/70">
            <span>{formatDateLong(event.event_date)}</span>
            <span>/</span>
            <span>{event.location ?? 'Location TBA'}</span>
            <span>/</span>
            <span>{event.format ?? 'EVENT'}</span>
          </div>

          {event.description ? (
            <p className="mt-8 text-xl leading-relaxed text-fair-brand">{event.description}</p>
          ) : null}

          {!event.is_sold_out && event.rsvp_link ? (
            <a
              href={event.rsvp_link}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block bg-fair-brand text-white px-8 py-4 text-sm font-bold uppercase hover:bg-fair-dark transition-none"
            >
              RSVP Now
            </a>
          ) : null}
        </div>
      </section>

      <article className="pb-24">
        <div className="max-w-4xl mx-auto px-12">
          <div className="prose prose-neutral max-w-none">
            <ReactMarkdown>{event.body ?? ''}</ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  )
}
