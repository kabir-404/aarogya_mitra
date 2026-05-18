import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HospitalIcon, ChatHeartIcon, ShieldCheckIcon } from '../illustrations/TrustIcons'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const items = [
  { Icon: HospitalIcon,   title: 'Partnered with top Nagpur hospitals', subtitle: 'Trusted local network' },
  { Icon: ChatHeartIcon,  title: 'Compassionate guidance, always',       subtitle: 'Human-first approach'  },
  { Icon: ShieldCheckIcon,title: 'Your health data stays private',       subtitle: '100% confidential'     },
]

const hospitals = [
  'Government Medical College Nagpur',
  'AIIMS Nagpur',
  'Orange City Hospital',
  'Wockhardt Hospital',
  'Alexis Hospital',
  'Lata Mangeshkar Hospital',
  'NMC Hospitals',
  'Kingsway Hospital',
]

const fadeUp = {
  hidden:  { opacity: 0, y: isMobile ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TrustSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="bg-white overflow-hidden">
      {/* Cards section */}
      <div className="py-12 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3"
              style={{ backgroundColor: '#f0faf0', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
            >
              Why Trust Us?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900">
              Built on trust, guided by compassion
            </h3>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {items.map(({ Icon, title, subtitle }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: isMobile ? 0 : i * 0.1 }}
                className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="mb-4 flex-shrink-0"><Icon /></div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-snug">{title}</h4>
                <p className="text-gray-400 text-xs">{subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital marquee strip — visible on all screen sizes */}
      <div className="overflow-hidden w-full py-4" style={{ backgroundColor: '#1a2e1a' }}>
        <p className="text-center text-white/40 text-xs mb-2 tracking-wider uppercase">Associated with</p>
        <div className="marquee-track flex items-center gap-6 md:gap-8 whitespace-nowrap">
          {[...hospitals, ...hospitals].map((h, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-medium flex-shrink-0"
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#5DBB3F' }} />
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
