import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, ChevronDown, MessageCircle } from 'lucide-react'
import DoctorHero from '../illustrations/DoctorHero'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const fadeUp = {
  hidden: { opacity: 0, y: isMobile ? 0 : 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: isMobile ? 0 : 0.1, delayChildren: 0.1 } },
}

const trustPills = ['Free', 'Nagpur Based', 'Est. 2026']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#e8f5e9] to-[#e3f2fd] pt-16"
    >
      {/* Subtle background blobs — desktop only */}
      {!isMobile && (
        <>
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #bbdefb, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c8e6c9, transparent)' }}
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-5 text-center lg:text-left"
          >
            {/* Mobile: small logo at top */}
            <motion.div variants={fadeUp} className="flex justify-center lg:hidden">
              <img
                src="/icon.png"
                alt="Aarogya Mitra"
                className="h-16 w-16 object-contain"
                loading="eager"
              />
            </motion.div>

            {/* Category pill */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#e8f5e9', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
              >
                🏥 NGO · Healthcare · Nagpur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-900"
            >
              <span style={{ color: '#5DBB3F' }}>आरोग्य</span>
              {' '}
              <span style={{ color: '#1E88E5' }}>मित्र</span>
              {' '}— Your Health Friend
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Making quality healthcare{' '}
              <strong className="text-gray-800">accessible &amp; affordable</strong>{' '}
              for every individual — because good health is a right, not a privilege.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="tel:+919108149584719"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                <Phone className="w-4 h-4" />
                📞 Call Now — It&apos;s Free
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                style={{ backgroundColor: '#25d366' }}
              >
                <MessageCircle className="w-4 h-4" />
                💬 WhatsApp Us
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {trustPills.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-600 shadow-sm"
                >
                  ✓ {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Cartoon doctor illustration — desktop only ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="w-72 xl:w-80 2xl:w-96">
              <DoctorHero />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-gray-400 text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
