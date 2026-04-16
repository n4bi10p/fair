export default function BlogPage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h1 className="text-6xl font-black tracking-tighter">From the community.</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-fair-text/80" style={{ lineHeight: 1.8 }}>
            Learnings, notes, and musings from FAIR members.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-12">
          <a href="/blog/fine-tuning-small-language-models" className="block bg-fair-dark text-white p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center hover:bg-fair-brand">
            <div>
              <p className="text-sm uppercase font-bold tracking-wider text-white/70">FEATURED POST</p>
              <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter">The State of AI in Pune</h2>
            </div>
            <div className="text-white/80">
              <p className="text-lg" style={{ lineHeight: 1.8 }}>
                An in-depth look at the talent, research, and startup ecosystem for Artificial Intelligence in Pune, and where it's headed next.
              </p>
              <div className="mt-8 flex items-center">
                <img src="https://placehold.co/50x50/E8E6E1/2E2E2E?text=A" alt="Author" className="w-12 h-12 object-cover filter grayscale" />
                <div className="ml-4">
                  <p className="font-bold">Arjun M.</p>
                  <p className="text-sm text-white/70">Apr 10, 2026</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
            <p className="text-xs uppercase font-bold tracking-wider text-fair-brand mb-8 text-[11px]">WRITINGS</p>
            <div className="space-y-8">
              <a href="/blog/fine-tuning-small-language-models" className="block border-b border-fair-ghost/50 pb-8 group">
                <div className="flex items-center text-sm text-fair-text/70 mb-2">
                  <span>Arjun M.</span>
                  <span className="mx-2">/</span>
                  <span>Apr 10, 2026</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tighter group-hover:text-fair-brand">Fine-tuning Small Language Models</h3>
                <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                  A practical guide to fine-tuning models like Llama 3 8B and Phi-3 on a single consumer GPU, from dataset preparation to deployment.
                </p>
                <div className="mt-4">
                  <span className="bg-fair-surface text-fair-text uppercase font-bold text-xs px-3 py-1">TUTORIAL</span>
                </div>
              </a>
              <a href="/blog/notes-from-the-paper-reading-circle" className="block border-b border-fair-ghost/50 pb-8 group">
                <div className="flex items-center text-sm text-fair-text/70 mb-2">
                  <span>Sana K.</span>
                  <span className="mx-2">/</span>
                  <span>Mar 28, 2026</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tighter group-hover:text-fair-brand">Notes from the Paper Reading Circle</h3>
                <p className="mt-2 text-fair-text/80" style={{ lineHeight: 1.8 }}>
                  Key takeaways and discussions from our recent session on "Leave No Context Behind: Efficient Infinite Context LLMs with Infini-attention".
                </p>
                <div className="mt-4">
                  <span className="bg-fair-surface text-fair-text uppercase font-bold text-xs px-3 py-1">RECAP</span>
                </div>
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <h4 className="text-sm uppercase font-bold tracking-wider text-fair-brand">Categories</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Tutorials</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Recaps</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Research</a></li>
                <li><a href="#" className="block py-2 border-b border-fair-ghost/50 hover:text-fair-brand">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
