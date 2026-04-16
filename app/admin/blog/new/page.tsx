import { createPostAction } from '@/app/admin/actions'

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-4xl font-black tracking-tighter">New Blog Post</h1>
      <p className="mt-2 text-fair-text/70">Write and publish a community post.</p>

      <form action={createPostAction} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Title</span>
          <input required name="title" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Slug (optional)</span>
          <input name="slug" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Author Name</span>
          <input name="author_name" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Author Role</span>
          <input name="author_role" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Excerpt</span>
          <textarea name="excerpt" rows={3} className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Tags (comma separated)</span>
          <input name="tags" placeholder="NLP, Research, Engineering" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Cover Image URL</span>
          <input type="url" name="cover_image" className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-xs uppercase font-bold tracking-[0.05em]">Body (Markdown)</span>
          <textarea name="body" rows={16} className="mt-2 w-full bg-fair-surface border border-fair-ghost p-3 outline-none focus:border-fair-brand" />
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
