function IconWrapper({ bg, children }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <circle cx="24" cy="24" r="24" fill={bg} />
      {children}
    </svg>
  )
}

export function TeleconsultationIcon() {
  return (
    <IconWrapper bg="#e8f5e9">
      {/* Phone handset */}
      <path d="M17 14h-3a1 1 0 00-1 1 19 19 0 0019 19 1 1 0 001-1v-3a1 1 0 00-1-1 12.4 12.4 0 01-3.9-.62 1 1 0 00-1.02.24l-2.4 2.4a15.15 15.15 0 01-6.71-6.71l2.4-2.4a1 1 0 00.24-1.02A12.4 12.4 0 0118 15a1 1 0 00-1-1z" fill="#5DBB3F" />
      {/* Wifi waves */}
      <path d="M28 12 Q35 12 35 19" stroke="#5DBB3F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M28 15.5 Q32 15.5 32 19" stroke="#5DBB3F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M28 19 Q29.5 19 29.5 19" stroke="#5DBB3F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Small doctor head */}
      <circle cx="37" cy="12" r="5" fill="#FFDBA4" />
      <path d="M32 11 Q32.5 8 37 7.5 Q41.5 8 42 11" fill="#4E342E" />
    </IconWrapper>
  )
}

export function MedicineDiscountIcon() {
  return (
    <IconWrapper bg="#e3f2fd">
      {/* Pill capsule */}
      <rect x="12" y="20" width="24" height="12" rx="6" fill="#bbdefb" />
      <path d="M24 20 L24 32" stroke="white" strokeWidth="1.5" />
      <rect x="12" y="20" width="12" height="12" rx="6" fill="#1E88E5" />
      {/* Percent badge */}
      <circle cx="35" cy="14" r="7" fill="#1E88E5" />
      <text x="35" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">%</text>
    </IconWrapper>
  )
}

export function DiagnosticDiscountIcon() {
  return (
    <IconWrapper bg="#fff3e0">
      {/* MRI tube */}
      <rect x="10" y="18" width="28" height="14" rx="7" stroke="#F57C00" strokeWidth="2" fill="none" />
      {/* Person inside */}
      <circle cx="24" cy="22" r="2.5" fill="#F57C00" />
      <rect x="21" y="25" width="6" height="5" rx="1.5" fill="#F57C00" />
      {/* Scan lines */}
      <line x1="10" y1="22" x2="38" y2="22" stroke="#F57C00" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      <line x1="10" y1="26" x2="38" y2="26" stroke="#F57C00" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      {/* Discount arrow */}
      <path d="M30 11 L36 11 L36 17" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" />
      <path d="M29 16 L36 9" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" />
    </IconWrapper>
  )
}

export function GovtSchemeIcon() {
  return (
    <IconWrapper bg="#e8f5e9">
      {/* Building */}
      <rect x="14" y="22" width="20" height="14" rx="1" fill="#5DBB3F" />
      <rect x="14" y="22" width="20" height="3" fill="#4CAF50" />
      {/* Columns */}
      <rect x="17" y="25" width="3" height="11" rx="1" fill="white" opacity="0.5" />
      <rect x="23" y="25" width="3" height="11" rx="1" fill="white" opacity="0.5" />
      <rect x="29" y="25" width="3" height="11" rx="1" fill="white" opacity="0.5" />
      {/* Flag */}
      <line x1="24" y1="10" x2="24" y2="22" stroke="#5DBB3F" strokeWidth="1.5" />
      <rect x="24" y="10" width="8" height="5" rx="1" fill="#F57C00" />
      {/* Document + checkmark */}
      <rect x="30" y="32" width="10" height="10" rx="2" fill="white" />
      <path d="M32 37 L34 39 L38 35" stroke="#5DBB3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </IconWrapper>
  )
}

export function HospitalBillIcon() {
  return (
    <IconWrapper bg="#e3f2fd">
      {/* Receipt */}
      <rect x="14" y="11" width="20" height="26" rx="2" fill="white" stroke="#1E88E5" strokeWidth="1.5" />
      <line x1="18" y1="17" x2="30" y2="17" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="21" x2="28" y2="21" stroke="#bbdefb" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="25" x2="30" y2="25" stroke="#bbdefb" strokeWidth="1.5" strokeLinecap="round" />
      {/* Rupee symbol */}
      <text x="24" y="34" textAnchor="middle" fill="#1E88E5" fontSize="7" fontWeight="bold">₹</text>
      {/* Down arrow */}
      <circle cx="36" cy="14" r="6" fill="#1E88E5" />
      <path d="M36 10 L36 18 M33 15 L36 18 L39 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </IconWrapper>
  )
}

