/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'ahk-navy': '#0A192F',
        'ahk-navy-dark': '#061023',
        'ahk-navy-light': '#112240',
        'ahk-gold': '#D4AF37',
        'ahk-gold-light': '#F4E5B1',
        'ahk-light': '#a8b2d1',
        'ahk-electric': '#00D9FF',
        'ahk-electric-dark': '#0099CC',
        'ahk-purple': '#A78BFA',
        'ahk-purple-dark': '#9333ea',
        'ahk-slate': '#cbd5e1',
        'ahk-slate-dark': '#94a3b8',
        'ahk-slate-light': '#a8b2d1',
        // EMMA-specific colors
        'emma-electric': '#08D9FF',
        'emma-violet': '#9A7CF9',
        'emma-cyan': '#39C8FF',
        'emma-blue': '#2B6BFF',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        // EMMA animations
        'emma-glow': 'emma-glow 3.6s ease-in-out infinite',
        'emma-pulse': 'emma-pulse 6s ease-in-out infinite',
        'emma-rotate-slow': 'emma-helix-rotate 24s linear infinite',
        'emma-wave': 'emma-helix-wave 6s linear infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2)' 
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // EMMA keyframes
        'emma-glow': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(212,175,55,0.0)' },
          '50%': { boxShadow: '0 0 28px rgba(212,175,55,0.35)' },
        },
        'emma-pulse': {
          '0%': { opacity: '0.75', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.015)' },
          '100%': { opacity: '0.75', transform: 'scale(1)' },
        },
        'emma-helix-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'emma-helix-wave': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '300' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37, #0A192F)',
        'gradient-electric': 'linear-gradient(135deg, #00D9FF, #0099CC)',
        'gradient-purple': 'linear-gradient(135deg, #A78BFA, #9333ea)',
        // EMMA living pulse background
        'emma-pulse': 'radial-gradient(1200px 600px at 10% 10%, rgba(8,217,255,0.08), transparent 60%), radial-gradient(900px 420px at 90% 20%, rgba(154,124,249,0.08), transparent 60%), radial-gradient(800px 500px at 50% 95%, rgba(212,175,55,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
}
