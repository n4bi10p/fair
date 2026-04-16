'use client'

import { createBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl?.startsWith('http') || !supabaseAnonKey) {
      return
    }

    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error) {
      router.push('/admin')
    }
  }

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-full max-w-sm p-8 bg-fair-surface">
        <h1 className="text-3xl font-black tracking-tighter mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 bg-fair-background border-2 border-fair-ghost focus:border-fair-brand outline-none"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-6 bg-fair-background border-2 border-fair-ghost focus:border-fair-brand outline-none"
          />
          <button
            type="submit"
            className="w-full bg-fair-brand text-white uppercase font-bold text-sm px-8 py-4 border border-transparent hover:bg-fair-surface hover:text-fair-text hover:border-fair-text"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
