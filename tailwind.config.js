/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#5DBB3F',
          blue: '#1E88E5',
          orange: '#F57C00',
          lightgreen: '#f0faf0',
          lightblue: '#eff6ff',
          darktext: '#1a2e1a',
        },
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        illustrationFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.55)', opacity: '0' },
        },
      },
      animation: {
        'illustration-float': 'illustrationFloat 4s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
