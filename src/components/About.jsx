import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Heart, Users, Sparkles } from 'lucide-react'

const checklist = [
  'Free medical consultations for low-income families',
  'Affordable medicines at subsidised rates',
  'Hospital navigation & patient advocacy',
  'Health awareness camps across Nagpur',
  'Government scheme enrollment assistance',
  'Mental health & wellness support',
]

const values = [
  { icon: Heart, label: 'Compassionate Care', color: 'from-rose-500 to-pink-500', delay: 0 },
  { icon: Users, label: 'Community First', color: 'from-primary to-primary-medium', delay: 0.15 },
  { icon: Sparkles, label: 'Holistic Approach', color: 'from-accent to-accent-light', delay: 0.3 },
]

const LogoBig = () => (
  <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto drop-shadow-xl">
    <circle cx="140" cy="140" r="135" fill="url(#aboutCircleGrad)" />
    <circle cx="140" cy="140" r="105" fill="white" opacity="0.1" />
    <circle cx="140" cy="140" r="75" fill="white" opacity="0.15" />

    {/* Cross arms */}
    <rect x="118" y="72" width="44" height="136" rx="10" fill="white" opacity="0.95" />
    <rect x="72" y="118" width="136" height="44" rx="10" fill="white" opacity="0.95" />

    {/* Center circle */}
    <circle cx="140" cy="140" r="22" fill="url(#centerGrad)" />
    <path d="M140 128 C134 128 130 132 130 136 C130 142 140 150 140 150 C140 150 150 142 150 136 C150 132 146 128 140 128Z" fill="white" />

    {/* Outer ring dots */}
    <circle cx="140" cy="20" r="6" fill="white" opacity="0.4" />
    <circle cx="260" cy="140" r="6" fill="white" opacity="0.4" />
    <circle cx="140" cy="260" r="6" fill="white" opacity="0.4" />
    <circle cx="20" cy="140" r="6" fill="white" opacity="0.4" />

    <defs>
      <linearGradient id="aboutCircleGrad" x1="0" y1="0" x2="280" y2="280">
        <stop stopColor="#0a3d2b" />
        <stop offset="0.5" stopColor="#0d5c3a" />
        <stop offset="1" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="centerGrad" x1="0" y1="0" x2="44" y2="44">
        <stop stopColor="#0d9488" />
        <stop offset="1" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
  </svg>
)

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const slideLeft = {
    hidden: { x: -60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }
  const slideRight = {
    hidden: { x: 60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Logo Visual */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative flex flex-col items-center"
          >
            {/* Main icon card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2rem] blur-2xl opacity-20 scale-110" />
              <div className="relative bg-gradient-to-br from-primary via-primary-medium to-accent rounded-[2rem] p-8 sm:p-10">
                <LogoBig />

                {/* Mission quote overlay */}
                <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <p className="text-white/90 text-sm font-medium italic leading-relaxed">
                    "आरोग्य मित्र — Because every life deserves quality care"
                  </p>
                </div>
              </div>
            </div>

            {/* Floating value cards */}
            <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-sm">
              {values.map(({ icon: Icon, label, color, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + delay, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-xs leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-semibold">
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                Founded to bridge the{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  healthcare gap
                </span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-base lg:text-lg">
              Aarogya Mitra Healthcare Foundation was born from a simple observation — millions of families
              in Nagpur and across India struggle to access even basic healthcare. Founded in 2018, we set out
              with a powerful mission: to make quality healthcare <strong className="text-gray-800">accessible and affordable</strong> for every
              individual, regardless of their economic status.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              From our base at LIG Quarters, Rambag Colony, we have grown from a small volunteer group
              into a trusted healthcare partner for over 10,000 patients. We navigate the complex maze of
              hospitals, government schemes, and medical systems — so you don't have to do it alone.
            </motion.p>

            {/* Checklist */}
            <motion.div variants={fadeUp} className="space-y-3">
              <h3 className="font-display font-semibold text-gray-900 text-lg">What we do for you</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+9108149584719"
                className="px-6 py-3 bg-primary hover:bg-primary-medium text-white rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-sm"
              >
                Talk to Us
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary-light rounded-full font-semibold transition-all duration-200 text-sm"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
