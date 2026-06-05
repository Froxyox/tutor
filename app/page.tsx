'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

function TeaserPhoto({ src, gradient }: { src: string; gradient: string }) {
  const [err, setErr] = useState(false)
  return err ? (
    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl shadow-lg mb-3`}>
      👨‍🎓
    </div>
  ) : (
    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg mb-3">
      <Image src={src} alt="founder" width={128} height={128} className="w-full h-full object-cover" onError={() => setErr(true)} />
    </div>
  )
}


const schools = [
  'Stuyvesant High School',
  'Bronx High School of Science',
  'Brooklyn Technical High School',
  'Staten Island Technical High School',
  'Specialized H.S. of Mathematics, Science and Engineering',
  'High School for Dual Language and Asian Studies',
  'Brooklyn Latin School',
  'High School of American Studies at Lehman College',
  'Queens H.S. for the Sciences at York College',
]

const whyUs = [
  {
    icon: '🎓',
    title: 'We Aced It Ourselves',
    desc: 'Our tutors attend Bronx High School of Science — we went through the exact same process and know every trick on the test.',
  },
  {
    icon: '🎯',
    title: 'Personalized Plans',
    desc: 'No one-size-fits-all. We build a custom study roadmap around your child\'s strengths, weaknesses, and target school.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Progress',
    desc: 'Weekly practice tests tracked over time. You\'ll always know exactly where your student stands and what to focus on.',
  },
  {
    icon: '💬',
    title: 'Relatable Tutors',
    desc: 'High schoolers teaching middle schoolers — students open up to us in ways they don\'t with adult instructors.',
  },
  {
    icon: '💰',
    title: 'Completely Free',
    desc: 'We believe cost should never be a barrier. Our sessions are 100% free — no fees, no hidden charges, ever.',
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    desc: 'Evenings, weekends, or school breaks — we work around your family\'s schedule, not the other way around.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            NYC Specialized High School Prep
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Your Path to a{' '}
            <span className="text-gold-400">Specialized High School</span>{' '}
            Starts Here
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Free SHSAT sessions from students who&apos;ve been in your shoes.
            We&apos;re two Bronx Science sophomores who aced the SHSAT, and we&apos;re here to help you do the same.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary text-base">
              Apply for Free Sessions
            </Link>
            <Link href="/shsat" className="btn-secondary text-base">
              Learn About the SHSAT
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Why EliteSHSAT?</h2>
            <p className="section-subtitle">
              We&apos;re not a big test-prep company. We&apos;re two high schoolers who got in — and we&apos;re here to show you how.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="card">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{w.title}</h3>
                <p className="text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools we prep for */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All 9 NYC Specialized High Schools
            </h2>
            <p className="text-slate-300 text-lg">
              One test. Nine incredible schools. We prep you for all of them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schools.map((school) => (
              <div
                key={school}
                className="flex items-center gap-3 bg-navy-800 rounded-xl px-4 py-3 border border-navy-700"
              >
                <span className="text-gold-400 font-bold text-lg">✓</span>
                <span className="text-sm font-medium text-slate-200">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the founders teaser */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">Meet the Founders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-5">
              From Test-Takers to Tutors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Guanshen Chen and Jonathan Zhang (both Bronx Science &apos;28) started EliteSHSAT because they
              remembered exactly how stressful the SHSAT felt — and how much they wished they&apos;d had someone in their
              corner who truly understood it.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Now they&apos;re paying it forward, one student at a time.
            </p>
            <Link href="/about" className="btn-navy inline-block">
              Our Full Story
            </Link>
          </div>
          <div className="flex gap-6 flex-shrink-0">
            <div className="text-center">
              <TeaserPhoto src="/images/guanshen.jpg" gradient="from-navy-700 to-navy-900" />
              <div className="font-bold text-navy-900">Guanshen Chen</div>
              <div className="text-xs text-slate-500 font-medium">Bronx Science &apos;28</div>
            </div>
            <div className="text-center">
              <TeaserPhoto src="/images/jonathan.jpg" gradient="from-gold-500 to-gold-600" />
              <div className="font-bold text-navy-900">Jonathan Zhang</div>
              <div className="text-xs text-slate-500 font-medium">Bronx Science &apos;28</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold-500 to-gold-400 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
            Ready to Start Prepping?
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Spots are limited. Apply today and we&apos;ll reach out within 48 hours to schedule your free consultation call.
          </p>
          <Link href="/apply" className="btn-navy text-lg">
            Apply for Free Sessions &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
