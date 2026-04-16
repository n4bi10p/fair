import Link from "next/link";

import { getLatestPublishedBlogPosts, getLatestPublishedEvents } from '@/lib/content'
import { formatDateShort } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const events = await getLatestPublishedEvents(4)
  const posts = await getLatestPublishedBlogPosts(3)

  return (
    <>
      <header className="pt-[160px] pb-[120px] px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-black tracking-tighter leading-[0.95] text-fair-text mb-12">
              Where Pune&apos;s AI minds meet.
            </h1>
            <p className="text-2xl text-fair-brand max-w-3xl mb-12 leading-relaxed">
              FAIR is a collective of AI researchers, engineers, and builders in Pune — building in public, learning together, shipping real work.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-16">
              <Link href="/apply" className="bg-fair-brand text-white px-8 py-5 text-lg font-bold uppercase hover:bg-fair-dark transition-none">
                Join the Community
              </Link>
              <Link href="/events" className="border-2 border-fair-text text-fair-text px-8 py-5 text-lg font-bold uppercase hover:bg-fair-surface transition-none">
                See Upcoming Events
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm font-bold uppercase tracking-[0.05em] text-fair-text/60">
              <span>250+ members</span>
              <span className="text-fair-brand">/</span>
              <span>Pune, India</span>
              <span className="text-fair-brand">/</span>
              <span>Est. 2025</span>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-fair-surface py-8 marquee">
        <div className="marquee-content flex items-center space-x-12">
          <span className="text-xl font-black uppercase tracking-tight text-fair-brand">Computer Vision / NLP / LLMs / Reinforcement Learning / Open Source AI / ML Systems / AI Research / Hackathons / Paper Reviews /</span>
          <span className="text-xl font-black uppercase tracking-tight text-fair-brand">Computer Vision / NLP / LLMs / Reinforcement Learning / Open Source AI / ML Systems / AI Research / Hackathons / Paper Reviews /</span>
        </div>
      </section>

      <section id="about" className="py-[120px] px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 mb-24">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-[48px] font-black leading-tight text-fair-text">
              Not a meetup.
              <br />
              A movement.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xl leading-relaxed text-fair-brand">
              FAIR brings together people who are actually building — not just networking. We do paper reading circles, open-source sprints, hackathons, and deep-dives into what&apos;s actually working in AI right now. We believe the future of AI isn&apos;t just in Silicon Valley, but in the hubs like Pune where builders meet.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-fair-surface p-12 border-t-8 border-fair-brand">
            <div className="text-[48px] font-black text-fair-text mb-2">250+</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Members</div>
          </div>
          <div className="bg-fair-surface p-12 border-t-8 border-fair-brand">
            <div className="text-[48px] font-black text-fair-text mb-2">12+</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Events</div>
          </div>
          <div className="bg-fair-surface p-12 border-t-8 border-fair-brand">
            <div className="text-[36px] font-black text-fair-text mb-2 leading-[1.1] max-w-[180px]">Pune &amp;<br />Online</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Community</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-fair-dark text-white">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-5xl font-black tracking-tighter">What's happening</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-[#3A3C37] p-8 flex flex-col justify-between hover:bg-fair-brand">
                <div>
                  <p className="text-sm uppercase font-bold tracking-wider text-fair-ghost">{formatDateShort(event.event_date)}</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tighter">{event.title}</h3>
                  {event.description ? <p className="mt-2 text-fair-ghost">{event.description}</p> : null}
                </div>
                <Link href={`/events/${event.slug}`} className="mt-8 text-sm uppercase font-bold tracking-wider self-start">View Event →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <span className="material-symbols-outlined text-4xl">description</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tighter">Paper Circles</h3>
              <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                Weekly deep-dives into the latest research papers from Arxiv. No hype, just math and architecture.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl">code_blocks</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tighter">Build Sprints</h3>
              <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                48-hour collaborative sessions to build and ship open-source specialized AI tools and models.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl">podcasts</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tighter">Talks & Demos</h3>
              <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                Flash talks from local builders showing off what they shipped this month. Raw and technical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-12">
            <p className="text-sm uppercase font-bold tracking-wider text-fair-brand">Built by the community, for the community</p>
          </div>
          <div className="flex overflow-x-auto space-x-8 hide-scrollbar">
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Arjun" alt="Arjun M." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Arjun M.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Sana" alt="Sana K." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Sana K.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Vikram" alt="Vikram D." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Vikram D.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Priya" alt="Priya O." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Priya O.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Rohan" alt="Rohan S." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Rohan S.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Ananya" alt="Ananya V." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Ananya V.</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <img src="https://placehold.co/150x150/2E2E2E/FAFAFA?text=Rahul" alt="Rahul T." className="w-36 h-36 object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm font-medium">Rahul T.</p>
            </div>
            <div className="flex-shrink-0 w-36 h-36 bg-fair-brand flex items-center justify-center">
              <span className="font-black text-white text-3xl tracking-tighter">FA\R</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-fair-background">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-5xl font-black tracking-tighter mb-12">From the community</h2>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-center justify-between py-8 border-b border-fair-ghost group">
                <div className="flex items-center">
                  <span className="text-sm font-mono text-fair-ghost mr-8">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-3xl font-bold tracking-tighter group-hover:text-fair-brand">{post.title}</h3>
                </div>
                <span className="material-symbols-outlined text-3xl text-fair-text group-hover:text-fair-brand">arrow_forward</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
