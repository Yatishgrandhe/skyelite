import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Clock, Globe, Award } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fleetPreview = [
  {
    name: 'Citation Latitude',
    category: 'Midsize',
    passengers: '9',
    range: '2,700 nm',
    speed: '446 kts',
  },
  {
    name: 'Challenger 350',
    category: 'Super Midsize',
    passengers: '10',
    range: '3,200 nm',
    speed: '464 kts',
  },
  {
    name: 'Gulfstream G280',
    category: 'Super Midsize',
    passengers: '10',
    range: '3,600 nm',
    speed: '471 kts',
  },
  {
    name: 'Global 7500',
    category: 'Ultra Long Range',
    passengers: '19',
    range: '7,700 nm',
    speed: '485 kts',
  },
]

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'ARGUS Platinum rated with Wyvern Wingman certification. Every flight meets the highest safety standards in aviation.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Our concierge team is available around the clock. Book flights, make changes, or get assistance anytime.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Access to 5,000+ airports worldwide. Fly wherever business or leisure takes you without commercial constraints.',
  },
  {
    icon: Award,
    title: 'Premium Service',
    description:
      'Dedicated flight crew, gourmet catering, and personalized concierge service on every flight.',
  },
]

const memberships = [
  {
    name: 'Card',
    price: 'Starting at $250K',
    hours: '25 flight hours',
    features: [
      'On-demand charter access',
      'Guaranteed availability',
      'Dedicated concierge',
      'Standard catering',
    ],
  },
  {
    name: 'Share',
    price: 'Starting at $1.2M',
    hours: '50 flight hours',
    features: [
      'Guaranteed aircraft access',
      'Priority scheduling',
      'Premium catering',
      'Global fleet access',
      'Guaranteed resale value',
    ],
    popular: true,
  },
  {
    name: 'Program',
    price: 'Custom',
    hours: 'Unlimited',
    features: [
      'Guaranteed availability',
      'Dedicated fleet access',
      'Private dining experiences',
      'Event access',
      'Full concierge service',
      'Flexible terms',
    ],
  },
]

const destinations = [
  { from: 'New York', to: 'Miami', time: '2h 45m', aircraft: 'Citation Latitude' },
  { from: 'Los Angeles', to: 'Las Vegas', time: '1h 10m', aircraft: 'Challenger 350' },
  { from: 'London', to: 'Paris', time: '1h 20m', aircraft: 'Gulfstream G280' },
  { from: 'Dubai', to: 'Maldives', time: '4h 15m', aircraft: 'Global 7500' },
]

