import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

async function submitApplication(formData: FormData) {
  'use server'

  const supabase = await createClient()
  const { error } = await supabase.from('applications').insert({
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    location: String(formData.get('location') ?? ''),
    role: String(formData.get('role') ?? ''),
    building: String(formData.get('building') ?? ''),
    link: String(formData.get('link') ?? ''),
    how_heard: String(formData.get('how_heard') ?? ''),
    why_join: String(formData.get('why_join') ?? ''),
  })

  if (error) {
    redirect('/apply?status=error')
  }

  redirect('/apply?status=submitted')
}

export const dynamic = 'force-dynamic'

type ApplyPageProps = {
  searchParams: Promise<{ status?: string }>
}

export default async function ApplyPage({ searchParams }: ApplyPageProps) {
  const { status } = await searchParams

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Join the Community</h1>
          <p className="mt-6 text-lg text-fair-text/80 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            FAIR is a curated community. We're looking for builders, researchers, and thinkers who are passionate about pushing the boundaries of AI. Tell us a bit about yourself.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12">
          {status === 'submitted' ? (
            <p className="mb-8 bg-[#dcefe3] text-[#2d6a4f] px-4 py-3 text-sm font-bold uppercase tracking-[0.05em]">
              Application submitted successfully.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="mb-8 bg-[#f8e9e9] text-[#9b2c2c] px-4 py-3 text-sm font-bold uppercase tracking-[0.05em]">
              Submission failed. Please try again.
            </p>
          ) : null}

          <form action={submitApplication}>
            <div className="grid grid-cols-1 gap-y-10">
              <div>
                <input required type="text" name="name" id="name" className="form-input w-full text-lg" placeholder="Full Name" />
              </div>
              <div>
                <input required type="email" name="email" id="email" className="form-input w-full text-lg" placeholder="Email Address" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <input type="text" name="location" id="location" className="form-input w-full text-lg" placeholder="Location" />
                </div>
                <div>
                  <input type="text" name="role" id="role" className="form-input w-full text-lg" placeholder="Your Role" />
                </div>
              </div>
              <div>
                <input type="text" name="building" id="building" className="form-input w-full text-lg" placeholder="What are you building?" />
              </div>
              <div>
                <input type="url" name="link" id="link" className="form-input w-full text-lg" placeholder="Website / Portfolio / GitHub" />
              </div>
              <div>
                <input type="text" name="how_heard" id="how_heard" className="form-input w-full text-lg" placeholder="How did you hear about FAIR?" />
              </div>
              <div>
                <textarea name="why_join" id="why_join" rows={4} className="form-input w-full text-lg" placeholder="Why do you want to join FAIR?" />
              </div>
            </div>
            <div className="mt-12">
              <button type="submit" className="w-full bg-fair-brand text-white uppercase font-bold text-sm px-6 py-4 border border-transparent hover:bg-fair-surface hover:text-fair-text hover:border-fair-text">Submit Application</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
