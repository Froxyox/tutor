import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | EliteSHSAT Prep',
  description: 'Meet Jordan Lee and Priya Sharma — the two NYC specialized high school students behind EliteSHSAT Prep.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-5">Meet the Founders</h1>
          <p className="text-slate-300 text-lg">
            Two NYC high schoolers. Two specialized schools. One shared mission: make top-tier SHSAT prep accessible to every student.
          </p>
        </div>
      </section>

      {/* Jordan */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0 text-center">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-8xl shadow-xl mx-auto mb-4">
                👨‍🎓
              </div>
              <div className="inline-block bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Co-Founder
              </div>
            </div>
            {/* Bio */}
            <div className="flex-1">
              <h2 className="text-3xl font-black text-navy-900 mb-1">Guanshen Chen</h2>
              <p className="text-gold-600 font-semibold">Sophomore · Bronx High School of Science &apos;28</p>
              <p className="text-slate-500 text-sm font-medium mb-5">SHSAT Score: 650</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Guanshen grew up in the Bronx and always had a natural love for numbers. When he started prepping for the SHSAT,
                he threw himself into the math section — building his own problem sets, finding patterns in how questions were
                written, and developing shortcut strategies that cut solving time in half.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                When he earned his spot at Bronx Science, he realized those strategies were too valuable to keep to himself.
                He co-founded EliteSHSAT to give every motivated student access to the same techniques — without the
                $200/hour price tag.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Bronx Science, Guanshen is on the Math Team and participates in Science Olympiad.
                Outside of school he enjoys basketball and competitive programming.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Math Expert', 'Science Olympiad', 'Math Team', 'Competitive Programmer'].map((tag) => (
                  <span key={tag} className="bg-navy-100 text-navy-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-slate-100 h-px max-w-5xl mx-auto" />

      {/* Priya */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Avatar */}
            <div className="flex-shrink-0 text-center">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-8xl shadow-xl mx-auto mb-4">
                👨‍🎓
              </div>
              <div className="inline-block bg-navy-800 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Co-Founder
              </div>
            </div>
            {/* Bio */}
            <div className="flex-1">
              <h2 className="text-3xl font-black text-navy-900 mb-1">Jonathan Zhang</h2>
              <p className="text-gold-600 font-semibold">Sophomore · Bronx High School of Science &apos;28</p>
              <p className="text-slate-500 text-sm font-medium mb-5">SHSAT Score: 620</p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jonathan grew up reading everything he could get his hands on. When he started prepping for the SHSAT,
                he quickly noticed that most students underestimated the ELA section — and that the right reading strategies
                could unlock massive score gains that other prep programs completely ignored.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                He built his own ELA workbook from scratch — covering revising &amp; editing, passage annotation, and logical
                reasoning — and saw his own ELA score jump dramatically in the final weeks before the test.
                That workbook is now a core part of every EliteSHSAT student&apos;s prep.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Bronx Science, Jonathan writes for the school newspaper and is a member of the Debate Club.
                Outside school he enjoys chess and creative writing.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ELA Expert', 'Debate Club', 'School Newspaper', 'Chess Player'].map((tag) => (
                  <span key={tag} className="bg-gold-100 text-gold-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why we started this */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We Started EliteSHSAT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {[
              {
                num: '01',
                title: 'The Price Gap',
                desc: 'The best SHSAT tutors in NYC charge $150–$300/hour. Most families can\'t afford that. We charge a fraction of that — without cutting corners.',
              },
              {
                num: '02',
                title: 'The Relevance Gap',
                desc: 'Adult tutors haven\'t taken the SHSAT in years. The test changes. We just took it. We know what\'s on it right now.',
              },
              {
                num: '03',
                title: 'The Comfort Gap',
                desc: 'Kids talk to us like peers. That means they actually ask questions instead of pretending they understand something they don\'t.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-navy-800 rounded-2xl p-6 border border-navy-700">
                <div className="text-gold-500 font-black text-3xl mb-3">{item.num}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/apply" className="btn-primary">
            Work With Us
          </Link>
        </div>
      </section>

    </>
  )
}
