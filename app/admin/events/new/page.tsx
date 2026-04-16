import { createEventAction } from '@/app/admin/actions'

export default function NewEventPage() {
  return (
    <div>
      <h1 className="text-4xl font-black tracking-tighter">New Event</h1>
      <p className="mt-2 text-fair-text/70">Create a draft or publish instantly.</p>

      <form action={createEventAction} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Title</span>
          <input required name="title" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Slug (optional)</span>
          <input name="slug" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Event Date & Time</span>
          <input required type="datetime-local" name="event_date" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Location</span>
          <input name="location" placeholder="Pune, India / Online / Hybrid" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Format</span>
          <select name="format" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand">
            <option>WORKSHOP</option>
            <option>TALK</option>
            <option>PAPER CIRCLE</option>
            <option>BUILD SPRINT</option>
            <option>LAB</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">RSVP Link</span>
          <input type="url" name="rsvp_link" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Short Description</span>
          <textarea name="description" rows={3} className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Body (Markdown)</span>
          <textarea name="body" rows={12} className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Cover Image URL</span>
          <input type="url" name="cover_image" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.05em]">
          <input type="checkbox" name="is_sold_out" />
          Is Sold Out
        </label>

        <div className="md:col-span-2 flex gap-3">
          <button type="submit" name="target_status" value="draft" className="bg-fair-surface border border-fair-text text-fair-text uppercase font-bold text-xs px-4 py-3 hover:bg-fair-brand hover:text-white transition-none">
            Save Draft
          </button>
          <button type="submit" name="target_status" value="publish" className="bg-fair-brand text-white uppercase font-bold text-xs px-4 py-3 hover:bg-fair-dark transition-none">
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}
