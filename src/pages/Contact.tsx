import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const offices = [
  {
    city: 'New York',
    address: '640 Fifth Avenue, 12th Floor, New York, NY 10019',
    phone: '+1 (212) 555-0100',
    hours: '24/7',
  },
  {
    city: 'London',
    address: '1 Mayfair, Knightsbridge, London SW1X 7XL',
    phone: '+44 20 7946 0100',
    hours: '24/7',
  },
  {
    city: 'Dubai',
    address: 'DIFC, Gate Village 4, Dubai, UAE',
    phone: '+971 4 555 0100',
    hours: '24/7',
  },
  {
    city: 'Hong Kong',
    address: 'Two IFC, 8 Finance Street, Central, Hong Kong',
    phone: '+852 555 0100',
    hours: '24/7',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-8 py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Message Sent
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for reaching out. Our team will respond within 2 hours
            during business hours.
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
      <div className="bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-6">
            Let's talk
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our aviation experts are available around the clock. Reach out
            anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a message
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (Optional)
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
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="charter">Charter Question</option>
                    <option value="membership">Membership</option>
                    <option value="safety">Safety & Compliance</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-lg font-semibold mb-6">24/7 Hotline</h3>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-2xl font-semibold hover:text-gray-300 transition-colors mb-4"
              >
                <Phone className="w-6 h-6" />
                1-800-555-1234
              </a>
              <p className="text-gray-400 text-sm">
                Our aviation experts are standing by, day or night.
              </p>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {office.city}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone}`}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Mail className="w-8 h-8 text-gray-400 mx-auto mb-4" />
          <p className="text-sm text-gray-600">
            For urgent matters, email us at{' '}
            <a
              href="mailto:ops@skyelite.com"
              className="text-gray-900 font-medium hover:underline"
            >
              ops@skyelite.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
