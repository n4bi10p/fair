import Link from 'next/link'

import { deleteEventAction } from '@/app/admin/actions'
import { createClient } from '@/lib/supabase/server'
import { formatDateLong } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function AdminEventsPage() {
  const supabase = await createClient()
  const { data: events } = await supabase
    .from('events')
    .select('id,title,slug,event_date,location,format,is_published,is_sold_out')
    .order('event_date', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black tracking-tighter">Events</h1>
        <Link href="/vault/events/new" className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-3 hover:bg-fair-dark transition-none">
          New Event
        </Link>
      </div>

      <div className="border border-fair-ghost">
        {(events ?? []).map((event) => (
          <div key={event.id} className="p-4 border-b border-fair-ghost last:border-b-0 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold tracking-tight">{event.title}</p>
              <p className="mt-1 text-xs text-fair-text/70">/{event.slug} · {formatDateLong(event.event_date)} · {event.location ?? 'TBA'} · {event.format ?? 'EVENT'}</p>
              <div className="mt-2 flex gap-2 text-[10px] uppercase font-bold tracking-[0.05em]">
                <span className={`px-2 py-1 ${event.is_published ? 'bg-[#dcefe3] text-[#2d6a4f]' : 'bg-[#f4e7dd] text-[#8a5a44]'}`}>
                  {event.is_published ? 'Published' : 'Draft'}
                </span>
                {event.is_sold_out ? <span className="px-2 py-1 bg-[#f4e7dd] text-[#8a5a44]">Sold Out</span> : null}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href={`/vault/events/${event.id}`} className="px-3 py-2 text-xs uppercase font-bold border border-fair-text hover:bg-fair-surface transition-none">
                Edit
              </Link>
              <form action={deleteEventAction}>
                <input type="hidden" name="id" value={event.id} />
                <button type="submit" className="px-3 py-2 text-xs uppercase font-bold border border-[#9b2c2c] text-[#9b2c2c] hover:bg-[#f8e9e9] transition-none">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
