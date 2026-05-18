import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Heart, MessageCircle } from 'lucide-react'

const footerLinks = {
  Services: [
    '24×7 FREE Teleconsultation',
    '40% Medicine Discount',
    'Diagnostic Discount',
    'Govt. Scheme Navigation',
    'Hospital Bill Reduction',
    'Expert Doctor Referrals',
  ],
  Support: [
    'Home Visit Consultations',
    '24/7 Emergency Ambulance',
    'Surgery Cost Negotiation',
    'Patient Advocacy',
    'Health Awareness Camps',
  ],
  Organization: [
    'About Us',
    'Our Mission',
    'Impact Stories',
    'Volunteer With Us',
    'Donate',
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-24 md:pb-0" style={{ backgroundColor: '#0d1117' }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* CTA Banner */}
      <div className="relative z-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
          >
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                Need healthcare help?
              </h3>
              <p className="text-white/50 text-base">
                Don&apos;t struggle alone. Our team is ready to help — free of charge.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+9108149584719"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#5DBB3F' }}
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#25d366' }}
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href="mailto:support@aarogyamitrangp.co.in"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm border transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/icon.png"
                alt="Aarogya Mitra"
                className="h-12 w-12 object-contain rounded-xl"
                loading="lazy"
              />
              <div>
                <div className="font-display font-bold text-lg leading-tight">
                  <span style={{ color: '#5DBB3F' }}>Aarogya</span>
                  {' '}
                  <span style={{ color: '#1E88E5' }}>Mitra</span>
                </div>
                <div className="text-gray-500 text-xs">Healthcare Services</div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Founded with a simple yet powerful mission — to make quality healthcare accessible and affordable for every individual, regardless of their background.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+9108149584719" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors group">
                <Phone className="w-4 h-4" style={{ color: '#5DBB3F' }} />
                +91 08149584719
              </a>
              <a href="mailto:support@aarogyamitrangp.co.in" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" style={{ color: '#1E88E5' }} />
                support@aarogyamitrangp.co.in
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F57C00' }} />
                <span>LIG Quarters, Rambag Colony, Jattarodi Road, Medical Square, Nagpur 440003</span>
              </div>
              <a
                href="https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" style={{ color: '#e91e63' }} />
                @aarogya_mitra_healthcare
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-white/40 hover:text-white text-sm transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform duration-200">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Aarogya Mitra Healthcare Foundation. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-rose-400 text-rose-400" /> for Nagpur
          </p>
        </div>
      </div>
    </footer>
  )
}
