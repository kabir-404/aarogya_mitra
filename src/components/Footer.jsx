import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react'

const FooterLogo = () => (
  <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="9" fill="url(#footerLogoGrad)" />
    <rect x="14.5" y="7" width="7" height="22" rx="3.5" fill="white" />
    <rect x="7" y="14.5" width="22" height="7" rx="3.5" fill="white" />
    <circle cx="18" cy="18" r="3.5" fill="#0d9488" />
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36">
        <stop stopColor="#0d5c3a" />
        <stop offset="1" stopColor="#0d9488" />
      </linearGradient>
    </defs>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const footerLinks = {
  Services: [
    'Free Consultation',
    'Affordable Medicines',
    'Hospital Navigation',
    'Diagnostic Assistance',
    'Women & Child Health',
    'Mental Health Support',
  ],
  Support: [
    'Health Awareness Camps',
    'Govt. Scheme Help',
    'Patient Advocacy',
    'Emergency Guidance',
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
    <footer className="bg-primary-deep relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* CTA Banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
          >
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                Need healthcare help?
              </h3>
              <p className="text-green-200/70 text-base">
                Don't struggle alone. Our team is ready to help — free of charge.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+9108149584719"
                className="flex items-center gap-2.5 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/40"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919108149584719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <a
                href="mailto:support@aarogyamitrangp.co.in"
                className="flex items-center gap-2.5 px-6 py-3 border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <FooterLogo />
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Aarogya Mitra</div>
                <div className="text-green-400 text-xs">Healthcare Foundation</div>
              </div>
            </div>

            <p className="text-green-200/60 text-sm leading-relaxed max-w-xs">
              Founded with a simple yet powerful mission — to make quality healthcare accessible and affordable for every individual, regardless of their background.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+9108149584719" className="flex items-center gap-2.5 text-green-200/70 hover:text-white text-sm transition-colors group">
                <Phone className="w-4 h-4 text-accent group-hover:text-accent" />
                +91 08149584719
              </a>
              <a href="mailto:support@aarogyamitrangp.co.in" className="flex items-center gap-2.5 text-green-200/70 hover:text-white text-sm transition-colors group">
                <Mail className="w-4 h-4 text-accent" />
                support@aarogyamitrangp.co.in
              </a>
              <div className="flex items-start gap-2.5 text-green-200/70 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>LIG Quarters, Rambag Colony, Jattarodi Road, Medical Square, Nagpur 440003</span>
              </div>
              <a
                href="https://www.instagram.com/aarogya_mitra_healthcare?igsh=MW95NjBkdnJwa2h0Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-green-200/70 hover:text-white text-sm transition-colors group"
              >
                <Instagram className="w-4 h-4 text-accent" />
                @aarogya_mitra_healthcare
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-green-200/55 hover:text-white text-sm transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">
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
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-200/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Aarogya Mitra Healthcare Foundation. All rights reserved.
          </p>
          <p className="text-green-200/40 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-rose-400 text-rose-400" /> for Nagpur
          </p>
        </div>
      </div>
    </footer>
  )
}
