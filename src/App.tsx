import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const navLinks = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ']

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    let duration = 0
    let maxScroll = 0
    let isVisible = true

    const onLoaded = () => {
      duration = video.duration
      maxScroll = document.body.scrollHeight - window.innerHeight
    }
    video.addEventListener('loadedmetadata', onLoaded)

    const onResize = () => {
      maxScroll = document.body.scrollHeight - window.innerHeight
    }
    window.addEventListener('resize', onResize)

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
        if (maxScroll > 0 && duration > 0 && !video.seeking) {
          const target = (window.scrollY / maxScroll) * duration
          if (Math.abs(target - video.currentTime) > 0.04) {
            video.currentTime = target
          }
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <section ref={sectionRef} className="relative h-[300vh]">
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
            <nav className="max-w-7xl mx-auto w-full px-8 py-6 flex items-center justify-between z-10">
              <span className="text-2xl font-semibold text-gray-900">SkyElite</span>

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <button
                className="md:hidden text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>

            {mobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg z-20">
                <div className="flex flex-col p-4 gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-900 hover:text-gray-700 transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}

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
                  <a
                    href="#discover"
                    className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors"
                  >
                    Discover
                  </a>
                  <a
                    href="#book"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-lg">Scroll back up to rewind</p>
      </section>
    </div>
  )
}

export default App
