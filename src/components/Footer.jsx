import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Heart, MessageCircle } from 'lucide-react'
import WhatsAppIcon from '../icons/WhatsAppIcon'

const footerLinks = {
  Services: [
    '24×7 FREE Teleconsultation',
    'Upto 40% Medicine Discount',
    '30-40% Diagnostic Discount',
    'Government Scheme Navigation',
    'Hospital Bill Reduction',
    'Expert Doctor Referrals',
  ],
  Support: [
    'Home Visit Consultations',
    '24/7 Emergency Ambulance',
    'Surgery Cost Negotiation',
    'Patient Advocacy',
  ],
  Organization: [
    'About Us',
    'Our Mission',
    'Volunteer With Us',
    'Donate',
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-20 md:pb-0" style={{ backgroundColor: '#1a2e1a' }}>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* CTA banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
          >
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                Need healthcare help?
              </h3>
              <p className="text-white/50 text-base">
                Our service is completely free. Reach out anytime.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+918149584719"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#5DBB3F', minHeight: '48px' }}
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/918149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#25d366', minHeight: '48px' }}
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href="mailto:support@aarogyamitrangp.co.in"
                className="flex items-center gap-2 px-5 py-3 text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-white/10 transition-all duration-200"
                style={{ minHeight: '48px' }}
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/icon.png"
                alt="Aarogya Mitra"
                className="h-12 w-12 object-contain"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="font-display font-bold text-lg leading-tight">
                  <span style={{ color: '#5DBB3F' }}>Aarogya</span>
                  {' '}
                  <span style={{ color: '#1E88E5' }}>Mitra</span>
                </div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">Healthcare Services</div>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Making quality healthcare accessible and affordable for every individual — Est. 2026.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+918149584719" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#5DBB3F' }} />
                +91 8149584719
              </a>
              <a href="mailto:support@aarogyamitrangp.co.in" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#1E88E5' }} />
                support@aarogyamitrangp.co.in
              </a>
              <a
                href="https://www.google.com/maps?q=21.130990,79.099616"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-white/50 hover:text-white text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#F57C00' }} />
                <span>LIG Quarters, Rambag Colony, Jattarodi Road, Medical Square, Nagpur 440003</span>
              </a>
              <a
                href="https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" style={{ color: '#e91e63' }} />
                @aarogya_mitra_healthcare
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-white/40 hover:text-white/80 text-sm transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-2">
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Aarogya Mitra Healthcare Foundation. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-white/50 text-xs">
            Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse mx-0.5" />
            for patients
          </p>
        </div>
      </div>
    </footer>
  )
}
