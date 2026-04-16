import Link from 'next/link'

import { getPublishedEvents } from '@/lib/content'
import { formatDateLong, formatDateShort, isFutureOrToday } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const events = await getPublishedEvents()
  const upcomingEvents = events.filter((event) => isFutureOrToday(event.event_date))
  const pastEvents = events.filter((event) => !isFutureOrToday(event.event_date)).reverse()

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Events</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-fair-text/80" style={{ lineHeight: 1.8 }}>
            Talks, workshops, and build sprints from the community.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <button className="bg-fair-surface text-fair-text uppercase font-bold text-xs px-4 py-2">Upcoming</button>
            <button className="bg-transparent border border-fair-ghost text-fair-text/60 uppercase font-bold text-xs px-4 py-2">Past</button>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 6).map((event) => (
              <div key={event.id} className="bg-fair-surface p-8 flex flex-col justify-between hover:bg-fair-brand hover:text-white group min-h-[280px]">
                <div>
                  <p className="text-sm uppercase font-bold tracking-wider text-fair-text/60 group-hover:text-white/80">{formatDateShort(event.event_date)}</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tighter">{event.title}</h3>
                  {event.description ? (
                    <p className="mt-2 text-fair-text/60 group-hover:text-white/80">{event.description}</p>
                  ) : null}
                </div>
                {event.is_sold_out ? (
                  <p className="mt-8 text-sm uppercase font-bold tracking-wider self-start text-[#8A5A44]">Sold Out</p>
                ) : event.rsvp_link ? (
                  <a href={event.rsvp_link} target="_blank" rel="noreferrer" className="mt-8 text-sm uppercase font-bold tracking-wider self-start">
                    RSVP →
                  </a>
                ) : (
                  <Link href={`/events/${event.slug}`} className="mt-8 text-sm uppercase font-bold tracking-wider self-start">
                    View Details →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-fair-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10 md:mb-12">From the Archive</h2>
          <div className="space-y-4">
            {pastEvents.slice(0, 8).map((event) => (
              <div key={event.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-6 border-b border-fair-ghost/50">
                <div className="flex items-center">
                  <span className="bg-fair-brand text-white uppercase font-bold text-xs px-3 py-1 mr-4 md:mr-6">{event.format ?? 'EVENT'}</span>
                  <h3 className="text-xl font-bold tracking-tighter">{event.title}</h3>
                </div>
                <span className="text-sm text-fair-text/60">{formatDateLong(event.event_date)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-fair-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">Don't miss the next one.</h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">Get notified when we announce new events, sprints, and paper circles.</p>
          <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row sm:items-end gap-4">
            <input type="email" placeholder="Enter your email" className="w-full min-w-0 bg-transparent border-b-2 border-white/50 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white" />
            <button className="bg-fair-brand text-white uppercase font-bold text-sm px-8 py-3.5 whitespace-nowrap hover:bg-white hover:text-fair-text">Notify Me</button>
          </div>
        </div>
      </section>
    </>
  )
}
