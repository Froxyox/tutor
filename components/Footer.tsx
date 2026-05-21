import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-black text-gold-500">
              Elite<span className="text-white">SHSAT</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed max-w-sm">
              Personalized SHSAT tutoring by current specialized high school students who know exactly what it takes to get in.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="mailto:eliteshsatprep@gmail.com" className="text-gold-500 hover:text-gold-400 text-sm font-medium transition-colors">
                eliteshsatprep@gmail.com
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/mission', 'Our Mission'],
                ['/shsat', 'The SHSAT'],

                ['/faq', 'FAQ'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Get Started</h4>
            <p className="text-sm mb-4">
              Ready to start your journey to a specialized high school? We&apos;d love to help.
            </p>
            <Link href="/apply" className="btn-primary text-sm py-2 px-5 inline-block">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} EliteSHSAT Prep. All rights reserved.</p>
          <p className="text-slate-500">Run by NYC specialized high school students &mdash; for future ones.</p>
        </div>
      </div>
    </footer>
  )
}
