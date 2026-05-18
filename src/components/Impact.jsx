import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Users, TrendingDown, UserCheck, Heart, Quote, Star } from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const STATS = [
  { value: 500,  suffix: '+',  label: 'Patients Helped So Far', Icon: Users,       color: '#5DBB3F' },
  { value: 40,   suffix: '%',  label: 'Average Medicine Savings', Icon: TrendingDown, color: '#1E88E5' },
  { value: 30,   suffix: '+',  label: 'Doctor Referrals Made',   Icon: UserCheck,   color: '#F57C00' },
  { value: 100,  suffix: '%',  label: 'Free of Cost Service',    Icon: Heart,       color: '#5DBB3F' },
]

const testimonials = [
  {
    text: "They helped me get 38% off on my mother's medicines. Genuinely helpful team.",
    name: 'Priya S.',
    location: 'Nagpur',
    rating: 5,
    initial: 'PS',
    color: '#5DBB3F',
  },
  {
    text: 'Got connected to the right specialist within hours. Completely free.',
    name: 'Rahul M.',
    location: 'Nagpur',
    rating: 5,
    initial: 'RM',
    color: '#1E88E5',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: isMobile ? 0 : 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Impact() {
  const [statsRef, statsInView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [testRef,  testInView]  = useInView({ threshold: 0.1,  triggerOnce: true })
  const [headRef,  headInView]  = useInView({ threshold: 0.2,  triggerOnce: true })

  return (
    <section id="impact" className="py-14 lg:py-24" style={{ backgroundColor: '#f4fbf0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: isMobile ? 0 : 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'white', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
          >
            Our Impact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            Small steps, <span style={{ color: '#5DBB3F' }}>real change</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            We may be new, but every patient we help is proof that affordable healthcare is possible.
          </p>
        </motion.div>

        {/* Stats grid — 2×2 */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STATS.map(({ value, suffix, label, Icon, color }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              animate={statsInView ? 'visible' : 'hidden'}
              transition={{ delay: isMobile ? 0 : i * 0.07 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.8} />
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl mb-1" style={{ color }}>
                {statsInView ? (
                  <CountUp end={value} duration={2} separator="," suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-medium leading-snug">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Promise strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 md:p-8 text-center mb-10"
          style={{ background: 'linear-gradient(135deg, #e8f5e9, #e3f2fd)' }}
        >
          <div className="text-2xl mb-3">🤝</div>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Our Promise</h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We may be new, but our commitment to affordable healthcare is unwavering.
            Every rupee saved for you is a victory for us.
          </p>
        </motion.div>

        {/* Testimonials — 2 simple ones */}
        <motion.div
          ref={testRef}
          initial={{ opacity: 0 }}
          animate={testInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
            What people say
          </h3>
          <p className="text-gray-400 text-sm">Real feedback from our patients</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              animate={testInView ? 'visible' : 'hidden'}
              transition={{ delay: isMobile ? 0 : i * 0.12 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-3 right-4 opacity-[0.07]">
                <Quote className="w-9 h-9 text-gray-800" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
