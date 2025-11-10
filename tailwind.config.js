/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ahk-navy': '#0A192F',
        'ahk-navy-light': '#112240',
        'ahk-navy-dark': '#020617',
        'ahk-gold': '#D4AF37',
        'ahk-gold-light': '#F4E5B1',
        'ahk-electric': '#00D9FF',
        'ahk-electric-blue': '#00D9FF',
        'ahk-light-slate': '#CCD6F6',
        'ahk-purple': '#A78BFA',
        'ahk-green': '#4ADE80',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.95' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-electric': '0 0 20px rgba(0, 217, 255, 0.4)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
  safelist: [
    'aspect-video',
    'aspect-square',
    'rounded-xl',
    'shadow-glow',
    'shadow-glow-electric',
    'ring-4',
    'ring-ahk-gold',
  ],
}
