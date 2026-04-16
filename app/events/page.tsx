export default function EventsPage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h1 className="text-6xl font-black tracking-tighter">Events</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-fair-text/80" style={{ lineHeight: 1.8 }}>
            Talks, workshops, and build sprints from the community.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <button className="bg-fair-surface text-fair-text uppercase font-bold text-xs px-4 py-2">Upcoming</button>
            <button className="bg-transparent border border-fair-ghost text-fair-text/60 uppercase font-bold text-xs px-4 py-2">Past</button>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-fair-surface p-8 flex flex-col justify-between hover:bg-fair-brand hover:text-white group min-h-[280px]">
              <div>
                <p className="text-sm uppercase font-bold tracking-wider text-fair-text/60 group-hover:text-white/80">JUL 20</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tighter">Advanced Prompt Engineering</h3>
                <p className="mt-2 text-fair-text/60 group-hover:text-white/80">Moving beyond basic prompts to structured, multi-step agentic workflows.</p>
              </div>
              <a href="#" className="mt-8 text-sm uppercase font-bold tracking-wider self-start">RSVP →</a>
            </div>
            <div className="bg-fair-surface p-8 flex flex-col justify-between hover:bg-fair-brand hover:text-white group min-h-[280px]">
              <div>
                <p className="text-sm uppercase font-bold tracking-wider text-fair-text/60 group-hover:text-white/80">AUG 02</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tighter">Intro to Julia</h3>
                <p className="mt-2 text-fair-text/60 group-hover:text-white/80">A hands-on workshop for Python developers new to the Julia language.</p>
              </div>
              <a href="#" className="mt-8 text-sm uppercase font-bold tracking-wider self-start">RSVP →</a>
            </div>
            <div className="bg-fair-surface p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-sm uppercase font-bold tracking-wider text-fair-text/60">JUN 11</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tighter">Finetuning LLMs on a Budget</h3>
                <p className="mt-2 text-fair-text/60">Techniques for QLoRA and parameter-efficient finetuning on consumer GPUs.</p>
              </div>
              <p className="mt-8 text-sm uppercase font-bold tracking-wider self-start text-[#8A5A44]">SOLD OUT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-fair-surface">
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="text-4xl font-black tracking-tighter mb-12">From the Archive</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-6 border-b border-fair-ghost/50">
              <div className="flex items-center">
                <span className="bg-fair-brand text-white uppercase font-bold text-xs px-3 py-1 mr-6">WORKSHOP</span>
                <h3 className="text-xl font-bold tracking-tighter">Diffusion Model Workshop</h3>
              </div>
              <span className="text-sm text-fair-text/60">May 15, 2026</span>
            </div>
            <div className="flex items-center justify-between py-6 border-b border-fair-ghost/50">
              <div className="flex items-center">
                <span className="bg-fair-brand text-white uppercase font-bold text-xs px-3 py-1 mr-6">TALK</span>
                <h3 className="text-xl font-bold tracking-tighter">RAG Systems at Scale</h3>
              </div>
              <span className="text-sm text-fair-text/60">May 04, 2026</span>
            </div>
            <div className="flex items-center justify-between py-6 border-b border-fair-ghost/50">
              <div className="flex items-center">
                <span className="bg-fair-brand text-white uppercase font-bold text-xs px-3 py-1 mr-6">TALK</span>
                <h3 className="text-xl font-bold tracking-tighter">LLM Inference Optimization</h3>
              </div>
              <span className="text-sm text-fair-text/60">Apr 19, 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-fair-dark text-white">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h2 className="text-4xl font-black tracking-tighter">Don't miss the next one.</h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">Get notified when we announce new events, sprints, and paper circles.</p>
          <div className="mt-8 max-w-md mx-auto flex">
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-b-2 border-white/50 pb-3 text-white placeholder-white/50 focus:outline-none focus:border-white" />
            <button className="bg-fair-brand text-white uppercase font-bold text-sm px-8 py-3 hover:bg-fair-text">Notify Me</button>
          </div>
        </div>
      </section>
    </>
  )
}
