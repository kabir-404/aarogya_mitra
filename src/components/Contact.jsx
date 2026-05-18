import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MapPin, Phone, Mail, Instagram, Clock,
  Send, CheckCircle, AlertCircle
} from 'lucide-react'

const contactCards = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['LIG Quarters, Rambag Colony,', 'Jattarodi Road, Medical Square,', 'Nagpur – 440003, Maharashtra'],
    color: 'bg-primary-light',
    iconColor: 'text-primary',
    iconBg: 'bg-primary',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+91 08149584719'],
    href: 'tel:+9108149584719',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-500',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['support@aarogyamitrangp.co.in'],
    href: 'mailto:support@aarogyamitrangp.co.in',
    color: 'bg-teal-50',
    iconColor: 'text-accent',
    iconBg: 'bg-accent',
  },
  {
    icon: Instagram,
    title: 'Follow on Instagram',
    lines: ['@aarogya_mitra_healthcare'],
    href: 'https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg==',
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Camp Days Only'],
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-500',
  },
]

function ContactCard({ card, index, inView }) {
  const { icon: Icon, title, lines, href, color, iconBg } = card
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${color} rounded-2xl p-5 flex items-start gap-4 border border-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${href ? 'cursor-pointer' : ''}`}
    >
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-sm mb-1">{title}</div>
        {lines.map((line) => (
          <div key={line} className="text-gray-600 text-sm leading-snug">{line}</div>
        ))}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return content
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', message: '' })
      setErrors({})
    }, 1400)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            We're here to{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              help you
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Reach out anytime. Our team is ready to guide you through your healthcare needs.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Info Cards + Map */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display font-semibold text-xl text-gray-900 mb-5"
            >
              Get in touch
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {contactCards.map((card, i) => (
                <ContactCard key={card.title} card={card} index={i} inView={inView} />
              ))}
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mt-4"
            >
              <iframe
                title="Aarogya Mitra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.099616!3d21.130990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzUxLjYiTiA3OcKwMDUnNTguNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="font-display font-semibold text-xl text-gray-900 mb-6">Send us a message</h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-gray-900 mb-2">Message Received!</h4>
                    <p className="text-gray-500 text-sm">Our team will reach out within 24 hours. Thank you for trusting Aarogya Mitra.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-primary-light text-primary rounded-full text-sm font-semibold hover:bg-green-100 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">How can we help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your healthcare need or query..."
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-primary-medium text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
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
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    Or reach us directly on{' '}
                    <a href="https://wa.me/919108149584719" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">
                      WhatsApp
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
