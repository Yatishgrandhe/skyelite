import { Link } from 'react-router-dom'
import { Shield, Users, Gauge, Ruler } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
  {
    name: 'Light Jet',
    description: 'Ideal for short trips with up to 6 passengers',
    aircraft: [
      {
        name: 'Citation CJ3+',
        passengers: '6',
        range: '1,875 nm',
        speed: '416 kts',
        cabin: '12.8 ft x 4.8 ft',
        baggage: '65 cu ft',
      },
      {
        name: 'Phenom 300E',
        passengers: '8',
        range: '2,010 nm',
        speed: '453 kts',
        cabin: '15.5 ft x 5.1 ft',
        baggage: '85 cu ft',
      },
    ],
  },
  {
    name: 'Midsize Jet',
    description: 'Perfect balance of range and comfort',
    aircraft: [
      {
        name: 'Citation Latitude',
        passengers: '9',
        range: '2,700 nm',
        speed: '446 kts',
        cabin: '17.4 ft x 5.7 ft',
        baggage: '127 cu ft',
      },
      {
        name: 'Hawker 800XP',
        passengers: '8',
        range: '2,540 nm',
        speed: '448 kts',
        cabin: '15.6 ft x 5.7 ft',
        baggage: '72 cu ft',
      },
    ],
  },
  {
    name: 'Super Midsize Jet',
    description: 'Transcontinental range with premium cabin',
    aircraft: [
      {
        name: 'Challenger 350',
        passengers: '10',
        range: '3,200 nm',
        speed: '464 kts',
        cabin: '23.7 ft x 6.1 ft',
        baggage: '106 cu ft',
      },
      {
        name: 'Gulfstream G280',
        passengers: '10',
        range: '3,600 nm',
        speed: '471 kts',
        cabin: '19.2 ft x 6.1 ft',
        baggage: '120 cu ft',
      },
    ],
  },
  {
    name: 'Heavy Jet',
    description: 'Intercontinental luxury with full galley',
    aircraft: [
      {
        name: 'Challenger 604',
        passengers: '12',
        range: '4,000 nm',
        speed: '460 kts',
        cabin: '24.9 ft x 7.3 ft',
        baggage: '220 cu ft',
      },
      {
        name: 'Falcon 900LX',
        passengers: '14',
        range: '4,750 nm',
        speed: '474 kts',
        cabin: '23.5 ft x 7.4 ft',
        baggage: '128 cu ft',
      },
    ],
  },
  {
    name: 'Ultra Long Range',
    description: 'Fly anywhere in the world nonstop',
    aircraft: [
      {
        name: 'Global 7500',
        passengers: '19',
        range: '7,700 nm',
        speed: '485 kts',
        cabin: '54.5 ft x 8.2 ft',
        baggage: '195 cu ft',
      },
      {
        name: 'Gulfstream G650ER',
        passengers: '18',
        range: '7,500 nm',
        speed: '488 kts',
        cabin: '42.6 ft x 8.2 ft',
        baggage: '170 cu ft',
      },
    ],
  },
]

export default function Fleet() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <p className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Our Fleet
          </p>
          <h1 className="text-5xl md:text-6xl font-normal text-white tracking-tight mb-6">
            Aircraft for every mission
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From light jets for quick hops to ultra long range aircraft for
            intercontinental travel, find the perfect aircraft for your journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {categories.map((category) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {category.name}
              </h2>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.aircraft.map((jet) => (
                <div
                  key={jet.name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-1">
                        {category.name}
                      </p>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {jet.name}
                      </h3>
                    </div>
                    <Link
                      to="/book"
                      className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{jet.passengers} passengers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Gauge className="w-4 h-4 text-gray-400" />
                      <span>{jet.speed}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Ruler className="w-4 h-4 text-gray-400" />
                      <span>{jet.range}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span>{jet.baggage} baggage</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Cabin: {jet.cabin}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="py-16 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-normal text-white mb-4">
            Not sure which aircraft?
          </h2>
          <p className="text-gray-400 mb-8">
            Our aviation experts will recommend the perfect aircraft for your
            route, passengers, and preferences.
          </p>
          <Link
            to="/book"
            className="inline-block px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
          >
            Get a Recommendation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
