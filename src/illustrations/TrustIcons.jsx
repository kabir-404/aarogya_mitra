export function HospitalIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64" role="img" aria-label="Hospital building">
      {/* Background */}
      <circle cx="32" cy="32" r="30" fill="#f0faf0" />
      {/* Building body */}
      <rect x="12" y="24" width="40" height="28" rx="4" fill="#5DBB3F" opacity="0.15" stroke="#5DBB3F" strokeWidth="1.5" />
      {/* Roof/top */}
      <rect x="16" y="18" width="32" height="8" rx="3" fill="#5DBB3F" opacity="0.25" stroke="#5DBB3F" strokeWidth="1.5" />
      {/* Door */}
      <rect x="26" y="38" width="12" height="14" rx="3" fill="white" stroke="#5DBB3F" strokeWidth="1.5" />
      {/* Windows */}
      <rect x="16" y="28" width="8" height="7" rx="2" fill="#1E88E5" opacity="0.4" />
      <rect x="40" y="28" width="8" height="7" rx="2" fill="#1E88E5" opacity="0.4" />
      {/* Medical cross */}
      <rect x="28.5" y="20" width="7" height="21" rx="3" fill="#5DBB3F" />
      <rect x="22" y="26.5" width="20" height="7" rx="3" fill="#5DBB3F" />
      <rect x="30" y="21.5" width="4" height="18" rx="2" fill="white" opacity="0.6" />
      <rect x="23.5" y="28" width="17" height="4" rx="2" fill="white" opacity="0.6" />
    </svg>
  )
}

export function ChatHeartIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64" role="img" aria-label="Compassionate chat">
      {/* Background */}
      <circle cx="32" cy="32" r="30" fill="#eff6ff" />
      {/* Speech bubble */}
      <path
        d="M10 18 C10 14 13 11 17 11 L47 11 C51 11 54 14 54 18 L54 36 C54 40 51 43 47 43 L36 43 L28 53 L28 43 L17 43 C13 43 10 40 10 36 Z"
        fill="#1E88E5"
        opacity="0.15"
        stroke="#1E88E5"
        strokeWidth="1.5"
      />
      {/* Heart inside bubble */}
      <path
        d="M23 26 C23 21 27 18 32 23 C37 18 41 21 41 26 C41 33 32 39 32 39 C32 39 23 33 23 26Z"
        fill="#F57C00"
      />
      {/* Heart shine */}
      <ellipse cx="28" cy="24" rx="3" ry="4" fill="white" opacity="0.3" transform="rotate(-20 28 24)" />
    </svg>
  )
}

export function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64" role="img" aria-label="Secure and private">
      {/* Background */}
      <circle cx="32" cy="32" r="30" fill="#f0faf0" />
      {/* Shield shape */}
      <path
        d="M32 10 L52 18 L52 34 C52 44 43 52 32 56 C21 52 12 44 12 34 L12 18 Z"
        fill="#5DBB3F"
        opacity="0.15"
        stroke="#5DBB3F"
        strokeWidth="1.5"
      />
      {/* Checkmark */}
      <path
        d="M20 33 L28 41 L44 23"
        stroke="#5DBB3F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lock icon hint at bottom */}
      <rect x="26" y="44" width="12" height="9" rx="3" fill="#5DBB3F" opacity="0.35" />
      <path d="M29 44 L29 41 Q29 37 32 37 Q35 37 35 41 L35 44" stroke="#5DBB3F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
