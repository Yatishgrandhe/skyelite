import { Link } from 'react-router-dom'
import { MapPin, Plane, Users, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const stats = [
  { icon: Plane, value: '15,000+', label: 'Flights Completed' },
  { icon: MapPin, value: '5,000+', label: 'Airports Worldwide' },
  { icon: Users, value: '2,500+', label: 'Satisfied Clients' },
  { icon: Clock, value: '12', label: 'Years of Excellence' },
]

const leadership = [
  {
    name: 'Alexander Cross',
    title: 'Founder & CEO',
    bio: 'Former Gulfstream test pilot with 20,000+ flight hours. Founded SkyElite with a vision to redefine private aviation.',
  },
  {
    name: 'Victoria Sterling',
    title: 'Chief Operating Officer',
    bio: '20 years in aviation operations. Previously VP at NetJets overseeing fleet management across 400+ aircraft.',
  },
  {
    name: 'David Chen',
    title: 'VP of Safety',
    bio: 'Former FAA safety inspector. Led our team to achieve ARGUS Platinum and Wyvern Wingman certifications.',
  },
  {
    name: 'Sofia Rodriguez',
    title: 'Head of Client Experience',
    bio: 'Luxury hospitality veteran from Aman Resorts. Ensures every SkyElite flight exceeds expectations.',
  },
]

const offices = [
  { city: 'New York', address: '640 Fifth Avenue, 12th Floor' },
  { city: 'London', address: '1 Mayfair, Knightsbridge' },
  { city: 'Dubai', address: 'DIFC, Gate Village 4' },
  { city: 'Hong Kong', address: 'Two IFC, 8 Finance Street' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-6">
            Redefining private aviation
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Founded by pilots, built for discerning travelers. SkyElite combines
            safety, luxury, and accessibility in every flight.
          </p>
        </div>
      </div>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-gray-600" />
                </div>
                <p className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight mb-6">
                Born from a passion for flight
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In 2014, Alexander Cross saw a gap in private aviation. Charter
                  services were inconsistent, safety standards varied, and the
                  experience rarely matched the premium price tag.
                </p>
                <p>
                  He assembled a team of aviation professionals, safety experts,
                  and hospitality leaders to create something different. SkyElite
                  was founded on one principle: every flight should be
                  exceptional.
                </p>
                <p>
                  Today, we operate one of the youngest fleets in the industry,
                  maintain the highest safety certifications, and serve clients
                  across six continents. Our 24/7 concierge team ensures that
                  from the moment you inquire to the moment you land, every
                  detail is handled.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <svg
                className="w-32 h-32 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              The team behind SkyElite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-400">
                    {person.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{person.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Global Offices
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Wherever you need us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-gray-600">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">
            Join the SkyElite experience
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're flying for business or leisure, our team is ready to
            craft your perfect journey.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/book"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-gray-600 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
