import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home',     to: 'home'     },
  { name: 'About',    to: 'about'    },
  { name: 'Services', to: 'services' },
  { name: 'Impact',   to: 'impact'   },
  { name: 'Contact',  to: 'contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <div className="flex items-center gap-2.5 select-none flex-shrink-0">
              <img
                src="/icon.png"
                className="h-10 w-10 object-contain"
                alt="Aarogya Mitra"
                loading="eager"
              />
              <div>
                <div className="leading-tight">
                  <span className="font-bold text-xl" style={{ color: '#5DBB3F' }}>Aarogya</span>
                  <span className="font-bold text-xl ml-1" style={{ color: '#1E88E5' }}>Mitra</span>
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase" style={{ fontSize: '10px' }}>
                  Healthcare Services
                </div>
              </div>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-72}
                  className="relative cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 group transition-colors"
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: '#5DBB3F' }}
                  />
                </Link>
              ))}
            </div>

            {/* Phone + CTA — desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919108149584719"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" style={{ color: '#5DBB3F' }} />
                +91 08149584719
              </a>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-72}
                className="cursor-pointer text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                Get Help Today
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen white overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Spacer for navbar height */}
            <div className="h-16" />

            {/* Nav links */}
            <div className="flex-1 flex flex-col px-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  className="border-b border-gray-100"
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-72}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-xl font-semibold text-gray-800 hover:text-brand-green cursor-pointer transition-colors"
                    style={{ '--tw-hover-text-opacity': 1 }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                className="mt-6"
              >
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Call anytime</p>
                <a
                  href="tel:+919108149584719"
                  className="text-gray-900 font-semibold text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" style={{ color: '#5DBB3F' }} />
                  +91 08149584719
                </a>
              </motion.div>
            </div>

            {/* Bottom CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-6 pb-28 pt-4 flex flex-col gap-3"
            >
              <a
                href="tel:+919108149584719"
                onClick={() => setMenuOpen(false)}
                className="w-full text-white text-center py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                <Phone className="w-5 h-5" />
                📞 Call: +91 08149584719
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full text-white text-center py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2"
                style={{ backgroundColor: '#25d366' }}
              >
                <MessageCircle className="w-5 h-5" />
                💬 WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
