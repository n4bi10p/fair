export default function PeoplePage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <h1 className="text-6xl font-black tracking-tighter">The minds behind FAIR.</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-fair-text/80" style={{ lineHeight: 1.8 }}>
            FAIR is run by a core team of builders and researchers, but the community is the engine.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-left mb-12">
            <p className="text-xs uppercase font-bold tracking-wider text-fair-brand text-[11px]">CORE TEAM</p>
            <h2 className="text-4xl font-black tracking-tighter mt-2">Who runs FAIR</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://placehold.co/300x300/2E2E2E/FAFAFA?text=Core" alt="Team Member" className="w-full object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 font-bold">Arjun M.</p>
              <p className="text-sm text-fair-text/70">ML Engineer</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/300x300/2E2E2E/FAFAFA?text=Core" alt="Team Member" className="w-full object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 font-bold">Sana K.</p>
              <p className="text-sm text-fair-text/70">AI Researcher</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/300x300/2E2E2E/FAFAFA?text=Core" alt="Team Member" className="w-full object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 font-bold">Vikram D.</p>
              <p className="text-sm text-fair-text/70">Data Scientist</p>
            </div>
            <div className="text-center">
              <img src="https://placehold.co/300x300/2E2E2E/FAFAFA?text=Core" alt="Team Member" className="w-full object-cover filter grayscale hover:grayscale-0" />
              <p className="mt-4 font-bold">Priya O.</p>
              <p className="text-sm text-fair-text/70">Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-fair-surface">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-left mb-12">
            <p className="text-xs uppercase font-bold tracking-wider text-fair-brand text-[11px]">THE COMMUNITY</p>
            <h2 className="text-4xl font-black tracking-tighter mt-2">250+ builders & researchers</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <img src="https://placehold.co/100x100/2E2E2E/FAFAFA?text=M" alt="Community Member" className="w-full h-auto object-cover filter grayscale hover:grayscale-0" />
            <a href="/apply" className="w-full h-full bg-fair-brand flex flex-col items-center justify-center text-white text-center min-h-[80px]">
              <span className="text-2xl font-black">+</span>
              <span className="font-black text-xl">YOU?</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-fair-dark text-white">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <p className="text-3xl md:text-4xl font-medium tracking-tight" style={{ lineHeight: 1.6 }}>
            "FAIR is the signal in a sea of noise. It's the only place in Pune where I can have a real, technical conversation about what's happening at the edge of AI."
          </p>
          <div className="mt-8 flex items-center justify-center">
            <img src="https://placehold.co/50x50/E8E6E1/2E2E2E?text=A" alt="Ananya V." className="w-12 h-12 object-cover filter grayscale" />
            <div className="ml-4 text-left">
              <p className="font-bold">Ananya V.</p>
              <p className="text-sm text-white/70">Member since 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
