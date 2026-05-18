import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'
import CaringTeam from '../illustrations/CaringTeam'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const fadeUp = {
  hidden:   { opacity: 0, y: isMobile ? 0 : 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const checklist = [
  'Free medical teleconsultations for all',
  'Medicines at up to 40% discounted rates',
  'Hospital navigation & patient advocacy',
  '30-40% savings on diagnostics & scans',
  'Government health scheme enrollment',
  'Expert doctor referrals by budget & area',
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>

          {/* Left: caring team illustration */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm">
              <CaringTeam />
            </div>
          </motion.div>

          {/* Right: story content */}
          <div className="space-y-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3"
                style={{ backgroundColor: '#f0faf0', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
              >
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                Founded to bridge the{' '}
                <span style={{ color: '#5DBB3F' }}>healthcare gap</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.08 }}
              className="text-gray-600 leading-relaxed text-base lg:text-lg"
            >
              Aarogya Mitra Healthcare Foundation was born from a simple observation — millions of
              families in Nagpur struggle to access even basic healthcare. Est. 2026, we set out
              with one mission: make quality healthcare{' '}
              <strong className="text-gray-800">accessible and affordable</strong> for every
              individual, regardless of their economic background.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.14 }}
              className="text-gray-600 leading-relaxed"
            >
              From LIG Quarters, Rambag Colony, Nagpur, we navigate the complex maze of hospitals,
              government schemes, and medical systems — so you never have to do it alone.
            </motion.p>

            {/* Checklist */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="space-y-2.5"
            >
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
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.26 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="tel:+919108149584719"
                className="px-6 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
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
          </div>
        </div>
      </div>
    </section>
  )
}
