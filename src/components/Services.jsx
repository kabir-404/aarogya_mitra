import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone } from 'lucide-react'
import {
  TeleconsultationIcon,
  MedicineDiscountIcon,
  DiagnosticDiscountIcon,
  GovtSchemeIcon,
  HospitalBillIcon,
  DoctorReferralIcon,
  HomeVisitIcon,
  AmbulanceIcon,
  SurgeryNegotiationIcon,
} from '../icons/ServiceIcons'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const SERVICES = [
  { title: '24×7 FREE Teleconsultation',   desc: 'Speak to a doctor anytime, anywhere',    Icon: TeleconsultationIcon,   color: '#5DBB3F' },
  { title: 'Upto 40% Medicine Discount',   desc: 'On all prescribed medicines',             Icon: MedicineDiscountIcon,   color: '#1E88E5' },
  { title: '30-40% Diagnostic Discount',   desc: 'MRI, CT scans & pathology tests',         Icon: DiagnosticDiscountIcon, color: '#F57C00' },
  { title: 'Government Scheme Navigation', desc: 'Expert guidance for eligible schemes',     Icon: GovtSchemeIcon,         color: '#5DBB3F' },
  { title: 'Hospital Bill Reduction',      desc: 'Save 30-40% on hospitalization',           Icon: HospitalBillIcon,       color: '#1E88E5' },
  { title: 'Expert Doctor Referrals',      desc: 'Based on budget & location',               Icon: DoctorReferralIcon,     color: '#F57C00' },
  { title: 'Home Visit Consultations',     desc: 'With IV therapy at home',                  Icon: HomeVisitIcon,          color: '#5DBB3F' },
  { title: '24/7 Emergency Ambulance',     desc: 'Immediate medical transport',              Icon: AmbulanceIcon,          color: '#1E88E5' },
  { title: 'Surgery Cost Negotiation',     desc: 'We negotiate on your behalf',              Icon: SurgeryNegotiationIcon, color: '#F57C00' },
]

const colorBorderMap = {
  '#5DBB3F': '#5DBB3F',
  '#1E88E5': '#1E88E5',
  '#F57C00': '#F57C00',
}

const fadeUp = {
  hidden:  { opacity: 0, y: isMobile ? 12 : 30 },
  visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.35 : 0.45, ease: 'easeOut' } },
}

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
  const { title, desc, Icon, color } = service

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: isMobile ? 0 : (index % 3) * 0.06 }}
      className="service-card relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      style={{ minHeight: '110px', borderLeft: `4px solid ${colorBorderMap[color]}` }}
      whileHover={!isMobile ? { y: -4 } : undefined}
    >
      <div className="p-4 md:p-5">
        <div className="w-12 h-12 md:w-14 md:h-14 mb-3">
          <Icon />
        </div>
        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-1">{title}</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="services" className="py-12 lg:py-24" style={{ backgroundColor: '#f4fbf0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
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
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-3">
            What We Do For You
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed">
            From diagnosis to recovery, we&apos;re your single point of contact.<br className="hidden sm:block" />
            Healthcare should be a right, not a burden.
          </p>
        </motion.div>

        {/* 3×3 grid */}
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
            href="tel:+918149584719"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#5DBB3F', minHeight: '48px' }}
          >
            <Phone className="w-4 h-4" />
            Call Us — We&apos;ll Guide You
          </a>
        </motion.div>
      </div>
    </section>
  )
}
