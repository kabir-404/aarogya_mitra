export default function CaringTeam({ className = '' }) {
  return (
    <div className={`illustration-float ${className}`}>
      <svg
        viewBox="0 0 280 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Doctor and patient caring for each other"
      >
        {/* Soft background */}
        <ellipse cx="140" cy="140" rx="130" ry="80" fill="#e8f5e9" />

        {/* ── Big heart above ── */}
        <path
          d="M118 55 C118 42 128 34 140 44 C152 34 162 42 162 55 C162 72 140 88 140 88 C140 88 118 72 118 55Z"
          fill="#F57C00"
        />
        {/* Heart shine */}
        <ellipse cx="133" cy="50" rx="5" ry="7" fill="white" opacity="0.35" transform="rotate(-20 133 50)" />

        {/* ── Doctor (left) ── */}
        {/* Body */}
        <rect x="30" y="120" width="76" height="88" rx="18" fill="#5DBB3F" />
        {/* White collar */}
        <rect x="50" y="120" width="36" height="36" rx="6" fill="white" />
        {/* Head */}
        <circle cx="68" cy="88" r="36" fill="#FFDBA4" />
        {/* Hair */}
        <path d="M32 83 Q34 54 68 50 Q102 54 104 83 Q100 60 68 57 Q36 60 32 83Z" fill="#4E342E" />
        {/* Eyes */}
        <circle cx="58" cy="86" r="4.5" fill="#2c2c2c" />
        <circle cx="78" cy="86" r="4.5" fill="#2c2c2c" />
        <circle cx="59.5" cy="84" r="1.5" fill="white" />
        <circle cx="79.5" cy="84" r="1.5" fill="white" />
        {/* Smile */}
        <path d="M58 100 Q68 112 78 100" stroke="#c0522f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Blush */}
        <ellipse cx="48" cy="95" rx="7" ry="5" fill="#FFAB91" opacity="0.4" />
        <ellipse cx="88" cy="95" rx="7" ry="5" fill="#FFAB91" opacity="0.4" />
        {/* Right arm reaching toward center */}
        <path d="M106 148 Q125 140 140 138" stroke="#5DBB3F" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Left arm */}
        <path d="M30 148 Q18 160 16 178" stroke="#5DBB3F" strokeWidth="16" strokeLinecap="round" fill="none" />
        {/* Stethoscope */}
        <path d="M64 158 Q64 178 76 185" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="77" cy="187" r="7" fill="#1E88E5" />

        {/* ── Patient (right) ── */}
        {/* Body */}
        <rect x="174" y="125" width="76" height="83" rx="18" fill="#bbdefb" />
        {/* Head */}
        <circle cx="212" cy="90" r="34" fill="#FFDBA4" />
        {/* Hair (shorter - patient) */}
        <path d="M178 87 Q180 62 212 58 Q244 62 246 87 Q242 66 212 63 Q182 66 178 87Z" fill="#6D4C41" />
        {/* Eyes */}
        <circle cx="202" cy="88" r="4.5" fill="#2c2c2c" />
        <circle cx="222" cy="88" r="4.5" fill="#2c2c2c" />
        <circle cx="203.5" cy="86" r="1.5" fill="white" />
        <circle cx="223.5" cy="86" r="1.5" fill="white" />
        {/* Smile */}
        <path d="M202 102 Q212 113 222 102" stroke="#c0522f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Blush */}
        <ellipse cx="192" cy="97" rx="7" ry="5" fill="#FFAB91" opacity="0.4" />
        <ellipse cx="232" cy="97" rx="7" ry="5" fill="#FFAB91" opacity="0.4" />
        {/* Left arm reaching toward center */}
        <path d="M174 150 Q158 143 144 140" stroke="#90caf9" strokeWidth="17" strokeLinecap="round" fill="none" />
        {/* Right arm */}
        <path d="M250 150 Q262 162 264 180" stroke="#90caf9" strokeWidth="15" strokeLinecap="round" fill="none" />

        {/* ── Clasped hands in center ── */}
        <circle cx="142" cy="140" r="16" fill="#FFDBA4" />
        <circle cx="142" cy="140" r="10" fill="#FFCC80" />

        {/* ── Small decorations ── */}
        <circle cx="20"  cy="95"  r="5"   fill="#5DBB3F" opacity="0.4" />
        <circle cx="258" cy="100" r="4"   fill="#1E88E5" opacity="0.4" />
        <circle cx="140" cy="200" r="6"   fill="#F57C00" opacity="0.3" />
        {/* Small cross */}
        <rect x="254" y="55" width="6" height="20" rx="3" fill="#5DBB3F" opacity="0.5" />
        <rect x="248" y="62" width="20" height="6" rx="3" fill="#5DBB3F" opacity="0.5" />
      </svg>
    </div>
  )
}
