import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, ChevronDown, Star, Stethoscope, MapPin, Pill, Shield, Users, Heart } from 'lucide-react'

const floatingCards = [
  {
    icon: Stethoscope,
    title: 'Free Consultation',
    sub: 'Expert doctors, zero cost',
    delay: 0.8,
    className: 'animate-float',
    pos: 'top-[15%] right-[2%] lg:right-[8%]',
    bg: 'bg-white',
  },
  {
    icon: Pill,
    title: 'Affordable Medicines',
    sub: 'Up to 80% savings',
    delay: 1.1,
    className: 'animate-float-1',
    pos: 'top-[45%] right-[2%] lg:right-[4%]',
    bg: 'bg-white',
  },
  {
    icon: MapPin,
    title: 'Hospital Navigation',
    sub: 'We guide every step',
    delay: 1.4,
    className: 'animate-float-2',
    pos: 'bottom-[20%] right-[2%] lg:right-[10%]',
    bg: 'bg-white',
  },
]

const trustBadges = [
  { icon: Shield, label: 'Trusted Since 2018' },
  { icon: Users, label: '10,000+ Patients' },
  { icon: Star, label: '4.9★ Rating' },
]

const MedicalIllustration = () => (
  <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto drop-shadow-2xl">
    {/* Background circle */}
    <circle cx="160" cy="190" r="155" fill="url(#circleGrad)" opacity="0.15" />
    <circle cx="160" cy="190" r="125" fill="url(#circleGrad)" opacity="0.12" />

    {/* Main card */}
    <rect x="50" y="80" width="220" height="230" rx="24" fill="white" opacity="0.95" />

    {/* Medical cross */}
    <rect x="138" y="110" width="44" height="44" rx="8" fill="url(#crossGrad)" />
    <rect x="148" y="100" width="24" height="64" rx="5" fill="white" opacity="0.9" />
    <rect x="120" y="118" width="60" height="24" rx="5" fill="white" opacity="0.9" />
    <circle cx="160" cy="132" r="8" fill="#0d9488" />

    {/* Heartbeat line */}
    <polyline
      points="60,215 90,215 105,185 120,245 135,200 150,215 165,215 180,195 195,230 210,215 250,215"
      stroke="#0d9488"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Stats row */}
    <rect x="65" y="240" width="65" height="55" rx="12" fill="#f0fdf4" />
    <text x="97" y="263" textAnchor="middle" fill="#0a3d2b" fontSize="16" fontWeight="700" fontFamily="Poppins">10K+</text>
    <text x="97" y="280" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Inter">Patients</text>

    <rect x="137" y="240" width="65" height="55" rx="12" fill="#f0fdf4" />
    <text x="169" y="263" textAnchor="middle" fill="#0a3d2b" fontSize="16" fontWeight="700" fontFamily="Poppins">95%</text>
    <text x="169" y="280" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Inter">Satisfaction</text>

    <rect x="207" y="240" width="58" height="55" rx="12" fill="#f0fdf4" />
    <text x="236" y="263" textAnchor="middle" fill="#0a3d2b" fontSize="16" fontWeight="700" fontFamily="Poppins">6+</text>
    <text x="236" y="280" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="Inter">Years</text>

    {/* Decorative dots */}
    <circle cx="55" cy="110" r="6" fill="#0d9488" opacity="0.5" />
    <circle cx="265" cy="320" r="10" fill="#0a3d2b" opacity="0.3" />
    <circle cx="40" cy="290" r="8" fill="#0d9488" opacity="0.3" />
    <circle cx="280" cy="120" r="5" fill="white" opacity="0.5" />

    {/* Dashed ring */}
    <circle cx="160" cy="190" r="150" stroke="white" strokeWidth="1" strokeDasharray="6 8" opacity="0.15" />

    <defs>
      <linearGradient id="circleGrad" x1="0" y1="0" x2="320" y2="380">
        <stop stopColor="#0d9488" />
        <stop offset="1" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="crossGrad" x1="0" y1="0" x2="44" y2="44">
        <stop stopColor="#0a3d2b" />
        <stop offset="1" stopColor="#0d9488" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-hero">

      {/* Parallax background layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-24 lg:pt-20 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">

          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: contentY }}
            className="text-white space-y-6 lg:space-y-7"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium backdrop-blur-sm">
                <Heart className="w-3.5 h-3.5 fill-green-300 text-green-300" />
                NGO · Healthcare · Nagpur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-tight">
                आरोग्य मित्र —{' '}
                <span className="text-gradient bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  Your Health
                </span>{' '}
                Friend
              </h1>
              <p className="text-lg sm:text-xl text-green-100/80 leading-relaxed max-w-xl">
                Making quality healthcare <span className="text-white font-semibold">accessible & affordable</span> for every individual — because good health is a right, not a privilege.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="tel:+9108149584719"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-accent/40"
              >
                <Phone className="w-4 h-4" />
                Get Free Consultation
              </a>
              <Link
                to="about"
                smooth
                duration={700}
                offset={-80}
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 hover:border-white/60 text-white rounded-full font-semibold text-base transition-all duration-200 cursor-pointer hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
                <ChevronDown className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-green-100 border border-white/10"
                >
                  <Icon className="w-3.5 h-3.5 text-green-300" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* Urgency strip */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/15 border border-gold/30 rounded-xl text-gold text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Free health camp this Sunday at Medical Square, Nagpur
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]"
            >
              <MedicalIllustration />
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map(({ icon: Icon, title, sub, delay, className, pos, bg }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                className={`absolute ${pos} ${className} z-20`}
              >
                <div className={`${bg} rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-green-50 min-w-[160px]`}>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm leading-tight">{title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
