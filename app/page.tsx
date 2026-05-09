import Link from "next/link";

import FounderPhoto from '@/components/FounderPhoto'
import { getLatestPublishedBlogPosts, getLatestPublishedEvents } from '@/lib/content'
import { formatDateShort } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const events = await getLatestPublishedEvents(4)
  const posts = await getLatestPublishedBlogPosts(3)

  return (
    <>
      <header className="pt-28 md:pt-[160px] pb-16 md:pb-[120px] px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-10">
            <h1 className="text-[52px] sm:text-[64px] md:text-[72px] lg:text-[96px] font-black tracking-tighter leading-[0.95] text-fair-text mb-8 md:mb-12">
              Where Pune&apos;s AI minds meet.
            </h1>
            <p className="text-xl md:text-2xl text-fair-brand max-w-3xl mb-8 md:mb-12 leading-relaxed">
              FAIR is a collective of AI researchers, engineers, and builders in Pune — Trying to create Bangalore's founder culture in Pune.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-stretch sm:items-center mb-10 md:mb-16 max-w-xl">
              <Link href="/apply" className="bg-fair-brand text-white px-6 md:px-8 py-4 md:py-5 text-base md:text-lg text-center font-bold uppercase hover:bg-fair-dark transition-none">
                Join the Community
              </Link>
              <Link href="/events" className="border-2 border-fair-text text-fair-text px-6 md:px-8 py-4 md:py-5 text-base md:text-lg text-center font-bold uppercase hover:bg-fair-surface transition-none">
                See Upcoming Events
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-bold uppercase tracking-[0.05em] text-fair-text/60">
              <span>250+ members</span>
              <span className="text-fair-brand">/</span>
              <span>Pune, India</span>
              <span className="text-fair-brand">/</span>
              <span>Est. 2025</span>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-fair-surface py-6 md:py-8 marquee">
        <div className="marquee-content flex items-center space-x-12">
          <span className="text-base md:text-xl font-black uppercase tracking-tight text-fair-brand">Computer Vision / NLP / LLMs / Reinforcement Learning / Open Source AI / ML Systems / AI Research / Hackathons / Paper Reviews /</span>
          <span className="text-base md:text-xl font-black uppercase tracking-tight text-fair-brand">Computer Vision / NLP / LLMs / Reinforcement Learning / Open Source AI / ML Systems / AI Research / Hackathons / Paper Reviews /</span>
        </div>
      </section>

      <section id="about" className="py-16 md:py-[120px] px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-24">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-[40px] md:text-[48px] font-black leading-tight text-fair-text">
              Not a meetup.
              <br />
              A movement.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed text-fair-brand">
              FAIR brings together people who are actually building — not just networking. We do paper reading circles, open-source sprints, hackathons, and deep-dives into what&apos;s actually working in AI right now. We believe the future of AI isn&apos;t just in Silicon Valley, The place where builders connect with Founders.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-fair-surface p-8 md:p-12 border-t-8 border-fair-brand">
            <div className="text-[48px] font-black text-fair-text mb-2">250+</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Members</div>
          </div>
          <div className="bg-fair-surface p-8 md:p-12 border-t-8 border-fair-brand">
            <div className="text-[48px] font-black text-fair-text mb-2">12+</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Events</div>
          </div>
          <div className="bg-fair-surface p-8 md:p-12 border-t-8 border-fair-brand">
            <div className="text-[36px] font-black text-fair-text mb-2 leading-[1.1] max-w-[180px]">Pune &amp;<br />Online</div>
            <div className="text-sm font-bold uppercase tracking-[0.05em] text-fair-brand">Community</div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-fair-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">What's happening</h2>
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

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm uppercase font-bold tracking-wider text-fair-brand">Built by the community, for the community</p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="flex-shrink-0 text-center">
              <FounderPhoto
                imageSrc="/founders/talib.jpeg"
                alt="Talib Sayyed"
                linkedinUrl="https://www.linkedin.com/in/talibs"
                imageClassName="w-36 h-36 object-cover filter grayscale hover:grayscale-0"
              />
              <p className="mt-4 text-sm font-medium">Talib Sayyed</p>
            </div>
            <div className="flex-shrink-0 text-center">
              <FounderPhoto
                imageSrc="/founders/nabil.jpeg"
                alt="Nabil Shaikh"
                linkedinUrl="https://linktr.ee/n4bi10p"
                imageClassName="w-36 h-36 object-cover filter grayscale hover:grayscale-0"
              />
              <p className="mt-4 text-sm font-medium">Nabil Shaikh</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-fair-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 md:mb-12">From the community</h2>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 border-b border-fair-ghost group">
                <div className="flex items-start md:items-center">
                  <span className="text-sm font-mono text-fair-ghost mr-4 md:mr-8">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-fair-brand">{post.title}</h3>
                </div>
                <span className="material-symbols-outlined text-3xl text-fair-text group-hover:text-fair-brand self-end md:self-auto">arrow_forward</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
