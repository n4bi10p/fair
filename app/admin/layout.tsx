import { redirect } from 'next/navigation'

import AdminNav from '@/components/admin/AdminNav'
import { createClient } from '@/lib/supabase/server'

type AdminLayoutProps = {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/vault')
  }

  return (
    <div className="min-h-screen bg-fair-background text-fair-text">
      <AdminNav />
      <main className="max-w-[1440px] mx-auto px-8 py-10">{children}</main>
    </div>
  )
}
