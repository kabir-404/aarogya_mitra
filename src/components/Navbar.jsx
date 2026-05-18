import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Impact', to: 'impact' },
  { name: 'Contact', to: 'contact' },
]

const LogoIcon = () => (
  <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
    <rect x="16.5" y="8" width="7" height="24" rx="3.5" fill="white" />
    <rect x="8" y="16.5" width="24" height="7" rx="3.5" fill="white" />
    <circle cx="20" cy="20" r="4" fill="#0d9488" />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#0a3d2b" />
        <stop offset="1" stopColor="#0d9488" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-gray-800' : 'text-white'
  const subColor = scrolled ? 'text-accent' : 'text-green-200'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-green-50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer select-none"
              whileHover={{ scale: 1.02 }}
            >
              <LogoIcon />
              <div>
                <div className={`font-display font-bold text-base lg:text-lg leading-tight transition-colors ${textColor}`}>
                  Aarogya Mitra
                </div>
                <div className={`text-xs font-medium transition-colors ${subColor}`}>
                  Healthcare Foundation
                </div>
              </div>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className={`relative cursor-pointer text-sm font-medium group transition-colors ${textColor}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                      scrolled ? 'bg-accent' : 'bg-green-300'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+9108149584719"
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent ${textColor}`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 08149584719</span>
              </a>
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                Get Help Today
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              whileTap={{ scale: 0.9 }}
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
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 z-40 bg-white/98 backdrop-blur-lg shadow-2xl border-b border-green-100 lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-3 text-gray-700 font-medium rounded-lg hover:bg-primary-light hover:text-primary cursor-pointer transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-3"
              >
                <a
                  href="tel:+9108149584719"
                  className="flex items-center gap-3 text-primary font-semibold py-2 px-3"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  +91 08149584719
                </a>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="bg-accent text-white text-center py-3 rounded-full font-semibold cursor-pointer hover:bg-accent-dark transition-colors"
                >
                  Get Help Today
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
