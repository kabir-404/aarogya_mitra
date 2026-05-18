/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-[#5DBB3F]', 'border-[#1E88E5]', 'border-[#F57C00]',
    'text-[#5DBB3F]', 'text-[#1E88E5]', 'text-[#F57C00]',
    'bg-[#5DBB3F]', 'bg-[#1E88E5]', 'bg-[#F57C00]',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#5DBB3F',
          blue: '#1E88E5',
          orange: '#F57C00',
          darkbg: '#0d1117',
          darkcard: '#161b22',
          lightbg: '#f0f7f0',
        },
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-1': 'float 4s ease-in-out 0.8s infinite',
        'float-2': 'float 4s ease-in-out 1.6s infinite',
        marquee: 'marquee 35s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
