export default function MobileHeroIllustration({ className = '' }) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <svg
        viewBox="0 0 300 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[280px] mx-auto"
        role="img"
        aria-label="Friendly doctor illustration"
      >
        {/* Background soft circle */}
        <circle cx="150" cy="120" r="100" fill="#e8f5e9" opacity="0.7" />

        {/* ── Doctor body — floats up/down ── */}
        <g className="float-gentle" style={{ transformOrigin: '150px 140px' }}>
          {/* Coat */}
          <rect x="108" y="110" width="84" height="95" rx="18" fill="#5DBB3F" />
          {/* White collar */}
          <rect x="127" y="110" width="46" height="40" rx="6" fill="white" />
          {/* Blue tie */}
          <rect x="141" y="114" width="18" height="30" rx="5" fill="#1E88E5" />

          {/* Head */}
          <circle cx="150" cy="75" r="36" fill="#FFDBA4" />
          {/* Hair */}
          <path d="M114 70 Q116 40 150 37 Q184 40 186 70 Q182 52 150 50 Q118 52 114 70Z" fill="#4E342E" />
          {/* Ears */}
          <ellipse cx="114" cy="77" rx="6" ry="8" fill="#FFDBA4" />
          <ellipse cx="186" cy="77" rx="6" ry="8" fill="#FFDBA4" />
          {/* Eyes */}
          <ellipse cx="138" cy="74" rx="5" ry="6" fill="#2c2c2c" />
          <ellipse cx="162" cy="74" rx="5" ry="6" fill="#2c2c2c" />
          <circle cx="140" cy="72" r="1.8" fill="white" />
          <circle cx="164" cy="72" r="1.8" fill="white" />
          {/* Smile */}
          <path d="M138 90 Q150 100 162 90" stroke="#c0522f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <ellipse cx="124" cy="83" rx="8" ry="5" fill="#FFAB91" opacity="0.4" />
          <ellipse cx="176" cy="83" rx="8" ry="5" fill="#FFAB91" opacity="0.4" />

          {/* Left arm — raised waving */}
          <path d="M108 122 Q92 113 80 96 Q75 85 84 81 Q92 78 98 94 Q103 107 108 120Z" fill="#5DBB3F" />
          {/* Left hand */}
          <circle cx="82" cy="80" r="13" fill="#FFDBA4" />
          <rect x="77" y="67" width="5" height="11" rx="2.5" fill="#FFDBA4" />
          <rect x="83" y="65" width="5" height="13" rx="2.5" fill="#FFDBA4" />
          <rect x="89" y="67" width="5" height="11" rx="2.5" fill="#FFDBA4" />

          {/* Right arm — natural */}
          <path d="M192 124 Q206 134 208 154 Q210 164 202 164 Q195 164 194 152Z" fill="#5DBB3F" />

          {/* Stethoscope */}
          <path d="M143 158 Q143 178 160 186" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="162" cy="189" r="8" fill="#1E88E5" />
          <circle cx="162" cy="189" r="4" fill="#0d47a1" />

          {/* ID badge */}
          <rect x="120" y="168" width="36" height="26" rx="5" fill="white" />
          <rect x="123" y="172" width="30" height="4" rx="2" fill="#5DBB3F" />
          <rect x="123" y="179" width="20" height="2.5" rx="1" fill="#e0e0e0" />
          <rect x="123" y="184" width="25" height="2.5" rx="1" fill="#e0e0e0" />
        </g>

        {/* ── Floating heart — pulse ── */}
        <g className="pulse-heart" style={{ transformOrigin: '232px 65px' }}>
          <path
            d="M220 62 C220 55 226 51 232 57 C238 51 244 55 244 62 C244 71 232 80 232 80 C232 80 220 71 220 62Z"
            fill="#F57C00"
          />
          {/* Plus sign in heart */}
          <line x1="232" y1="60" x2="232" y2="70" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="227" y1="65" x2="237" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ── Orbiting cross ── */}
        <g className="orbit-cross" style={{ transformOrigin: '150px 120px' }}>
          <rect x="58" y="116" width="7" height="22" rx="3.5" fill="#5DBB3F" opacity="0.75" />
          <rect x="51" y="123" width="22" height="7" rx="3.5" fill="#5DBB3F" opacity="0.75" />
        </g>

        {/* Sparkle dots */}
        <circle cx="240" cy="110" r="3" fill="#F57C00" opacity="0.5" />
        <circle cx="52" cy="155" r="3" fill="#1E88E5" opacity="0.4" />
        <circle cx="260" cy="150" r="2.5" fill="#5DBB3F" opacity="0.4" />
        <circle cx="40" cy="90" r="2" fill="#F57C00" opacity="0.35" />
      </svg>
    </div>
  )
}
