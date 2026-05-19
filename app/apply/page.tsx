'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const SPECIALIZED_SCHOOLS = [
  'Stuyvesant High School',
  'Bronx High School of Science',
  'Brooklyn Technical High School',
  'Staten Island Technical High School',
  'HS for Math, Science & Engineering at CCNY',
  'High School for Dual Language & Asian Studies',
  'Brooklyn Latin School',
  'HS of American Studies at Lehman College',
  'Queens HS for the Sciences at York College',
]

const AVAILABILITY = [
  'Weekday mornings (before 3pm)',
  'Weekday afternoons (3pm – 6pm)',
  'Weekday evenings (6pm – 9pm)',
  'Saturday mornings',
  'Saturday afternoons',
  'Sunday mornings',
  'Sunday afternoons',
]

type FormState = {
  studentFirstName: string
  studentLastName: string
  parentName: string
  email: string
  phone: string
  grade: string
  currentSchool: string
  targetSchools: string[]
  helpNeeded: string[]
  previousExperience: string
  practiceScore: string
  availability: string[]
  hearAboutUs: string
  goals: string
}

const initialState: FormState = {
  studentFirstName: '',
  studentLastName: '',
  parentName: '',
  email: '',
  phone: '',
  grade: '',
  currentSchool: '',
  targetSchools: [],
  helpNeeded: [],
  previousExperience: 'no',
  practiceScore: '',
  availability: [],
  hearAboutUs: '',
  goals: '',
}

function toggle(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
}

export default function Apply() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleCheckbox(field: 'targetSchools' | 'helpNeeded' | 'availability', value: string) {
    setForm((prev) => ({ ...prev, [field]: toggle(prev[field], value) }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm(initialState)
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-slate-50">
        <div className="max-w-lg w-full text-center">
          <div className="card">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-black text-navy-900 mb-4">Application Received!</h1>
            <p className="text-slate-600 leading-relaxed mb-6">
              Thank you for applying to EliteSHSAT Prep. We&apos;ll review your application and reach out within{' '}
              <strong>48 hours</strong> to schedule your free consultation call.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              In the meantime, check out our{' '}
              <Link href="/shsat" className="text-navy-800 font-semibold underline">SHSAT guide</Link>{' '}
              or{' '}
              <Link href="/faq" className="text-navy-800 font-semibold underline">FAQ page</Link>.
            </p>
            <Link href="/" className="btn-navy inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold-400 font-bold text-sm uppercase tracking-widest">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Apply for Tutoring</h1>
          <p className="text-slate-300">
            Fill out the form below — it takes about 5 minutes. We&apos;ll reach out within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {status === 'error' && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Info */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-6 pb-3 border-b border-slate-100">
                Student Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="label" htmlFor="studentFirstName">First Name *</label>
                  <input
                    id="studentFirstName"
                    name="studentFirstName"
                    type="text"
                    required
                    value={form.studentFirstName}
                    onChange={handleChange}
                    placeholder="e.g. Alex"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="studentLastName">Last Name *</label>
                  <input
                    id="studentLastName"
                    name="studentLastName"
                    type="text"
                    required
                    value={form.studentLastName}
                    onChange={handleChange}
                    placeholder="e.g. Johnson"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="grade">Current Grade *</label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select grade</option>
                    <option value="7th">7th Grade (applying for 9th grade next year)</option>
                    <option value="8th">8th Grade (applying for 9th grade)</option>
                    <option value="9th">9th Grade (applying for 10th grade)</option>
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="currentSchool">Current School *</label>
                  <input
                    id="currentSchool"
                    name="currentSchool"
                    type="text"
                    required
                    value={form.currentSchool}
                    onChange={handleChange}
                    placeholder="e.g. PS 158 Balt Elementary"
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            {/* Parent / Guardian Info */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-6 pb-3 border-b border-slate-100">
                Parent / Guardian Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="parentName">Parent / Guardian Full Name *</label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    required
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Maria Johnson"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label" htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(212) 555-0100"
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            {/* Target Schools */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-2 pb-3 border-b border-slate-100">
                Target School(s)
              </h2>
              <p className="text-slate-500 text-sm mb-5">Select all schools your student is interested in.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPECIALIZED_SCHOOLS.map((school) => (
                  <label key={school} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.targetSchools.includes(school)}
                      onChange={() => handleCheckbox('targetSchools', school)}
                      className="mt-0.5 w-4 h-4 accent-navy-800 cursor-pointer flex-shrink-0"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-navy-900 transition-colors">{school}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Prep Details */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-6 pb-3 border-b border-slate-100">
                Prep Details
              </h2>

              <div className="mb-5">
                <label className="label">Which section(s) do you need help with? *</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['ELA', 'Math', 'Both (Full Prep)'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.helpNeeded.includes(opt)}
                        onChange={() => handleCheckbox('helpNeeded', opt)}
                        className="w-4 h-4 accent-navy-800 cursor-pointer"
                      />
                      <span className="text-sm font-medium text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="label" htmlFor="previousExperience">Any previous SHSAT prep experience?</label>
                <select
                  id="previousExperience"
                  name="previousExperience"
                  value={form.previousExperience}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="no">No — this is our first time</option>
                  <option value="self">Yes — self-study only (books, YouTube, etc.)</option>
                  <option value="prep-program">Yes — attended a prep program or class</option>
                  <option value="private-tutor">Yes — had a private tutor before</option>
                </select>
              </div>

              <div>
                <label className="label" htmlFor="practiceScore">Most recent practice test score (if any)</label>
                <input
                  id="practiceScore"
                  name="practiceScore"
                  type="text"
                  value={form.practiceScore}
                  onChange={handleChange}
                  placeholder="e.g. 460, or 'ELA 210 / Math 250', or N/A"
                  className="input-field"
                />
                <p className="text-xs text-slate-400 mt-1">Leave blank if no practice test taken yet.</p>
              </div>
            </div>

            {/* Availability */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-2 pb-3 border-b border-slate-100">
                Availability
              </h2>
              <p className="text-slate-500 text-sm mb-5">Select all times that generally work for your family.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AVAILABILITY.map((slot) => (
                  <label key={slot} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.availability.includes(slot)}
                      onChange={() => handleCheckbox('availability', slot)}
                      className="w-4 h-4 accent-navy-800 cursor-pointer"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-navy-900 transition-colors">{slot}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Final questions */}
            <div className="card">
              <h2 className="text-xl font-bold text-navy-900 mb-6 pb-3 border-b border-slate-100">
                A Little More
              </h2>

              <div className="mb-5">
                <label className="label" htmlFor="hearAboutUs">How did you hear about us?</label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={form.hearAboutUs}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select one</option>
                  <option value="word-of-mouth">Word of mouth (friend / family)</option>
                  <option value="school">Through school / counselor</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google / web search</option>
                  <option value="flyer">Flyer in neighborhood</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="label" htmlFor="goals">
                  What are your student&apos;s goals for this program? Any other info we should know?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us anything that would help us understand your student — strengths, challenges, concerns, what motivates them, etc."
                  className="input-field resize-none"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-100 rounded-xl px-5 py-4 text-xs text-slate-500 leading-relaxed">
              By submitting this form, you agree to be contacted by EliteSHSAT Prep via the email and phone number provided above.
              Your information is kept strictly private and will never be shared with third parties.
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn-navy py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
