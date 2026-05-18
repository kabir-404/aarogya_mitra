import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MapPin, Phone, Mail, Instagram, Clock,
  Send, CheckCircle, AlertCircle, Navigation
} from 'lucide-react'
import WhatsAppIcon from '../icons/WhatsAppIcon'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const fadeUp = {
  hidden:  { opacity: 0, y: isMobile ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['LIG Quarters, Rambag Colony,', 'Jattarodi Road, Medical Square,', 'Nagpur – 440003'],
    href: 'https://www.google.com/maps?q=21.130990,79.099616',
    bg: '#f0faf0',
    iconColor: '#5DBB3F',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 8149584719'],
    href: 'tel:+918149584719',
    bg: '#e8f5e9',
    iconColor: '#5DBB3F',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['support@aarogyamitrangp.co.in'],
    href: 'mailto:support@aarogyamitrangp.co.in',
    bg: '#eff6ff',
    iconColor: '#1E88E5',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    lines: ['@aarogya_mitra_healthcare'],
    href: 'https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg==',
    bg: '#fff0f5',
    iconColor: '#e91e63',
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Mon–Sat: 9 AM – 7 PM', 'Sunday: Camp Days Only'],
    bg: '#fff7ed',
    iconColor: '#F57C00',
  },
]

function ContactCard({ card, i, inView }) {
  const { icon: Icon, title, lines, href, bg, iconColor } = card
  const inner = (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: isMobile ? 0 : i * 0.07 }}
      className="rounded-2xl p-4 flex items-start gap-3 border border-white hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
      style={{ backgroundColor: bg, cursor: href ? 'pointer' : 'default', minHeight: '48px' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconColor }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-gray-600 text-xs leading-snug">{l}</div>
        ))}
      </div>
    </motion.div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  ) : inner
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 10) e.message = 'Message too short'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', message: '' })
      setErrors({})
    }, 1400)
  }

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: '' }))
  }

  return (
    <section id="contact" className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0faf0', color: '#5DBB3F', border: '1px solid #c8e6c9' }}
          >
            Contact Us
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-gray-900 mb-3">
            We&apos;re here to <span style={{ color: '#5DBB3F' }}>help you</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Reach out anytime. Our team is ready to guide you.
          </p>
        </motion.div>

        {/* Mobile: quick action buttons first */}
        <div className="md:hidden flex flex-col gap-3 mb-8">
          <p className="text-center font-semibold text-gray-900 text-base">Need help? Contact us directly</p>
          <a
            href="tel:+918149584719"
            className="w-full flex items-center justify-center gap-2.5 py-4 text-white rounded-2xl font-bold text-base"
            style={{ backgroundColor: '#5DBB3F', minHeight: '48px' }}
          >
            <Phone className="w-5 h-5" /> Call Now — Free
          </a>
          <a
            href="https://wa.me/918149584719"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 text-white rounded-2xl font-bold text-base"
            style={{ backgroundColor: '#25d366', minHeight: '48px' }}
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: info cards + map */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-4 hidden md:block">Get in touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {contactCards.map((card, i) => (
                <ContactCard key={card.title} card={card} i={i} inView={inView} />
              ))}
            </div>

            {/* Google Maps */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-200"
            >
              <iframe
                title="Aarogya Mitra Location"
                src="https://maps.google.com/maps?q=21.130990,79.099616&z=16&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Get Directions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=21.130990,79.099616"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:shadow-md"
                style={{ borderColor: '#5DBB3F', color: '#5DBB3F', minHeight: '48px' }}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100"
          >
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-5">Send us a message</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-14 gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#f0faf0' }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#5DBB3F' }} />
                  </motion.div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-gray-900 mb-1">Message Received!</h4>
                    <p className="text-gray-500 text-sm">We will reach out within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: '#f0faf0', color: '#5DBB3F' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Full Name *',    name: 'name',  type: 'text', placeholder: 'e.g. Ramesh Sharma' },
                    { label: 'Phone Number *', name: 'phone', type: 'tel',  placeholder: 'e.g. +91 9876543210' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 outline-none transition-all ${
                          errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-[#5DBB3F] focus:ring-2 focus:ring-[#5DBB3F]/20'
                        }`}
                      />
                      {errors[name] && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors[name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your healthcare need or query..."
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 outline-none transition-all resize-none ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-[#5DBB3F] focus:ring-2 focus:ring-[#5DBB3F]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-white rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-70 active:scale-95"
                    style={{ backgroundColor: '#5DBB3F', minHeight: '48px' }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
