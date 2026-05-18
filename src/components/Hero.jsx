import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, ChevronDown, MessageCircle, Stethoscope, Pill, MapPin } from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const floatingCards = [
  {
    icon: Stethoscope,
    title: 'Free Teleconsult',
    sub: '24×7 doctor access',
    className: 'animate-float',
    pos: 'top-[18%] right-2 md:right-10',
    iconColor: '#5DBB3F',
  },
  {
    icon: Pill,
    title: '40% Med Discount',
    sub: 'All prescriptions',
    className: 'animate-float-1',
    pos: 'top-[44%] right-2 md:right-6',
    iconColor: '#1E88E5',
  },
  {
    icon: MapPin,
    title: 'Hospital Navigation',
    sub: '50+ hospitals',
    className: 'animate-float-2',
    pos: 'bottom-[22%] right-2 md:right-12',
    iconColor: '#F57C00',
  },
]

const trustBadges = [
  { label: 'Free Service' },
  { label: 'Nagpur Based' },
  { label: 'Since 2026' },
]

const MedicalSVG = () => (
  <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
    <circle cx="150" cy="170" r="140" fill="white" opacity="0.04" />
    <circle cx="150" cy="170" r="110" fill="white" opacity="0.04" />

    {/* Card */}
    <rect x="40" y="60" width="220" height="240" rx="24" fill="#161b22" />
    <rect x="40" y="60" width="220" height="240" rx="24" stroke="rgba(93,187,63,0.2)" strokeWidth="1.5" />

    {/* Cross */}
    <rect x="126" y="86" width="48" height="48" rx="10" fill="#5DBB3F" opacity="0.2" />
    <rect x="136" y="76" width="28" height="68" rx="6" fill="#5DBB3F" />
    <rect x="110" y="102" width="80" height="28" rx="6" fill="#5DBB3F" />
    <circle cx="150" cy="110" r="9" fill="#0d1117" />

    {/* Heartbeat */}
    <polyline points="48,205 80,205 94,178 108,232 122,192 136,205 164,205 178,188 192,220 206,205 252,205"
      stroke="#1E88E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Stats */}
    <rect x="55" y="228" width="60" height="52" rx="10" fill="#0d1117" />
    <text x="85" y="250" textAnchor="middle" fill="#5DBB3F" fontSize="14" fontWeight="700" fontFamily="Poppins">10K+</text>
    <text x="85" y="268" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter">Patients</text>

    <rect x="120" y="228" width="60" height="52" rx="10" fill="#0d1117" />
    <text x="150" y="250" textAnchor="middle" fill="#1E88E5" fontSize="14" fontWeight="700" fontFamily="Poppins">95%</text>
    <text x="150" y="268" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter">Satisfaction</text>

    <rect x="185" y="228" width="60" height="52" rx="10" fill="#0d1117" />
    <text x="215" y="250" textAnchor="middle" fill="#F57C00" fontSize="14" fontWeight="700" fontFamily="Poppins">6+</text>
    <text x="215" y="268" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter">Years</text>

    {/* Decorative dots */}
    <circle cx="42" cy="90" r="5" fill="#5DBB3F" opacity="0.4" />
    <circle cx="258" cy="300" r="8" fill="#1E88E5" opacity="0.3" />
    <circle cx="38" cy="270" r="6" fill="#F57C00" opacity="0.3" />
    <circle cx="262" cy="95" r="4" fill="white" opacity="0.2" />

    <circle cx="150" cy="170" r="136" stroke="rgba(93,187,63,0.08)" strokeWidth="1" strokeDasharray="5 7" />
  </svg>
)

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgYMotion = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: isMobile ? 0 : 0.12, delayChildren: isMobile ? 0 : 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 35 },
    show: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-dark"
    >
      {/* Parallax layer — desktop only */}
      {!isMobile && (
        <motion.div
          style={{ y: bgYMotion }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #5DBB3F, transparent)' }} />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-8"
            style={{ background: 'radial-gradient(circle, #1E88E5, transparent)' }} />
        </motion.div>
      )}

      {/* Static bg glows for mobile */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-8"
            style={{ background: 'radial-gradient(circle, #5DBB3F, transparent)' }} />
        </div>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-28 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[80vh]">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-white space-y-5 lg:space-y-7 text-center lg:text-left"
          >
            {/* NGO badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{ background: 'rgba(93,187,63,0.1)', borderColor: 'rgba(93,187,63,0.3)', color: '#5DBB3F' }}>
                🏥 NGO · Healthcare · Nagpur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                <span style={{ color: '#5DBB3F' }}>आरोग्य</span>
                {' '}
                <span style={{ color: '#1E88E5' }}>मित्र</span>
                {' '}—{' '}
                <span className="text-white">Your Health Friend</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0 line-clamp-3 sm:line-clamp-none">
                Making quality healthcare <span className="text-white font-semibold">accessible & affordable</span> for every individual in Nagpur — because good health is a right, not a privilege.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="tel:+9108149584719"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-base text-white transition-all duration-200 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                <Phone className="w-4 h-4" />
                Call Now — It&apos;s Free
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-base text-white transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                style={{ backgroundColor: '#25d366' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {trustBadges.map(({ label }) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border text-white/80"
                  style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  ✓ {label}
                </span>
              ))}
            </motion.div>

            {/* Urgency */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium mx-auto lg:mx-0"
              style={{ background: 'rgba(245,124,0,0.12)', border: '1px solid rgba(245,124,0,0.25)', color: '#F57C00' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F57C00' }} />
              Free health camp this Sunday — Medical Square, Nagpur
            </motion.div>
          </motion.div>

          {/* Right Illustration — hidden on mobile, shown on desktop */}
          <div className="relative hidden md:flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative w-72 lg:w-96 xl:w-[420px] aspect-square"
            >
              <MedicalSVG />
            </motion.div>

            {/* Floating Cards — desktop only */}
            {floatingCards.map(({ icon: Icon, title, sub, className, pos, iconColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.2, duration: 0.6 }}
                className={`absolute ${pos} ${className} z-20`}
              >
                <div className="bg-[#161b22] rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 min-w-[155px] border border-white/10">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${iconColor}20` }}>
                    <Icon className="w-4 h-4" style={{ color: iconColor }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Icon.png visual on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex md:hidden justify-center"
          >
            <img
              src="/icon.png"
              alt="Aarogya Mitra"
              className="w-24 h-24 object-contain rounded-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 text-xs hidden md:flex"
      >
        <span>scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
