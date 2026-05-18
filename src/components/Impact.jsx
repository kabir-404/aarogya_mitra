import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Quote, Star } from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const stats = [
  { value: 10000, suffix: '+', label: 'Patients Helped', icon: '🧑‍🤝‍🧑', color: '#5DBB3F' },
  { value: 500, suffix: '+', label: 'Consultations / Month', icon: '🩺', color: '#1E88E5' },
  { value: 100, suffix: '+', label: 'Health Camps Held', icon: '⛺', color: '#F57C00' },
  { value: 95, suffix: '%', label: 'Satisfaction Rate', icon: '⭐', color: '#5DBB3F' },
  { value: 6, suffix: '+', label: 'Years of Service', icon: '📅', color: '#1E88E5' },
  { value: 50, suffix: '+', label: 'Partner Hospitals', icon: '🏥', color: '#F57C00' },
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
    avatarColor: '#5DBB3F',
  },
  {
    name: 'Sunita Deshpande',
    location: 'Dharampeth, Nagpur',
    rating: 5,
    text: "My mother is diabetic and the medicine costs were becoming unmanageable. Aarogya Mitra helped us get the same medicines at 70% less cost through their network. The team is so caring and never makes you feel alone. Highly recommend!",
    avatar: 'SD',
    avatarColor: '#1E88E5',
  },
  {
    name: 'Mohammed Ansari',
    location: 'Jaripatka, Nagpur',
    rating: 5,
    text: "They conducted a free health camp in our colony and detected my high blood pressure early. The doctor immediately put me on medication which I got at subsidised rates. If not for Aarogya Mitra, I might not have known until it was too late. Excellent work!",
    avatar: 'MA',
    avatarColor: '#F57C00',
  },
]

function StatCard({ stat, index, shouldCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
      animate={shouldCount ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: isMobile ? 0.3 : 0.55, delay: isMobile ? 0 : index * 0.07 }}
      className="text-center p-4 md:p-6 rounded-2xl border"
      style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' }}
    >
      <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
      <div className="font-display font-bold text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
        {shouldCount ? (
          <CountUp end={stat.value} duration={2.2} separator="," suffix={stat.suffix} />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="text-white/60 text-xs md:text-sm font-medium">{stat.label}</div>
    </motion.div>
  )
}

export default function Impact() {
  const [statsRef, statsInView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [testRef, testInView] = useInView({ threshold: 0.08, triggerOnce: true })
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const doubledPartners = [...partners, ...partners]

  return (
    <section id="impact" className="relative overflow-hidden" style={{ backgroundColor: '#0d1117' }}>
      {/* Subtle glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #5DBB3F, transparent)' }} />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #1E88E5, transparent)' }} />
      </div>

      {/* Stats */}
      <div className="relative z-10 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.65 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border"
              style={{ backgroundColor: 'rgba(93,187,63,0.1)', borderColor: 'rgba(93,187,63,0.25)', color: '#5DBB3F' }}>
              Our Impact
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              Numbers that tell our{' '}
              <span style={{ color: '#5DBB3F' }}>story</span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-xl mx-auto">
              Six years of relentless work and community service reflected in real outcomes.
            </p>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} shouldCount={statsInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Partner Marquee */}
      <div className="py-6 md:py-8 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <p className="text-center text-white/40 text-xs font-medium uppercase tracking-widest">Partner Hospitals</p>
        </div>
        <div className="overflow-hidden relative">
          <div className="marquee-track gap-4 md:gap-6 flex">
            {doubledPartners.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-white/60 text-xs md:text-sm font-medium whitespace-nowrap border"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                🏥 {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div ref={testRef} className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={testInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              What Nagpur says about us
            </h3>
            <p className="text-white/40 text-sm">Real stories from patients we have served</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
                animate={testInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : i * 0.12 }}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-xl border border-gray-100 flex flex-col gap-3 relative overflow-hidden"
              >
                <div className="absolute top-3 right-4 opacity-[0.07]">
                  <Quote className="w-10 h-10 text-gray-800" />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: t.avatarColor }}>
                    {t.avatar}
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
