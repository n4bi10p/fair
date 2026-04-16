export default function ApplyPage() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-12 text-center">
          <h1 className="text-6xl font-black tracking-tighter">Join the Community</h1>
          <p className="mt-6 text-lg text-fair-text/80 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            FAIR is a curated community. We're looking for builders, researchers, and thinkers who are passionate about pushing the boundaries of AI. Tell us a bit about yourself.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-2xl mx-auto px-12">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-y-10">
              <div>
                <input type="text" name="full-name" id="full-name" className="form-input w-full text-lg" placeholder="Full Name" />
              </div>
              <div>
                <input type="email" name="email" id="email" className="form-input w-full text-lg" placeholder="Email Address" />
              </div>
              <div className="grid grid-cols-2 gap-x-8">
                <div>
                  <input type="text" name="twitter" id="twitter" className="form-input w-full text-lg" placeholder="Twitter/X Profile" />
                </div>
                <div>
                  <input type="text" name="github" id="github" className="form-input w-full text-lg" placeholder="GitHub Profile" />
                </div>
              </div>
              <div>
                <input type="url" name="website" id="website" className="form-input w-full text-lg" placeholder="Website / Portfolio" />
              </div>
              <div>
                <textarea name="why-fair" id="why-fair" rows={4} className="form-input w-full text-lg" placeholder="Why do you want to join FAIR?" />
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
