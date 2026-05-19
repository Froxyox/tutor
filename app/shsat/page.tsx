import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The SHSAT | EliteSHSAT Prep',
  description: 'Everything you need to know about the SHSAT — structure, scoring, specialized high schools, and why it matters.',
}

const schools = [
  { name: 'Stuyvesant High School', borough: 'Manhattan', known: 'Most competitive; STEM + humanities excellence' },
  { name: 'Bronx High School of Science', borough: 'Bronx', known: 'Seven Nobel laureates among alumni' },
  { name: 'Brooklyn Technical High School', borough: 'Brooklyn', known: 'Largest of the specialized schools' },
  { name: 'Staten Island Technical High School', borough: 'Staten Island', known: 'Strong STEM and AP programs' },
  { name: 'HS for Math, Science & Engineering at CCNY', borough: 'Manhattan', known: 'Located on a college campus' },
  { name: 'High School for Dual Language & Asian Studies', borough: 'Manhattan', known: 'Bilingual and cultural focus' },
  { name: 'Brooklyn Latin School', borough: 'Brooklyn', known: 'Classical liberal arts education' },
  { name: 'HS of American Studies at Lehman College', borough: 'Bronx', known: 'History, law, government focus' },
  { name: 'Queens HS for the Sciences at York College', borough: 'Queens', known: 'Science-focused; college campus' },
]

const timeline = [
  { when: 'Sept–Oct', what: 'SHSAT registration opens (8th & 9th graders)' },
  { when: 'Late Oct', what: 'Admit tickets distributed through schools' },
  { when: 'Oct–Nov', what: 'Official SHSAT test dates' },
  { when: 'March', what: 'Results released (online and by mail)' },
  { when: 'April', what: 'Specialized HS offer letters sent out' },
  { when: 'May', what: 'Acceptance deadline for enrolled students' },
]

