import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Mission | EliteSHSAT Prep',
  description: 'The mission and core values of EliteSHSAT Prep — making specialized high school accessible for every NYC student.',
}

const values = [
  {
    icon: '⚖️',
    title: 'Equity',
    desc: 'High-quality SHSAT sessions should not be gatekept by income. Our free sessions ensure talent is never held back by cost — because opportunity should be everywhere.',
  },
  {
    icon: '🔬',
    title: 'Excellence',
    desc: 'We hold our students and ourselves to a high standard. Every free session has a clear goal, every practice test gets analyzed, and every student leaves knowing exactly what to improve.',
  },
  {
    icon: '🤝',
    title: 'Authenticity',
    desc: 'We don\'t pretend to be something we\'re not. We\'re high schoolers who cracked the SHSAT — and that real, lived experience is exactly what makes our free sessions uniquely effective.',
  },
  {
    icon: '🌱',
    title: 'Growth Mindset',
    desc: 'We believe every student can improve. No student is "not a math person" or "bad at reading." With the right strategies and practice, scores go up — always.',
  },
  {
    icon: '🗽',
    title: 'Community',
    desc: 'We\'re New Yorkers offering free sessions to New Yorkers. We know the city, the schools, and the culture. Our students are our community — not just our clients.',
  },
  {
    icon: '📖',
    title: 'Transparency',
    desc: 'Parents get full visibility. Weekly progress updates, honest assessments, realistic score targets — no fluff, no false promises.',
  },
]

export default function Mission() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">What Drives Us</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">Our Mission</h1>
          <p className="text-slate-300 text-lg">
            We exist to close the opportunity gap in NYC test prep — one student at a time.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="text-gold-400 text-5xl mb-6">❝</div>
            <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed mb-6">
              Our mission is to give every motivated New York City student —
              regardless of income, borough, or background — access to the expert SHSAT preparation
              they need to compete for a spot in one of the city&apos;s nine specialized high schools.
            </blockquote>
            <p className="text-slate-300 text-base">
              We believe a great education shouldn&apos;t depend on how much your family can spend on test prep.
              By offering personalized, peer-led free sessions, we&apos;re leveling the playing field —
              one student at a time.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="font-bold text-gold-400">Guanshen Chen</div>
                <div className="text-xs text-slate-400">Co-Founder, Bronx Science &apos;28</div>
                <div className="text-xs text-slate-500">SHSAT: 650</div>
              </div>
              <div className="text-slate-600 text-xl">&amp;</div>
              <div className="text-center">
                <div className="font-bold text-gold-400">Jonathan Zhang</div>
                <div className="text-xs text-slate-400">Co-Founder, Bronx Science &apos;28</div>
                <div className="text-xs text-slate-500">SHSAT: 620</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Bring to the Table */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Bring to the Table</h2>
            <p className="section-subtitle">
              Here&apos;s exactly what sets our free sessions apart from anything else out there.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🆓',
                title: 'Always Free',
                desc: 'Zero cost, zero barriers. While other tutors charge $150–$300/hr, our sessions are completely free so every student gets a fair shot.',
                color: 'border-green-400 bg-green-50',
                textColor: 'text-green-700',
              },
              {
                icon: '🎯',
                title: 'We Just Took the Test',
                desc: 'We scored 650 and 620 on the real SHSAT — recently. We know exactly what\'s on it, how it\'s written, and what trips students up.',
                color: 'border-gold-500 bg-amber-50',
                textColor: 'text-amber-700',
              },
              {
                icon: '🏙️',
                title: 'Built for NYC Students',
                desc: 'We\'re Bronx kids teaching Bronx, Manhattan, and Queens students. We know the schools, the culture, and what it actually takes to get in.',
                color: 'border-navy-600 bg-blue-50',
                textColor: 'text-navy-800',
              },
            ].map((item) => (
              <div key={item.title} className={`border-2 rounded-2xl p-8 ${item.color}`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className={`text-lg font-black ${item.textColor} mb-3`}>{item.title}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-700 font-medium text-lg">
              Quality SHSAT prep, <span className="font-bold text-navy-900">completely free</span> —
              because every student deserves a real shot. <span className="text-gold-600 font-bold">That&apos;s the point.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">These are the principles that guide every free session we run.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card border-l-4 border-gold-500">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-4">Join the Mission</h2>
          <p className="text-navy-800 text-lg mb-8">
            Every student we help is one more kid who gets to walk through the doors of a school they dreamed about.
            Let&apos;s make that happen for yours.
          </p>
          <Link href="/apply" className="btn-navy">
            Apply for Free Sessions &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
