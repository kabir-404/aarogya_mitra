import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Phone } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TrustSection from './components/TrustSection'
import Impact from './components/Impact'
import Contact from './components/Contact'
import Footer from './components/Footer'

function MobileBottomBar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[999] md:hidden bg-white border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="flex gap-2 p-2.5" style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}>
            <a
              href="tel:+918149584719"
              className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 rounded-xl active:scale-95 transition-transform"
              style={{ backgroundColor: '#5DBB3F', minHeight: '48px' }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/918149584719"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 rounded-xl active:scale-95 transition-transform"
              style={{ backgroundColor: '#25d366', minHeight: '48px' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showBottomBar, setShowBottomBar] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const heroCTA = document.getElementById('hero-cta-buttons')
    if (!heroCTA) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowBottomBar(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(heroCTA)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TrustSection />
        <Impact />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp FAB — desktop only */}
      <motion.a
        href="https://wa.me/918149584719"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
        className="pulse-ring hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 text-white rounded-full items-center justify-center shadow-2xl cursor-pointer relative"
        style={{ backgroundColor: '#25d366' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </motion.a>

      {/* Scroll to top — desktop only */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden md:flex fixed bottom-6 right-24 z-50 w-11 h-11 text-white rounded-full items-center justify-center shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#5DBB3F' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <MobileBottomBar show={showBottomBar} />
    </div>
  )
}
