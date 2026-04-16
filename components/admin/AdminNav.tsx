'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'

const baseItemClass = 'px-3 py-2 text-sm font-bold uppercase tracking-[0.05em] transition-none'

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/vault')
    router.refresh()
  }

  return (
    <header className="border-b border-fair-ghost bg-fair-background sticky top-0 z-30">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/vault" className="text-2xl font-black tracking-tighter text-fair-text">
            FA\R
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/vault" className={`${baseItemClass} ${isActive('/vault') && pathname === '/vault' ? 'bg-fair-dark text-white' : 'text-fair-text hover:bg-fair-dark hover:text-white'}`}>
              Dashboard
            </Link>
            <Link href="/vault/events" className={`${baseItemClass} ${isActive('/vault/events') ? 'bg-fair-dark text-white' : 'text-fair-text hover:bg-fair-dark hover:text-white'}`}>
              Events
            </Link>
            <Link href="/vault/blog" className={`${baseItemClass} ${isActive('/vault/blog') ? 'bg-fair-dark text-white' : 'text-fair-text hover:bg-fair-dark hover:text-white'}`}>
              Blog
            </Link>
          </nav>
        </div>

        <button onClick={signOut} className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-2 hover:bg-fair-dark transition-none">
          Sign Out
        </button>
      </div>
    </header>
  )
}
