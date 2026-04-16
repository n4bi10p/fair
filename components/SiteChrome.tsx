'use client'

import { usePathname } from 'next/navigation'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

type SiteChromeProps = {
  children: React.ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const hideChrome = pathname.startsWith('/admin') || pathname === '/vault'

  return (
    <>
      {!hideChrome ? <Navbar /> : null}
      <main>{children}</main>
      {!hideChrome ? <Footer /> : null}
    </>
  )
}
