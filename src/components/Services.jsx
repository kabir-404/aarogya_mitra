import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Phone, Pill, ScanLine, Landmark,
  Receipt, Stethoscope, Home, Truck, Handshake,
  Check
} from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const SERVICES = [
  {
    title: '24×7 FREE Teleconsultation',
    desc: 'Speak to a doctor anytime, anywhere',
    Icon: Phone,
    color: 'green',
  },
  {
    title: 'Upto 40% Medicine Discount',
    desc: 'On all prescribed medicines',
    Icon: Pill,
    color: 'blue',
  },
  {
    title: '30-40% Diagnostic Discount',
    desc: 'MRI, CT scans & pathology tests',
    Icon: ScanLine,
    color: 'orange',
  },
  {
    title: 'Government Scheme Navigation',
    desc: 'Expert guidance for eligible schemes',
    Icon: Landmark,
    color: 'green',
  },
  {
    title: 'Hospital Bill Reduction',
    desc: 'Save 30-40% on hospitalization',
    Icon: Receipt,
    color: 'blue',
  },
  {
    title: 'Expert Doctor Referrals',
    desc: 'Based on budget & location',
    Icon: Stethoscope,
    color: 'orange',
  },
  {
    title: 'Home Visit Consultations',
    desc: 'With IV therapy at home',
    Icon: Home,
    color: 'green',
  },
  {
    title: '24/7 Emergency Ambulance',
    desc: 'Immediate medical transport',
    Icon: Truck,
    color: 'blue',
  },
  {
    title: 'Surgery Cost Negotiation',
    desc: 'We negotiate on your behalf',
    Icon: Handshake,
    color: 'orange',
  },
]

const colorMap = {
  green:  { hex: '#5DBB3F', light: '#f0faf0', border: '#c8e6c9' },
  blue:   { hex: '#1E88E5', light: '#eff6ff', border: '#bfdbfe' },
  orange: { hex: '#F57C00', light: '#fff7ed', border: '#fed7aa' },
}

const fadeUp = {
  hidden:  { opacity: 0, y: isMobile ? 0 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
  const { title, desc, Icon, color } = service
  const c = colorMap[color]

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: isMobile ? 0 : (index % 3) * 0.06 }}
      className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      style={{ minHeight: '110px', borderLeft: `4px solid ${c.hex}` }}
    >
      {/* Green checkmark badge top-right */}
      <div
        className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: '#5DBB3F' }}
      >
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>

      <div className="p-4 md:p-5">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
          style={{ backgroundColor: c.light }}
        >
          <Icon
            style={{ color: c.hex, width: '22px', height: '22px' }}
            strokeWidth={1.8}
          />
        </div>

        {/* Text */}
        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-1 pr-6">{title}</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="services" className="py-14 lg:py-24" style={{ backgroundColor: '#f4fbf0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: 'white', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
          >
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3">
            What We Do For You
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            From diagnosis to recovery, we&apos;re your single point of contact.<br className="hidden sm:block" />
            Healthcare should be a right, not a burden.
          </p>
        </motion.div>

        {/* 3×3 grid — 2-col mobile, 3-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 mb-4 text-sm">Not sure which service you need?</p>
          <a
            href="tel:+919108149584719"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#5DBB3F' }}
          >
            <Phone className="w-4 h-4" />
            Call Us — We&apos;ll Guide You
          </a>
        </motion.div>
      </div>
    </section>
  )
}
