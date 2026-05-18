import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Heart, Users, Sparkles } from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const checklist = [
  'Free medical consultations for low-income families',
  'Affordable medicines at subsidised rates',
  'Hospital navigation & patient advocacy',
  'Health awareness camps across Nagpur',
  'Government scheme enrollment assistance',
  'Mental health & wellness support',
]

const values = [
  { icon: Heart, label: 'Compassionate Care', iconColor: '#F57C00', bg: 'rgba(245,124,0,0.15)' },
  { icon: Users, label: 'Community First', iconColor: '#5DBB3F', bg: 'rgba(93,187,63,0.15)' },
  { icon: Sparkles, label: 'Holistic Approach', iconColor: '#1E88E5', bg: 'rgba(30,136,229,0.15)' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const makeAnim = (dir) => ({
    hidden: { x: isMobile ? 0 : (dir === 'left' ? -60 : 60), opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: isMobile ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] } },
  })
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: isMobile ? 0 : 0.09, delayChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { y: isMobile ? 0 : 25, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: isMobile ? 0.3 : 0.55, ease: 'easeOut' } },
  }

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle right tint */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{ background: 'linear-gradient(to left, #f0f7f0, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: Icon.png in dark card */}
          <motion.div
            variants={makeAnim('left')}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 scale-110"
                style={{ background: 'linear-gradient(135deg, #5DBB3F, #1E88E5)' }} />

              {/* Dark card with icon */}
              <div className="relative rounded-3xl p-8 sm:p-10" style={{ backgroundColor: '#161b22', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex justify-center mb-6">
                  <img
                    src="/icon.png"
                    alt="Aarogya Mitra Logo"
                    className="w-40 h-40 object-contain rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Mission quote */}
                <div className="text-center border-t pt-5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p className="text-white/70 text-sm font-medium italic leading-relaxed">
                    &ldquo;आरोग्य मित्र — Because every life deserves quality care&rdquo;
                  </p>
                </div>

                {/* Stat chips */}
                <div className="flex gap-3 mt-5 justify-center">
                  {[['10K+', 'Patients', '#5DBB3F'], ['95%', 'Satisfied', '#1E88E5'], ['6+', 'Years', '#F57C00']].map(([val, lbl, col]) => (
                    <div key={lbl} className="flex-1 text-center py-3 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                      <div className="font-display font-bold text-xl" style={{ color: col }}>{val}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Value cards */}
            <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-sm">
              {values.map(({ icon: Icon, label, iconColor, bg }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                  className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: bg }}>
                    <Icon className="w-4 h-4" style={{ color: iconColor }} />
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
            className="space-y-5"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#f0f7f0', color: '#5DBB3F', border: '1px solid #d4edcc' }}>
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                Founded to bridge the{' '}
                <span style={{ color: '#5DBB3F' }}>healthcare gap</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-base lg:text-lg">
              Aarogya Mitra Healthcare Foundation was born from a simple observation — millions of families
              in Nagpur struggle to access even basic healthcare. Founded in 2026, we set out with one mission:
              make quality healthcare <strong className="text-gray-800">accessible and affordable</strong> for every individual,
              regardless of their economic status.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              From our base at LIG Quarters, Rambag Colony, we have grown from a small volunteer group
              into a trusted healthcare partner for over 10,000 patients. We navigate the complex maze of
              hospitals, government schemes, and medical systems — so you never have to do it alone.
            </motion.p>

            {/* Checklist */}
            <motion.div variants={fadeUp} className="space-y-2.5">
              <h3 className="font-display font-semibold text-gray-900 text-lg">What we do for you</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#5DBB3F' }} />
                    <span className="text-gray-600 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <a
                href="tel:+9108149584719"
                className="px-6 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                Talk to Us
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 border-2"
                style={{ borderColor: '#5DBB3F', color: '#5DBB3F' }}
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
