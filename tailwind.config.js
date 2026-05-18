/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a3d2b',
        'primary-deep': '#051a12',
        'primary-medium': '#0d5c3a',
        'primary-light': '#f0fdf4',
        accent: '#0d9488',
        'accent-light': '#14b8a6',
        'accent-dark': '#0f766e',
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a3d2b 0%, #051a12 40%, #0d5c3a 70%, #0d9488 100%)',
        'card-gradient': 'linear-gradient(135deg, #0a3d2b, #0d9488)',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-1': 'float 4s ease-in-out infinite 0.8s',
        'float-2': 'float 4s ease-in-out infinite 1.6s',
        marquee: 'marquee 35s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
