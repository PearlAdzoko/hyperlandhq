/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./types.ts",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F5F2ED',
          accent: '#EAE6DF',
          primary: '#148B3B',
        },
        primary: {
          DEFAULT: '#148B3B',
          hover: '#0E632A',
          light: '#148B3B20',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-blur': 'fadeInBlur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
        'scale-in': 'scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBlur: {
          '0%': { opacity: '0', filter: 'blur(10px)', transform: 'scale(0.98)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
