'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/mission', label: 'Mission' },
  { href: '/shsat', label: 'The SHSAT' },

  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-navy-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-gold-500 tracking-tight group-hover:text-gold-400 transition-colors">
              Elite<span className="text-white">SHSAT</span>
            </span>
            <span className="hidden sm:block text-xs text-slate-400 font-medium border-l border-slate-600 pl-2 leading-tight">
              NYC Specialized<br />HS Prep
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-navy-700 text-gold-400'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/apply" className="ml-4 btn-primary text-sm py-2 px-5">
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700 px-4 py-3 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-navy-700 text-gold-400'
                  : 'text-slate-300 hover:text-white hover:bg-navy-800'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="block mt-3 btn-primary text-center text-sm py-2"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  )
}
