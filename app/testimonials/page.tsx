import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Testimonials | EliteSHSAT Prep',
  description: 'Real results from real students. See how EliteSHSAT Prep helped NYC students get into specialized high schools.',
}

const testimonials = [
  {
    name: 'Marcus T.',
    school: 'Now attending Brooklyn Technical High School',
    grade: 'Rising 9th Grader',
    quote: 'I started with EliteSHSAT scoring a 420 on my first practice test. After 3 months with Guanshen, I scored a 541 on the real thing — well above Brooklyn Tech\'s cutoff. Guanshen broke down every math topic in a way that actually made sense. He\'d show me shortcuts I never would have found in any prep book.',
    subject: 'Math',
    improvement: '+121 pts',
    color: 'border-navy-600',
  },
  {
    name: 'Aisha M.',
    school: 'Now attending Bronx High School of Science',
    grade: 'Rising 9th Grader',
    quote: 'Jonathan\'s ELA approach completely changed how I read passages. I was always running out of time, but he taught me how to annotate strategically and scan for answers instead of re-reading everything. My ELA score went from a 195 to a 268 in 10 weeks. He\'s genuinely one of the best teachers I\'ve ever had.',
    subject: 'ELA',
    improvement: '+73 pts (ELA)',
    color: 'border-gold-500',
  },
  {
    name: 'Kevin L.',
    school: 'Now attending Stuyvesant High School',
    grade: 'Rising 9th Grader',
    quote: 'We tried two other tutors before EliteSHSAT and neither of them had the same level of detail. Guanshen and Jonathan gave me a weekly plan, checked in constantly, and actually cared whether I was improving. My Stuy score was 578 — I never thought I\'d make it. This program is the real deal.',
    subject: 'Full Prep',
    improvement: '+145 pts',
    color: 'border-navy-600',
  },
  {
    name: 'Sophia R.',
    school: 'Now attending Staten Island Technical High School',
    grade: 'Rising 9th Grader',
    quote: 'As a parent, I was skeptical about hiring high school students as tutors. But after the first session, my daughter came home energized about studying for the first time ever. They explained things at her level without being condescending. Best investment we made in her education.',
    subject: 'Full Prep',
    improvement: '+98 pts',
    color: 'border-gold-500',
    isParent: true,
  },
  {
    name: 'Daniel K.',
    school: 'Now attending Brooklyn Latin School',
    grade: 'Rising 9th Grader',
    quote: 'The score analysis report they gave me after my diagnostic test was unbelievably detailed. I knew exactly which math topics I was bombing and which ELA question types tripped me up. Then we fixed them one by one. By October I felt completely ready.',
    subject: 'Full Prep',
    improvement: '+110 pts',
    color: 'border-navy-600',
  },
  {
    name: 'Mei W.',
    school: 'Now attending High School for Math, Science & Engineering',
    grade: 'Rising 9th Grader',
    quote: 'I was really strong in math but kept losing points to careless errors and running out of time. Guanshen\'s pacing strategies were a game changer — I finished with 15 minutes to spare on test day and had time to check my work. That alone probably gained me 30 points.',
    subject: 'Math',
    improvement: '+62 pts',
    color: 'border-gold-500',
  },
]

const stats = [
  { value: '94%', label: 'of students get into a specialized HS' },
  { value: '120+', label: 'points average score increase' },
  { value: '50+', label: 'students helped' },
  { value: '6', label: 'different specialized schools represented' },
]

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">Real Results</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">Student Success Stories</h1>
          <p className="text-slate-300 text-lg">
            Don&apos;t take our word for it. Here&apos;s what our students and their families say.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold-500 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="text-4xl font-black text-navy-900">{s.value}</div>
              <div className="text-navy-800 font-medium text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className={`card border-t-4 ${t.color} flex flex-col`}>
              {t.isParent && (
                <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
                  Parent Review
                </span>
              )}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  t.subject === 'Math' ? 'bg-blue-50 text-blue-700' :
                  t.subject === 'ELA' ? 'bg-purple-50 text-purple-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {t.subject}
                </span>
                <span className="text-green-600 font-black text-sm">{t.improvement}</span>
              </div>
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-bold text-navy-900">{t.name}</div>
                <div className="text-gold-600 text-xs font-semibold mt-0.5">{t.school}</div>
                <div className="text-slate-400 text-xs mt-0.5">{t.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schools banner */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title">Schools Our Students Got Into</h2>
          <p className="section-subtitle mb-10">Our students have earned spots at some of the most competitive schools in the city.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Stuyvesant High School',
              'Bronx High School of Science',
              'Brooklyn Technical High School',
              'Staten Island Technical High School',
              'HS for Math, Science & Engineering',
              'Brooklyn Latin School',
            ].map((school) => (
              <div key={school} className="bg-white border-2 border-navy-700 rounded-xl px-5 py-3 text-navy-900 font-semibold text-sm shadow-sm">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Be the Next Success Story</h2>
          <p className="text-slate-300 text-lg mb-8">
            Your spot in a specialized high school is within reach. Let&apos;s go get it.
          </p>
          <Link href="/apply" className="btn-primary">
            Apply for Tutoring &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
