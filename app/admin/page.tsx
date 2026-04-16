import { createServerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // Ignore set attempts in server components.
          }
        },
      },
    }
  )
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="p-12">
      <h1 className="text-4xl font-black tracking-tighter">Admin Dashboard</h1>
      <p className="mt-4">Welcome, {user.email}</p>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tighter">Manage Content</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-fair-surface">
            <h3 className="font-bold text-lg">Events</h3>
            <p className="mt-2 text-sm">Manage upcoming events.</p>
          </div>
          <div className="p-6 bg-fair-surface">
            <h3 className="font-bold text-lg">Blog Posts</h3>
            <p className="mt-2 text-sm">Create and edit blog posts.</p>
          </div>
          <div className="p-6 bg-fair-surface">
            <h3 className="font-bold text-lg">Members</h3>
            <p className="mt-2 text-sm">View and manage community members.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
