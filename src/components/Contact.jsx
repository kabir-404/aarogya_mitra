import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MapPin, Phone, Mail, Instagram, Clock,
  Send, CheckCircle, AlertCircle, MessageCircle
} from 'lucide-react'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const contactCards = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['LIG Quarters, Rambag Colony,', 'Jattarodi Road, Medical Square,', 'Nagpur – 440003, Maharashtra'],
    bg: '#f0f7f0',
    iconColor: '#5DBB3F',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+91 08149584719'],
    href: 'tel:+9108149584719',
    bg: '#e8f5e9',
    iconColor: '#5DBB3F',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@aarogyamitrangp.co.in'],
    href: 'mailto:support@aarogyamitrangp.co.in',
    bg: '#e3f2fd',
    iconColor: '#1E88E5',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    lines: ['@aarogya_mitra_healthcare'],
    href: 'https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg==',
    bg: '#fce4ec',
    iconColor: '#e91e63',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Camp Days Only'],
    bg: '#fff8e1',
    iconColor: '#F57C00',
  },
]

function ContactCard({ card, index, inView }) {
  const { icon: Icon, title, lines, href, bg, iconColor } = card
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : index * 0.09 }}
      className="rounded-2xl p-4 flex items-start gap-3 border border-white hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: bg, cursor: href ? 'pointer' : 'default' }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconColor, opacity: 1 }}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
        {lines.map((line) => (
          <div key={line} className="text-gray-600 text-xs leading-snug">{line}</div>
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
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) errs.phone = 'Enter a valid phone number'
    if (!formData.message.trim()) errs.message = 'Message is required'
    else if (formData.message.trim().length < 10) errs.message = 'Message should be at least 10 characters'
    return errs
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
    <section id="contact" className="py-14 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.65 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0f7f0', color: '#5DBB3F', border: '1px solid #d4edcc' }}>
            Contact Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
            We&apos;re here to <span style={{ color: '#5DBB3F' }}>help you</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Reach out anytime. Our team is ready to guide you through your healthcare needs.
          </p>
        </motion.div>

        {/* Mobile: Quick action buttons */}
        <div className="md:hidden flex flex-col gap-3 mb-8">
          <a
            href="tel:+9108149584719"
            className="w-full flex items-center justify-center gap-2.5 py-4 text-white rounded-2xl font-bold text-base"
            style={{ backgroundColor: '#5DBB3F' }}
          >
            <Phone className="w-5 h-5" /> Call Now — Free
          </a>
          <a
            href="https://wa.me/919108149584719"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-4 text-white rounded-2xl font-bold text-base"
            style={{ backgroundColor: '#25d366' }}
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Info + Map */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: isMobile ? 0 : -25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.55 }}
              className="font-display font-semibold text-lg text-gray-900 mb-4"
            >
              Get in touch
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {contactCards.map((card, i) => (
                <ContactCard key={card.title} card={card} index={i} inView={inView} />
              ))}
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <iframe
                title="Aarogya Mitra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.099616!3d21.130990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzUxLjYiTiA3OcKwMDUnNTguNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: isMobile ? 0.3 : 0.7 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
          >
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-5">Send us a message</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center py-14 gap-4 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#f0f7f0' }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#5DBB3F' }} />
                  </motion.div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-gray-900 mb-2">Message Received!</h4>
                    <p className="text-gray-500 text-sm">Our team will reach out within 24 hours. Thank you for trusting Aarogya Mitra.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: '#f0f7f0', color: '#5DBB3F' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'e.g. Ramesh Sharma' },
                    { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: 'e.g. +91 9876543210' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 ${
                          errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20'
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">How can we help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your healthcare need or query..."
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 resize-none ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20'
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
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-white rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                    style={{ backgroundColor: '#5DBB3F' }}
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

                  <p className="text-center text-xs text-gray-400">
                    Or reach us on{' '}
                    <a href="https://wa.me/919108149584719" target="_blank" rel="noopener noreferrer"
                      className="font-medium" style={{ color: '#25d366' }}>
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
