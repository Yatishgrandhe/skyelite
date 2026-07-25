import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Calendar, Users, ChevronRight, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Step = 1 | 2 | 3 | 4

const steps = [
  { num: 1, label: 'Trip Details' },
  { num: 2, label: 'Preferences' },
  { num: 3, label: 'Contact Info' },
  { num: 4, label: 'Review' },
]

export default function Book() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    tripType: 'one-way',
    from: '',
    to: '',
    date: '',
    returnDate: '',
    passengers: '2',
    aircraft: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  })

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const next = () => {
    if (step < 4) setStep((step + 1) as Step)
  }
  const prev = () => {
    if (step > 1) setStep((step - 1) as Step)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-8 py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Request Submitted
          </h1>
          <p className="text-gray-600 mb-8">
            Our aviation team will review your request and contact you within 2
            hours with a detailed proposal.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            Charter
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-gray-900 tracking-tight mb-6">
            Book Your Flight
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tell us about your trip and we'll craft the perfect itinerary.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    step >= s.num
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > s.num ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    s.num
                  )}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${
                    step >= s.num ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 sm:w-20 h-px mx-2 ${
                    step > s.num ? 'bg-gray-900' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Trip Details
              </h2>

              <div className="flex gap-4">
                {['one-way', 'round-trip'].map((type) => (
                  <button
                    key={type}
                    onClick={() => update('tripType', type)}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-medium transition-colors ${
                      form.tripType === type
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {type === 'one-way' ? 'One Way' : 'Round Trip'}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    From
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Departure city or airport"
                      value={form.from}
                      onChange={(e) => update('from', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-45" />
                    <input
                      type="text"
                      placeholder="Arrival city or airport"
                      value={form.to}
                      onChange={(e) => update('to', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Departure Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                {form.tripType === 'round-trip' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Return Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        value={form.returnDate}
                        onChange={(e) => update('returnDate', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={form.passengers}
                    onChange={(e) => update('passengers', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18].map(
                      (n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'passenger' : 'passengers'}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Preferences
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Aircraft Category (Optional)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Light Jet',
                    'Midsize',
                    'Super Midsize',
                    'Heavy',
                    'Ultra Long Range',
                    'Any',
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => update('aircraft', cat)}
                      className={`py-3 rounded-xl border-2 text-sm font-medium transition-colors ${
                        form.aircraft === cat
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Catering preferences, ground transportation, pet travel, etc."
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Review Your Request
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Trip Type</span>
                  <span className="text-sm font-medium text-gray-900 capitalize">
                    {form.tripType.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Route</span>
                  <span className="text-sm font-medium text-gray-900">
                    {form.from || '—'} → {form.to || '—'}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Date</span>
                  <span className="text-sm font-medium text-gray-900">
                    {form.date || '—'}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Passengers</span>
                  <span className="text-sm font-medium text-gray-900">
                    {form.passengers}
                  </span>
                </div>
                {form.aircraft && (
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Aircraft</span>
                    <span className="text-sm font-medium text-gray-900">
                      {form.aircraft}
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Contact</span>
                  <span className="text-sm font-medium text-gray-900">
                    {form.firstName} {form.lastName}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-gray-600">Email</span>
                  <span className="text-sm font-medium text-gray-900">
                    {form.email || '—'}
                  </span>
                </div>
              </div>

              {form.notes && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    Special Requests
                  </p>
                  <p className="text-sm text-gray-700">{form.notes}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button
                onClick={prev}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                onClick={next}
                className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="px-6 py-2 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                Submit Request
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Prefer to speak with someone?{' '}
            <a
              href="tel:+18005551234"
              className="text-gray-900 font-medium hover:underline"
            >
              Call 1-800-555-1234
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
