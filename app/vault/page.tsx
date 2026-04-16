'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { createClient } from '@/lib/supabase/client'
import { getSupabaseEnv } from '@/lib/supabase/config'

export default function VaultLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabaseConfigured = getSupabaseEnv().isConfigured

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!supabaseConfigured) {
      setError('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.')
      return
    }

    const supabase = createClient()
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError('Invalid credentials. Access denied.')
      return
    }

    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-fair-dark text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-4xl font-black tracking-tighter">FA\R</p>
          <p className="mt-3 text-xs uppercase font-bold tracking-[0.05em] text-white/70">Admin Access</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-8">
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent border-b-2 border-white/40 py-3 outline-none focus:border-white transition-none"
          />
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-transparent border-b-2 border-white/40 py-3 outline-none focus:border-white transition-none"
          />

          {error ? <p className="text-sm text-[#f4b6b6]">{error}</p> : null}

          <button
            type="submit"
            className="w-full bg-fair-brand text-white uppercase font-bold text-sm px-8 py-4 hover:bg-fair-dark border border-fair-brand transition-none"
          >
            Sign In →
          </button>
        </form>
      </div>
    </div>
  )
}
