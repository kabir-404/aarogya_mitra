export default function DoctorHero({ className = '' }) {
  return (
    <div className={`illustration-float ${className}`}>
      <svg
        viewBox="0 0 280 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Friendly cartoon doctor waving"
      >
        {/* Soft background circle */}
        <circle cx="155" cy="178" r="126" fill="#e8f5e9" />

        {/* Shadow */}
        <ellipse cx="155" cy="308" rx="62" ry="9" fill="rgba(0,0,0,0.07)" />

        {/* ── Body – green doctor coat ── */}
        <rect x="93" y="152" width="124" height="148" rx="24" fill="#5DBB3F" />

        {/* White shirt / collar */}
        <rect x="120" y="152" width="70" height="58" rx="8" fill="white" />

        {/* Blue lanyard / tie */}
        <rect x="137" y="157" width="26" height="42" rx="6" fill="#1E88E5" />

        {/* ── Head ── */}
        <circle cx="155" cy="103" r="50" fill="#FFDBA4" />

        {/* Hair */}
        <path
          d="M105 98 Q108 52 155 48 Q202 52 205 98 Q200 66 155 63 Q110 66 105 98Z"
          fill="#4E342E"
        />

        {/* Ears */}
        <ellipse cx="105" cy="106" rx="8" ry="11" fill="#FFDBA4" />
        <ellipse cx="205" cy="106" rx="8" ry="11" fill="#FFDBA4" />

        {/* Eyes */}
        <ellipse cx="137" cy="102" rx="7" ry="8" fill="#2c2c2c" />
        <ellipse cx="173" cy="102" rx="7" ry="8" fill="#2c2c2c" />
        <circle cx="139" cy="99" r="2.5" fill="white" />
        <circle cx="175" cy="99" r="2.5" fill="white" />

        {/* Eyebrows */}
        <path d="M129 90 Q137 86 145 90" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M165 90 Q173 86 181 90" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M138 123 Q155 139 172 123" stroke="#c0522f" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Blush */}
        <ellipse cx="120" cy="116" rx="10" ry="7" fill="#FFAB91" opacity="0.45" />
        <ellipse cx="190" cy="116" rx="10" ry="7" fill="#FFAB91" opacity="0.45" />

        {/* ── Left arm – raised and waving ── */}
        <path
          d="M93 168 Q72 157 58 132 Q52 116 63 111 Q74 107 82 127 Q88 145 94 162Z"
          fill="#5DBB3F"
        />
        {/* Left hand */}
        <circle cx="60" cy="110" r="18" fill="#FFDBA4" />
        {/* Fingers */}
        <rect x="54" y="91"  width="7" height="16" rx="3.5" fill="#FFDBA4" />
        <rect x="63" y="88"  width="7" height="18" rx="3.5" fill="#FFDBA4" />
        <rect x="72" y="91"  width="7" height="16" rx="3.5" fill="#FFDBA4" />

        {/* ── Right arm – natural ── */}
        <path
          d="M217 170 Q234 183 238 210 Q240 224 228 225 Q218 225 216 210Z"
          fill="#5DBB3F"
        />

        {/* ── Stethoscope ── */}
        <path
          d="M144 215 Q144 248 168 260"
          stroke="#2c2c2c"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="170" cy="263" r="11" fill="#1E88E5" />
        <circle cx="170" cy="263" r="6"  fill="#0d47a1" />

        {/* ── ID badge ── */}
        <rect x="115" y="240" width="50" height="36" rx="7" fill="white" />
        <rect x="119" y="245" width="42" height="5" rx="2" fill="#5DBB3F" />
        <rect x="119" y="254" width="28" height="3" rx="1" fill="#e0e0e0" />
        <rect x="119" y="261" width="35" height="3" rx="1" fill="#e0e0e0" />

        {/* ── Floating decoration: medical cross ── */}
        <rect x="222" y="60" width="10" height="32" rx="5" fill="#5DBB3F" opacity="0.7" />
        <rect x="210" y="72" width="32" height="10" rx="5" fill="#5DBB3F" opacity="0.7" />

        {/* Floating: heart top-left */}
        <path
          d="M36 68 C36 60 43 55 50 62 C57 55 64 60 64 68 C64 78 50 88 50 88 C50 88 36 78 36 68Z"
          fill="#F57C00"
        />

        {/* Floating: pill bottom-right */}
        <rect x="228" y="225" width="38" height="18" rx="9" fill="#1E88E5" opacity="0.75" />
        <line x1="247" y1="225" x2="247" y2="243" stroke="white" strokeWidth="1.5" opacity="0.55" />

        {/* Sparkle dots */}
        <circle cx="248" cy="145" r="4"   fill="#F57C00" opacity="0.55" />
        <circle cx="28"  cy="200" r="3.5" fill="#5DBB3F" opacity="0.5"  />
        <circle cx="20"  cy="240" r="2.5" fill="#1E88E5" opacity="0.45" />
        <circle cx="260" cy="178" r="3"   fill="#5DBB3F" opacity="0.35" />
      </svg>
    </div>
  )
}
