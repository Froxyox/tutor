'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    category: 'About the SHSAT',
    items: [
      {
        q: 'Who is eligible to take the SHSAT?',
        a: 'Current 8th graders applying to 9th grade and current 9th graders applying to 10th grade at a NYC public, private, or parochial school are eligible. Students must be NYC residents.',
      },
      {
        q: 'When is the SHSAT offered?',
        a: 'The SHSAT is offered once per year, typically in October and November. Registration opens in September through your school\'s guidance counselor. There are no makeup tests.',
      },
      {
        q: 'Is there a penalty for wrong answers?',
        a: 'No! There is no penalty for wrong answers on the SHSAT. You should always guess — never leave a question blank.',
      },
      {
        q: 'What score do I need to get into Stuyvesant?',
        a: 'Stuyvesant\'s cutoff changes every year based on the applicant pool. In recent years it has typically fallen between 560 and 590. There are no guaranteed cutoff numbers, which is why we always aim for the highest possible score.',
      },
      {
        q: 'Can I appeal or re-test if I don\'t get the score I wanted?',
        a: 'Unfortunately, no. There is no appeal process and no re-test opportunity for the same school year. This is why solid preparation before test day is so important.',
      },
    ],
  },
  {
    category: 'About Our Tutoring',
    items: [
      {
        q: 'How long does tutoring typically last?',
        a: 'Most students work with us for 8–16 weeks before the exam. We recommend starting in July or August for an October test date to allow enough time for full coverage and multiple practice tests.',
      },
      {
        q: 'Are sessions in-person or online?',
        a: 'Both! We offer virtual sessions via Zoom and in-person sessions in the Bronx, Manhattan, and Queens. Preference and availability are discussed during your free consultation call.',
      },
      {
        q: 'How are sessions structured?',
        a: 'Each session is 60 or 90 minutes long. We typically spend the first 15–20 minutes reviewing the previous week\'s homework, then dive into new material, and close with targeted practice problems. Every student has a unique roadmap we follow.',
      },
      {
        q: 'What if my child misses a session?',
        a: 'Life happens. We ask for 24 hours notice for cancellations where possible. Missed sessions can typically be rescheduled within the same week at no extra cost.',
      },
      {
        q: 'Do you offer group sessions?',
        a: 'Yes — we run monthly group sessions (3–5 students) on specific topics at $25/student. These are great supplements to one-on-one sessions but don\'t replace them for personalized prep.',
      },
      {
        q: 'How quickly will I see improvement?',
        a: 'Most students see meaningful improvement (20–40 points) within the first 4–6 weeks. The biggest gains come from consistent practice, completing homework, and taking regular timed practice tests.',
      },
    ],
  },
  {
    category: 'Logistics',
    items: [
      {
        q: 'Is tutoring really free?',
        a: 'Yes, completely free. We started this program because we believe every student deserves quality SHSAT prep regardless of their family\'s financial situation. There are no fees, no hidden charges, ever.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'No contracts, ever. You can stop at any time. That said, we recommend at least 8 weeks of consistent sessions to see substantial score improvement.',
      },
      {
        q: 'What if I want to switch tutors (from Guanshen to Jonathan or vice versa)?',
        a: 'No problem at all. We work as a team and have full visibility into each student\'s progress. If you feel one of our styles is a better fit, just let us know.',
      },
      {
        q: 'Do you guarantee admission to a specialized high school?',
        a: 'We guarantee our full effort and commitment. We cannot guarantee admission — results depend on the student\'s work ethic, starting point, and how competitive that year\'s pool is. What we can promise is that we will give every student our best.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-navy-900 pr-4">{q}</span>
        <span className={`flex-shrink-0 text-gold-500 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-600 leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">Got Questions?</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg">
            Everything parents and students ask us before getting started.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-gold-400">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-slate-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions?</h2>
          <p className="text-slate-600 mb-6">
            Send us an email and we&apos;ll get back to you within 24 hours, guaranteed.
          </p>
          <a
            href="mailto:eliteshsatprep@gmail.com"
            className="btn-navy inline-block mr-4 mb-3"
          >
            Email Us
          </a>
          <Link href="/apply" className="btn-primary inline-block mb-3">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
