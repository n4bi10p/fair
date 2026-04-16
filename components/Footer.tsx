import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-fair-surface text-fair-text py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div className="font-black text-3xl tracking-tighter text-fair-text">FA\R</div>
            <p className="mt-4 max-w-md" style={{ lineHeight: 1.8 }}>
              Folks in AI and Research. A community driven by curiosity and the drive to build the future of intelligence.
            </p>
            <p className="mt-4 text-sm text-fair-text/70">Pune, India</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm uppercase font-bold tracking-wider">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#about" className="hover:text-fair-brand">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-fair-brand">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-fair-brand">
                  People
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-fair-brand">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-fair-brand">
                  Apply
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm uppercase font-bold tracking-wider">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="hover:text-fair-brand">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-fair-brand">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm uppercase font-bold tracking-wider">Social</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="hover:text-fair-brand">
                  Twitter/X
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-fair-brand">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-fair-brand">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 md:mt-20 pt-8 border-t border-fair-ghost/30 text-sm text-fair-text/70 flex flex-col gap-2 md:flex-row md:justify-between">
          <p>© 2025 FAIR Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