const testimonials = [
  {
    quote:
      'SkyElite transformed how we approach business travel. The reliability and service are unmatched.',
    author: 'Sarah Chen',
    title: 'CEO, Meridian Capital',
  },
  {
    quote:
      'From booking to landing, every detail was handled flawlessly. This is what premium travel should feel like.',
    author: 'James Morrison',
    title: 'Managing Director, Atlas Ventures',
  },
  {
    quote:
      'The global reach and flexibility SkyElite offers has been invaluable for our international operations.',
    author: 'Elena Vasquez',
    title: 'Partner, Quantum Holdings',
  },
]

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const mq = window.matchMedia('(min-width: 768px)')
    if (!mq.matches) return

    let duration = 0
    let sectionScrollHeight = 0
    let isVisible = true
    let lastTarget = -1

    const recalc = () => {
      duration = video.duration || 0
      sectionScrollHeight = section.offsetHeight - window.innerHeight
    }
    video.addEventListener('loadedmetadata', recalc)
    window.addEventListener('resize', recalc)

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(section)

    let ticking = false
    const onScroll = () => {
      if (ticking || !isVisible) return
      ticking = true
      requestAnimationFrame(() => {
        if (sectionScrollHeight > 0 && duration > 0 && !video.seeking) {
          const progress = Math.min(window.scrollY / sectionScrollHeight, 1)
          const target = progress * duration
          if (Math.abs(target - lastTarget) > 0.04) {
            video.currentTime = target
            lastTarget = target
          }
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      video.removeEventListener('loadedmetadata', recalc)
      window.removeEventListener('resize', recalc)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Hero - static with CSS animations */}
      <section className="md:hidden relative h-screen overflow-hidden" style={{ backgroundColor: '#202A36' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)'
          }} />
        </div>

        <div className="relative h-full flex flex-col">
          <Navbar />

          <div className="flex-1 flex items-center justify-center px-6">
            <div className="text-center w-full">
              <p className="text-sm font-semibold text-gray-400 tracking-wider mb-4 uppercase animate-fade-in-up delay-100">
                Private Jets
              </p>

              <h1 className="mb-6">
                <span className="block text-5xl font-normal text-gray-400 leading-none tracking-tighter animate-fade-in-up delay-200">
                  Premium.
                </span>
                <span className="block text-5xl font-normal text-white leading-none tracking-tighter animate-fade-in-up delay-300" style={{ marginTop: '-8px' }}>
                  Accessible.
                </span>
              </h1>

              <p className="text-base text-gray-400 mb-8 max-w-md mx-auto animate-fade-in-up delay-400">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-3 animate-fade-in-up delay-500">
                <Link
                  to="/fleet"
                  className="px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors"
                >
                  Discover
                </Link>
                <Link
                  to="/book"
                  className="px-5 py-2.5 rounded-full bg-white text-sm font-medium hover:bg-gray-100 transition-colors"
                  style={{ color: '#202A36' }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero - video scroll animation */}
      <section ref={sectionRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: 'transform' }}
            src="/hero.mp4"
          />

          <div className="relative h-full flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center -mt-80 z-10">
              <div className="text-center px-4">
                <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
                  Private Jets
                </p>

                <h1 className="mb-6">
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                    Premium.
                  </span>
                  <span
                    className="block text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
                    style={{ color: '#202A36', marginTop: '-12px' }}
                  >
                    Accessible.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                  Your dedication deserves recognition.
                </p>

                <div className="flex items-center justify-center gap-4">
                  <Link
                    to="/fleet"
                    className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
                  >
                    Discover
                  </Link>
                  <Link
                    to="/book"
                    className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                    style={{ backgroundColor: '#202A36' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#1a2229')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#202A36')
                    }
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Our Fleet
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Aircraft tailored to you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetPreview.map((aircraft) => (
              <div
                key={aircraft.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-300"
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
                <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-1">
                  {aircraft.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {aircraft.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Passengers</span>
                    <span className="font-medium text-gray-900">
                      {aircraft.passengers}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="font-medium text-gray-900">
                      {aircraft.range}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed</span>
                    <span className="font-medium text-gray-900">
                      {aircraft.speed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/fleet"
              className="inline-block px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              View Full Fleet
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Why SkyElite
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Built for those who demand more
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: '#202A36' }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Membership
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Choose your experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border-2 transition-shadow hover:shadow-lg ${
                  plan.popular
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-1 ${
                    plan.popular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {plan.hours}
                </p>
                <p
                  className={`text-lg font-semibold mb-6 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-sm ${
                        plan.popular ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-gray-900'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    plan.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Safety
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Uncompromising standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { cert: 'ARGUS', level: 'Platinum', desc: 'Highest safety rating' },
              { cert: 'Wyvern', level: 'Wingman', desc: 'Verified operator' },
              { cert: 'IS-BAO', level: 'Stage 3', desc: 'Global standard' },
              { cert: 'NBAA', level: 'Member', desc: 'Industry leader' },
            ].map((badge) => (
              <div key={badge.cert} className="p-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {badge.cert}
                </h3>
                <p className="text-sm font-medium text-gray-600">{badge.level}</p>
                <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
              Popular Routes
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight">
              Where will you fly?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={`${dest.from}-${dest.to}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-semibold text-gray-900">
                    {dest.from}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span className="text-lg font-semibold text-gray-900">
                    {dest.to}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Flight time: {dest.time}
                </p>
                <p className="text-xs text-gray-500">
                  Recommended: {dest.aircraft}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight mb-16">
            Trusted by leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight mb-6">
            Ready to elevate your travel?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Experience the SkyElite difference. Our team is available 24/7 to
            plan your next flight.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/book"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+18005551234"
              className="px-6 py-3 rounded-full border border-gray-600 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Call 1-800-555-1234
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
