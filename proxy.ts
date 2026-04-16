import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

import { getSupabaseEnv } from '@/lib/supabase/config'

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Block direct /admin access by sending users to the home page.
  if (pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const { isConfigured, url, anonKey } = getSupabaseEnv()

  if (!isConfigured) {
    if (pathname.startsWith('/vault') && pathname !== '/vault') {
      return NextResponse.redirect(new URL('/vault', request.url))
    }
    return response
  }

  const supabase = createServerClient(
    url,
    anonKey,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Unauthenticated users can only access the /vault login entrypoint.
  if (!user && pathname.startsWith('/vault') && pathname !== '/vault') {
    return NextResponse.redirect(new URL('/vault', request.url))
  }

  // Authenticated /vault URLs serve admin pages while keeping /vault in the address bar.
  if (user && pathname.startsWith('/vault')) {
    const suffix = pathname.slice('/vault'.length)
    const target = suffix ? `/admin${suffix}` : '/admin'
    return NextResponse.rewrite(new URL(target, request.url))
  }


  return response
}

export const config = {
  matcher: ['/admin/:path*', '/vault/:path*'],
}
