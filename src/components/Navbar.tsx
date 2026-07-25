import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Fleet', path: '/fleet' },
  { label: 'Book', path: '/book' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={`max-w-7xl mx-auto w-full px-8 py-6 flex items-center justify-between z-50 ${
        isHome ? 'absolute top-0 left-0 right-0' : 'relative'
      }`}
    >
      <Link to="/" className="text-2xl font-semibold text-gray-900">
        SkyElite
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors ${
              location.pathname === link.path
                ? 'text-gray-900 font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <Link
          to="/book"
          className="px-4 py-2 rounded-full text-white text-sm font-medium transition-colors"
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

      <button
        className="md:hidden text-gray-900 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg z-50">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-gray-900 bg-gray-100 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="px-4 py-2 rounded-full text-white text-sm font-medium text-center transition-colors"
              style={{ backgroundColor: '#202A36' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