export default function Shsat() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">Know the Test</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">The SHSAT Explained</h1>
          <p className="text-slate-300 text-lg">
            The Specialized High Schools Admissions Test is the single most important exam for NYC 8th and 9th graders.
            Here&apos;s everything you need to know.
          </p>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">What Is the SHSAT?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The <strong>Specialized High Schools Admissions Test (SHSAT)</strong> is a standardized exam
                administered by the NYC Department of Education. It is the sole criterion used to determine admissions
                to eight of New York City&apos;s nine specialized high schools.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Eligible students are current 8th graders (applying for 9th grade) and current 9th graders
                (applying for 10th grade). The test is offered once per year in October or November.
              </p>
              <p className="text-slate-600 leading-relaxed">
                There is no essay, interview, teacher recommendation, or portfolio involved.
                Your score is everything — which is both the pressure and the opportunity.
                With the right prep, any motivated student can compete.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Questions', value: '114' },
                { label: 'Time Allowed', value: '3 hrs' },
                { label: 'ELA Questions', value: '57' },
                { label: 'Math Questions', value: '57' },
                { label: 'Max Score', value: '800' },
                { label: 'Offered Once', value: 'Per Year' },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <div className="text-3xl font-black text-navy-800">{item.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test Structure */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Test Structure</h2>
            <p className="section-subtitle">The SHSAT is split into two sections — ELA and Math — each with 57 questions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ELA */}
            <div className="card border-t-4 border-navy-800">
              <h3 className="text-xl font-bold text-navy-900 mb-5 flex items-center gap-2">
                <span className="text-2xl">📖</span> ELA Section
              </h3>
              <ul className="space-y-3">
                {[
                  { topic: 'Revising / Editing', desc: 'Grammar, sentence structure, paragraph flow' },
                  { topic: 'Reading Comprehension', desc: '6 passages (literary and informational)' },
                  { topic: 'Evidence-Based Questions', desc: 'Supporting answers with textual evidence' },
                  { topic: 'Logical Reasoning', desc: 'Inference and argument analysis' },
                ].map((item) => (
                  <li key={item.topic} className="flex gap-3">
                    <span className="text-gold-500 font-bold mt-0.5">→</span>
                    <div>
                      <div className="font-semibold text-slate-800">{item.topic}</div>
                      <div className="text-slate-500 text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Math */}
            <div className="card border-t-4 border-gold-500">
              <h3 className="text-xl font-bold text-navy-900 mb-5 flex items-center gap-2">
                <span className="text-2xl">🔢</span> Math Section
              </h3>
              <ul className="space-y-3">
                {[
                  { topic: 'Arithmetic & Number Theory', desc: 'Primes, factors, percentages, ratios' },
                  { topic: 'Algebra', desc: 'Equations, inequalities, word problems' },
                  { topic: 'Geometry', desc: 'Area, perimeter, angles, coordinate geometry' },
                  { topic: 'Data & Probability', desc: 'Charts, statistics, probability' },
                  { topic: 'Grid-In Problems', desc: '5 questions where you fill in the answer' },
                ].map((item) => (
                  <li key={item.topic} className="flex gap-3">
                    <span className="text-gold-500 font-bold mt-0.5">→</span>
                    <div>
                      <div className="font-semibold text-slate-800">{item.topic}</div>
                      <div className="text-slate-500 text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scoring note */}
          <div className="mt-8 bg-navy-800 text-white rounded-2xl p-6">
            <h4 className="font-bold text-gold-400 mb-2">How Scoring Works</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              There is <strong className="text-white">no penalty for wrong answers</strong>, so always guess if you don&apos;t know.
              Raw scores are converted to a scaled score (200–800). Each school has an unofficial &quot;cutoff score&quot; —
              the lowest score that received an offer last year. These cutoffs change each year based on how many students apply
              and their scores. Stuyvesant&apos;s cutoff typically falls around <strong className="text-white">560–580</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Why the SHSAT Matters</h2>
            <p className="section-subtitle">
              Getting into a specialized high school is more than a high school decision — it changes your life trajectory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'College Admissions Edge', desc: 'Specialized HS graduates consistently gain admission to Ivy League and top-20 universities at rates far above average.' },
              { icon: '🔬', title: 'World-Class Resources', desc: 'Labs, research programs, AP coursework, and partnerships with NYC universities you won\'t find anywhere else.' },
              { icon: '🤝', title: 'Alumni Networks', desc: 'Stuy, Bronx Science, and Brooklyn Tech alumni are among the most connected in medicine, law, tech, and finance.' },
              { icon: '💡', title: 'Academic Environment', desc: 'Classmates who push you. Teachers who challenge you. A culture where being smart and curious is celebrated.' },
              { icon: '🌍', title: 'Diversity of Ideas', desc: 'Students from every borough, background, and culture — creating one of the most stimulating environments in the country.' },
              { icon: '📈', title: 'Career Outcomes', desc: 'Graduates include 14 Nobel Prize winners, founders of major companies, and leaders across every field imaginable.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 9 Specialized High Schools</h2>
            <p className="text-slate-300">One test gets you access to all nine. Here&apos;s what each is known for.</p>
          </div>
          <div className="space-y-4">
            {schools.map((school) => (
              <div key={school.name} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-navy-800 rounded-xl px-6 py-4 border border-navy-700">
                <div className="flex-1">
                  <div className="font-bold text-white">{school.name}</div>
                  <div className="text-gold-400 text-xs font-semibold mt-0.5">{school.borough}</div>
                </div>
                <div className="text-slate-400 text-sm sm:text-right">{school.known}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">SHSAT Timeline</h2>
            <p className="section-subtitle">Know the key dates so you never miss a deadline.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold-300" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-xs text-center flex-shrink-0 z-10 shadow-md">
                    {item.when}
                  </div>
                  <div className="card flex-1 py-4 px-5">
                    <p className="text-slate-700 font-medium">{item.what}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gold-500 to-gold-400 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-4">Ready to Conquer the SHSAT?</h2>
          <p className="text-navy-800 text-lg mb-8">
            Start prepping with tutors who aced it. Apply today — spots fill up fast.
          </p>
          <Link href="/apply" className="btn-navy">
            Apply for Tutoring &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
