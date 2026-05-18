import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Quote, Star } from 'lucide-react'

const stats = [
  { value: 10000, suffix: '+', label: 'Patients Helped', icon: '🧑‍🤝‍🧑' },
  { value: 500, suffix: '+', label: 'Consultations / Month', icon: '🩺' },
  { value: 100, suffix: '+', label: 'Health Camps Held', icon: '⛺' },
  { value: 95, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
  { value: 6, suffix: '+', label: 'Years of Service', icon: '📅' },
  { value: 50, suffix: '+', label: 'Partner Hospitals', icon: '🏥' },
]

const partners = [
  'Govt. Medical College & Hospital',
  'AIIMS Nagpur',
  'Orange City Hospital',
  'Wockhardt Hospital',
  'Care Hospital',
  'Alexis Hospital',
  'Apollo Cradle',
  'Lata Mangeshkar Hospital',
  'NKP Salve Institute',
  'KIMS Hospital',
  'Indira Gandhi Govt. Hospital',
  'Mayo Hospital Nagpur',
]

const testimonials = [
  {
    name: 'Ramesh Sharma',
    location: 'Kamptee Road, Nagpur',
    rating: 5,
    text: "Aarogya Mitra was a blessing when my father was diagnosed with kidney disease. I had no idea how to navigate the government hospital system. Their team guided us at every step, helped us enroll in Ayushman Bharat, and even arranged affordable dialysis. God bless this organisation!",
    avatar: 'RS',
    gradient: 'from-primary to-accent',
  },
  {
    name: 'Sunita Deshpande',
    location: 'Dharampeth, Nagpur',
    rating: 5,
    text: "My mother is diabetic and the medicine costs were becoming unmanageable. Aarogya Mitra helped us get the same medicines at 70% less cost through their network. The team is so caring and never make you feel alone. Highly recommend!",
    avatar: 'SD',
    gradient: 'from-teal-600 to-emerald-500',
  },
  {
    name: 'Mohammed Ansari',
    location: 'Jaripatka, Nagpur',
    rating: 5,
    text: "They conducted a free health camp in our colony and detected my high blood pressure early. The doctor immediately put me on medication which I got at subsidised rates. If not for Aarogya Mitra, I might not have known until it was too late. Excellent work!",
    avatar: 'MA',
    gradient: 'from-violet-600 to-purple-500',
  },
]

function StatCard({ stat, index, shouldCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={shouldCount ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-colors"
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="font-display font-bold text-4xl text-white mb-1">
        {shouldCount ? (
          <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="text-green-200 text-sm font-medium">{stat.label}</div>
    </motion.div>
  )
}

function TestimonialCard({ t, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-4 relative overflow-hidden"
    >
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="w-12 h-12 text-primary" />
      </div>

      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>

      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
          <div className="text-gray-400 text-xs">{t.location}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Impact() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [testRef, testInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const doubledPartners = [...partners, ...partners]

  return (
    <section id="impact" className="bg-hero relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-green-200 rounded-full text-sm font-semibold mb-4 border border-white/20">
              Our Impact
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Numbers that tell our{' '}
              <span className="bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                story
              </span>
            </h2>
            <p className="text-green-100/70 text-lg max-w-xl mx-auto">
              Six years of relentless work, compassion, and community service reflected in real outcomes.
            </p>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} shouldCount={statsInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Partner Marquee */}
      <div className="py-8 border-t border-white/10 border-b">
        <div className="max-w-7xl mx-auto px-4 mb-5">
          <p className="text-center text-green-200/60 text-sm font-medium uppercase tracking-widest">Our Partner Hospitals</p>
        </div>
        <div className="overflow-hidden relative">
          <div className="marquee-track gap-6 flex">
            {doubledPartners.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 px-6 py-3 bg-white/10 border border-white/15 rounded-full text-white/80 text-sm font-medium whitespace-nowrap"
              >
                🏥 {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div ref={testRef} className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              What Nagpur says about us
            </h3>
            <p className="text-green-100/60 text-base">Real stories from real patients we have served</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} inView={testInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
