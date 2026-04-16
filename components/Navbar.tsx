'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isAboutActive = pathname === '/'

  const navClass = (path: string) => {
    if (pathname === path) {
      return 'bg-fair-dark text-white font-medium px-2 py-1 transition-none'
    }
    return 'text-fair-text font-medium hover:bg-fair-dark hover:text-white px-2 py-1 transition-none'
  }

  const aboutClass = isAboutActive
    ? 'bg-fair-dark text-white font-medium px-2 py-1 transition-none'
    : 'text-fair-text font-medium hover:bg-fair-dark hover:text-white px-2 py-1 transition-none'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fair-background border-b border-fair-ghost">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex justify-between items-center py-4 md:py-6 gap-3">
          <Link href="/" className="font-black text-xl md:text-2xl tracking-tighter text-fair-text shrink-0">
            FA\R
          </Link>
          <nav className="flex-1 min-w-0 flex items-center gap-4 md:gap-8 overflow-x-auto whitespace-nowrap hide-scrollbar text-sm md:text-base md:flex-none md:min-w-fit md:absolute md:left-1/2 md:-translate-x-1/2 md:overflow-visible">
            <Link href="/#about" className={aboutClass}>
              About
            </Link>
            <Link href="/events" className={navClass('/events')}>
              Events
            </Link>
            <Link href="/people" className={navClass('/people')}>
              People
            </Link>
            <Link href="/blog" className={navClass('/blog')}>
              Blog
            </Link>
            <Link href="/apply" className={navClass('/apply')}>
              Apply
            </Link>
          </nav>
          <div className="shrink-0">
            <Link href="/apply" className="bg-fair-brand text-white uppercase font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 whitespace-nowrap hover:bg-fair-dark transition-none">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
