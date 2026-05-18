import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Impact', to: 'impact' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 backdrop-blur-md'
            : ''
        }`}
        style={{ backgroundColor: scrolled ? 'rgba(13,17,23,0.95)' : '#0d1117' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <div className="flex items-center gap-2.5 select-none">
              <img
                src="/icon.png"
                alt="Aarogya Mitra icon"
                className="h-10 w-10 object-contain rounded-lg"
                loading="eager"
              />
              <div>
                <div className="font-display font-bold text-base lg:text-lg leading-tight">
                  <span style={{ color: '#5DBB3F' }}>Aarogya</span>
                  {' '}
                  <span style={{ color: '#1E88E5' }}>Mitra</span>
                </div>
                <div className="text-gray-400 text-xs font-medium">Healthcare Services</div>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="relative cursor-pointer text-sm font-medium text-gray-300 hover:text-white group transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-brand-green" />
                </Link>
              ))}
            </div>

            {/* Phone + CTA (desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+9108149584719"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" style={{ color: '#5DBB3F' }} />
                +91 08149584719
              </a>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                Get Help Today
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
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

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ backgroundColor: '#0d1117' }}
          >
            {/* Top bar spacer */}
            <div className="h-16" />

            {/* Nav Links */}
            <div className="flex-1 flex flex-col px-6 pt-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="border-b border-white/10"
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 text-xl font-semibold text-white hover:text-brand-green cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Phone info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 mb-2"
              >
                <p className="text-gray-400 text-sm mb-1">Call us anytime</p>
                <a href="tel:+9108149584719" className="text-white font-semibold text-lg">
                  +91 08149584719
                </a>
              </motion.div>
            </div>

            {/* Bottom CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="px-6 pb-28 pt-4 flex flex-col gap-3"
            >
              <a
                href="tel:+9108149584719"
                onClick={() => setMenuOpen(false)}
                className="w-full text-white text-center py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                <Phone className="w-5 h-5" /> Call Now — Free
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full text-white text-center py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                style={{ backgroundColor: '#25d366' }}
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