export function DoctorReferralIcon() {
  return (
    <IconWrapper bg="#fff3e0">
      {/* Doctor silhouette */}
      <circle cx="22" cy="17" r="6" fill="#F57C00" />
      <path d="M13 34 Q13 26 22 26 Q31 26 31 34" fill="#F57C00" />
      {/* Stethoscope */}
      <path d="M19 24 Q19 29 23 31" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="32" r="2.5" fill="#F57C00" />
      {/* Location pin */}
      <circle cx="36" cy="16" r="5" fill="#F57C00" />
      <path d="M36 13 L36 21 M33.5 16 L36 21 L38.5 16" fill="#F57C00" />
      <circle cx="36" cy="14" r="7" stroke="#F57C00" strokeWidth="2" fill="none" />
      <circle cx="36" cy="13" r="2" fill="white" />
      <path d="M29 20 Q36 30 43 20" stroke="#F57C00" strokeWidth="2" fill="#F57C00" opacity="0.6" strokeLinecap="round" />
    </IconWrapper>
  )
}

export function HomeVisitIcon() {
  return (
    <IconWrapper bg="#e8f5e9">
      {/* House */}
      <path d="M12 24 L24 13 L36 24 L36 36 L12 36 Z" fill="#5DBB3F" />
      <rect x="19" y="28" width="10" height="8" rx="1" fill="white" opacity="0.8" />
      {/* Medical cross on door */}
      <rect x="23" y="29" width="2" height="6" rx="1" fill="#5DBB3F" />
      <rect x="21" y="31" width="6" height="2" rx="1" fill="#5DBB3F" />
      {/* IV drip bag */}
      <rect x="31" y="13" width="8" height="10" rx="3" fill="white" stroke="#5DBB3F" strokeWidth="1.5" />
      <line x1="35" y1="23" x2="35" y2="28" stroke="#5DBB3F" strokeWidth="1.5" />
      <circle cx="35" cy="29" r="1.5" fill="#5DBB3F" />
    </IconWrapper>
  )
}

export function AmbulanceIcon() {
  return (
    <IconWrapper bg="#e3f2fd">
      {/* Ambulance body */}
      <rect x="8" y="20" width="28" height="14" rx="3" fill="#1E88E5" />
      <rect x="30" y="22" width="8" height="10" rx="2" fill="white" />
      {/* Cross on body */}
      <rect x="14" y="24" width="3" height="9" rx="1.5" fill="white" />
      <rect x="11" y="27" width="9" height="3" rx="1.5" fill="white" />
      {/* Wheels */}
      <circle cx="15" cy="34" r="4" fill="#2c2c2c" />
      <circle cx="15" cy="34" r="2" fill="#666" />
      <circle cx="31" cy="34" r="4" fill="#2c2c2c" />
      <circle cx="31" cy="34" r="2" fill="#666" />
      {/* Speed lines */}
      <line x1="8" y1="24" x2="4" y2="24" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="8" y1="27" x2="3" y2="27" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="8" y1="30" x2="5" y2="30" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Siren light */}
      <rect x="12" y="17" width="8" height="4" rx="2" fill="#ef5350" />
    </IconWrapper>
  )
}

export function SurgeryNegotiationIcon() {
  return (
    <IconWrapper bg="#fff3e0">
      {/* Two hands shaking */}
      <path d="M10 28 Q10 24 15 24 L20 24 L22 22 Q24 20 26 22 L28 24 L33 24 Q38 24 38 28 L38 32 Q38 34 36 34 L12 34 Q10 34 10 32 Z" fill="#F57C00" />
      {/* Left fingers */}
      <path d="M14 24 L14 20 Q14 18 16 18 Q18 18 18 20 L18 24" stroke="#F57C00" strokeWidth="2" fill="none" />
      <path d="M18 24 L18 19 Q18 17 20 17 Q22 17 22 19 L22 24" stroke="#F57C00" strokeWidth="2" fill="none" />
      {/* Right fingers */}
      <path d="M26 24 L26 19 Q26 17 28 17 Q30 17 30 19 L30 24" stroke="#F57C00" strokeWidth="2" fill="none" />
      <path d="M30 24 L30 20 Q30 18 32 18 Q34 18 34 20 L34 24" stroke="#F57C00" strokeWidth="2" fill="none" />
      {/* Rupee coin above */}
      <circle cx="24" cy="14" r="6" fill="#F57C00" />
      <text x="24" y="18" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">₹</text>
    </IconWrapper>
  )
}
