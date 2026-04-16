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
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="font-black text-2xl tracking-tighter text-fair-text">
            FA\R
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
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
          <div>
            <Link href="/apply" className="bg-fair-brand text-white uppercase font-bold text-sm px-6 py-3 hover:bg-fair-dark transition-none">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
