import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services & Pricing | EliteSHSAT Prep',
  description: 'Our SHSAT tutoring programs — one-on-one, group sessions, mock tests, and more.',
}

const plans = [
  {
    name: 'ELA Boost',
    price: '$45',
    per: '/hr',
    tag: null,
    desc: 'Focused solely on the ELA section. Perfect for students strong in math who need to close the reading gap.',
    features: [
      'Revising & Editing drills',
      'Reading comprehension strategies',
      'Passage annotation techniques',
      'Custom ELA workbook (Priya\'s)',
      'Weekly ELA practice sets',
    ],
    cta: 'Apply for ELA Boost',
    highlight: false,
  },
  {
    name: 'Full SHSAT Prep',
    price: '$60',
    per: '/hr',
    tag: 'Most Popular',
    desc: 'Our flagship program. Comprehensive preparation across both ELA and Math — the most direct path to your target school.',
    features: [
      'Both ELA and Math sections',
      'Personalized study roadmap',
      'Bi-weekly full practice tests',
      'Score tracking & analysis',
      'Custom strategy for your target school',
      'Parent progress reports (monthly)',
      'WhatsApp access for quick questions',
    ],
    cta: 'Apply for Full Prep',
    highlight: true,
  },
  {
    name: 'Math Intensive',
    price: '$45',
    per: '/hr',
    tag: null,
    desc: 'Deep dive into SHSAT math. Ideal for students who need to level up their algebra, geometry, or number theory.',
    features: [
      'All SHSAT math topic areas',
      'Shortcut and pattern recognition',
      'Grid-in question strategies',
      'Timed drills and problem sets',
      'Weekly math practice tests',
    ],
    cta: 'Apply for Math Intensive',
    highlight: false,
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">Services & Pricing</h1>
          <p className="text-slate-300 text-lg">
            Honest pricing. No hidden fees. No long-term contracts. Just results.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col ${
                  plan.highlight
                    ? 'bg-navy-900 text-white shadow-2xl ring-4 ring-gold-500 scale-105'
                    : 'bg-white shadow-md'
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow">
                      {plan.tag}
                    </span>
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-gold-400' : 'text-navy-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mt-2 mb-4">
                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.per}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="text-gold-500 font-bold mt-0.5">✓</span>
                        <span className={`text-sm ${plan.highlight ? 'text-slate-200' : 'text-slate-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/apply"
                    className={`mt-8 block text-center font-bold py-3 px-6 rounded-lg transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                        : 'bg-navy-800 text-white hover:bg-navy-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Need-based discounts available. Reach out at{' '}
            <a href="mailto:eliteshsatprep@gmail.com" className="text-navy-800 font-semibold underline">
              eliteshsatprep@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Add-Ons & Extras</h2>
            <p className="section-subtitle">Optional extras to supercharge your prep.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📝',
                name: 'Full Mock Test',
                price: '$25',
                desc: 'A timed, full-length SHSAT simulation with detailed score report and section breakdown.',
              },
              {
                icon: '📚',
                name: 'ELA Workbook',
                price: '$15',
                desc: 'Priya\'s hand-crafted ELA workbook with 200+ practice questions and answer explanations.',
              },
              {
                icon: '🔢',
                name: 'Math Problem Sets',
                price: '$15',
                desc: 'Jordan\'s curated topic-specific math drills sorted by difficulty. Great for solo practice.',
              },
              {
                icon: '📞',
                name: 'Strategy Call (1hr)',
                price: '$40',
                desc: 'Not ready to commit? Book a one-hour call to review your practice test and build a prep plan.',
              },
              {
                icon: '📊',
                name: 'Score Analysis Report',
                price: 'Free',
                desc: 'Share any official practice test result and we\'ll write up a full analysis with a recommended focus plan.',
              },
              {
                icon: '👥',
                name: 'Group Session (3–5 students)',
                price: '$25/student',
                desc: 'Monthly group prep sessions covering high-yield topics. Great for supplementing solo sessions.',
              },
            ].map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-bold text-navy-900 mt-2">{item.name}</h3>
                  </div>
                  <span className="text-gold-600 font-black text-lg">{item.price}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple, four-step process from application to first session.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply', desc: 'Fill out our quick application. Takes 5 minutes.' },
              { step: '02', title: 'Consult', desc: 'We schedule a free 30-minute call to understand your goals.' },
              { step: '03', title: 'Assess', desc: 'Your student takes a diagnostic test so we can build a tailored plan.' },
              { step: '04', title: 'Prep', desc: 'Sessions begin. We track progress and adjust weekly.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-4">Let&apos;s Get Started</h2>
          <p className="text-navy-800 text-lg mb-8">
            Spots are limited to ensure quality. Apply now to secure your slot.
          </p>
          <Link href="/apply" className="btn-navy">
            Apply for Tutoring &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
