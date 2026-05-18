import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Stethoscope, Pill, MapPin, FlaskConical,
  Baby, Brain, Users, FileText,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Free Medical Consultation',
    desc: 'Expert doctors available for free consultations. Get proper diagnosis and treatment plans without any financial burden.',
    tags: ['Free', 'Daily Clinics'],
    gradient: 'from-emerald-500 to-teal-600',
    accent: '#0d9488',
  },
  {
    icon: Pill,
    title: 'Affordable Medicines',
    desc: 'Access quality generic medicines at up to 80% reduced rates through our pharmacy network and government tie-ups.',
    tags: ['80% Savings', 'Generic Medicines'],
    gradient: 'from-green-600 to-emerald-500',
    accent: '#16a34a',
  },
  {
    icon: MapPin,
    title: 'Hospital Navigation',
    desc: 'We guide patients through the complex hospital system, from registration to specialist referrals and follow-ups.',
    tags: ['Patient Advocacy', '50+ Hospitals'],
    gradient: 'from-teal-600 to-cyan-500',
    accent: '#0891b2',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Assistance',
    desc: 'Helping patients access blood tests, X-rays, and advanced diagnostics at subsidised rates through partner labs.',
    tags: ['Subsidised Tests', 'Quick Reports'],
    gradient: 'from-primary to-primary-medium',
    accent: '#0a3d2b',
  },
  {
    icon: Baby,
    title: 'Women & Child Health',
    desc: 'Dedicated programs for maternal care, child nutrition, immunisation drives, and women wellness awareness camps.',
    tags: ['Maternal Care', 'Child Nutrition'],
    gradient: 'from-rose-500 to-pink-500',
    accent: '#e11d48',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    desc: 'Free counselling sessions, stress management workshops, and mental wellness resources for individuals and families.',
    tags: ['Free Counselling', 'Workshops'],
    gradient: 'from-violet-600 to-purple-500',
    accent: '#7c3aed',
  },
  {
    icon: Users,
    title: 'Health Awareness Camps',
    desc: 'Regular health camps in underprivileged colonies with free screenings for diabetes, BP, dental, and eye health.',
    tags: ['Free Screening', 'Monthly Camps'],
    gradient: 'from-orange-500 to-amber-500',
    accent: '#d97706',
  },
  {
    icon: FileText,
    title: 'Government Scheme Help',
    desc: 'Enrolling eligible families in Ayushman Bharat, Mahatma Jyotiba Phule and other government health schemes.',
    tags: ['Ayushman Bharat', 'MJPJAY'],
    gradient: 'from-blue-600 to-indigo-500',
    accent: '#2563eb',
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { icon: Icon, title, desc, tags, gradient, accent } = service

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2"
    >
      {/* Top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="font-display font-bold text-gray-900 text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${accent}15`, color: accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div
          className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
          style={{ color: accent }}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Hover gradient wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 pointer-events-none`}
      />
    </motion.div>
  )
}

export default function Services() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Healthcare support at{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              every step
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From your first consultation to navigating government schemes — we're with you at every stage of your healthcare journey.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">Need help choosing the right service?</p>
          <a
            href="tel:+9108149584719"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-medium text-white rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            <Stethoscope className="w-4 h-4" />
            Talk to Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
