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

interface NavbarProps {
  dark?: boolean
}

export default function Navbar({ dark = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const textMuted = dark ? 'text-gray-300' : 'text-gray-600'
  const textHover = dark ? 'hover:text-white' : 'hover:text-gray-900'
  const activeText = dark ? 'text-white font-semibold' : 'text-gray-900 font-semibold'
  const inactiveText = `${textMuted} ${textHover}`
  const hamburgerColor = dark ? 'text-white' : 'text-gray-900'

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
              location.pathname === link.path ? activeText : inactiveText
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <Link
          to="/book"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            dark
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'text-white'
          }`}
          style={dark ? undefined : { backgroundColor: '#202A36' }}
          onMouseEnter={(e) => {
            if (!dark) e.currentTarget.style.backgroundColor = '#1a2229'
          }}
          onMouseLeave={(e) => {
            if (!dark) e.currentTarget.style.backgroundColor = '#202A36'
          }}
        >
          Book Now
        </Link>
      </div>

      <button
        className={`md:hidden transition-colors ${hamburgerColor}`}
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
