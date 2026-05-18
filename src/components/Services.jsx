import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Video, Pill, ScanLine, Landmark,
  Building2, UserCheck, Home, Truck, BadgePercent, Check
} from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const SERVICES = [
  {
    title: '24×7 FREE Teleconsultation',
    desc: 'Speak to a doctor anytime, anywhere',
    Icon: Video,
    color: 'green',
  },
  {
    title: '40% Medicine Discount',
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
    Icon: Building2,
    color: 'blue',
  },
  {
    title: 'Expert Doctor Referrals',
    desc: 'Based on budget & location',
    Icon: UserCheck,
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
    Icon: BadgePercent,
    color: 'orange',
  },
]

const colorMap = {
  green: {
    border: '#5DBB3F',
    icon: '#5DBB3F',
    iconBg: 'rgba(93,187,63,0.1)',
    tag: 'rgba(93,187,63,0.08)',
  },
  blue: {
    border: '#1E88E5',
    icon: '#1E88E5',
    iconBg: 'rgba(30,136,229,0.1)',
    tag: 'rgba(30,136,229,0.08)',
  },
  orange: {
    border: '#F57C00',
    icon: '#F57C00',
    iconBg: 'rgba(245,124,0,0.1)',
    tag: 'rgba(245,124,0,0.08)',
  },
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
  const { title, desc, Icon, color } = service
  const c = colorMap[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{
        duration: isMobile ? 0.3 : 0.55,
        delay: isMobile ? 0 : (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 md:hover:scale-[1.02] cursor-pointer group"
      style={{ minHeight: '100px' }}
    >
      {/* Left orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: c.border }} />

      {/* Green checkmark badge — top right */}
      <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#5DBB3F' }}>
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>

      <div className="p-4 md:p-5 pl-5 md:pl-6">
        {/* Icon */}
        <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center mb-3"
          style={{ backgroundColor: c.iconBg }}>
          <Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: c.icon }} />
        </div>

        {/* Text */}
        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-1 pr-5">{title}</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="services" className="py-14 lg:py-24" style={{ backgroundColor: '#f8fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.3 : 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0f7f0', color: '#5DBB3F', border: '1px solid #d4edcc' }}>
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3">
            WHAT WE DO
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto">
            From diagnosis to recovery, we&apos;re your single point of contact
          </p>
        </motion.div>

        {/* Grid: 2-col mobile, 3-col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 mb-4 text-sm">Not sure which service you need?</p>
          <a
            href="tel:+9108149584719"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#5DBB3F' }}
          >
            Call Us — We&apos;ll Guide You
          </a>
        </motion.div>
      </div>
    </section>
  )
}
