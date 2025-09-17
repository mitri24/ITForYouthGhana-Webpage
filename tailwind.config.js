/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NGO brand colors
        primary: {
          DEFAULT: '#1b65b2',
          50: '#e8f2ff',
          100: '#d1e6ff',
          200: '#a3ccff',
          300: '#75b3ff',
          400: '#4799ff',
          500: '#1b65b2',
          600: '#195aa5',
          700: '#164f99',
          800: '#13448c',
          900: '#103a80',
        },
        secondary: {
          DEFAULT: '#8fb2d6',
          50: '#f5f8fc',
          100: '#ebf1f9',
          200: '#d7e3f3',
          300: '#c3d5ed',
          400: '#afc7e7',
          500: '#8fb2d6',
          600: '#7da5d0',
          700: '#6b98ca',
          800: '#598bc4',
          900: '#477ebe',
        },
        accent: {
          DEFAULT: '#d02355',
          50: '#fef2f6',
          100: '#fde5ed',
          200: '#fbcbdb',
          300: '#f9b1c9',
          400: '#f797b7',
          500: '#d02355',
          600: '#be204e',
          700: '#ac1d47',
          800: '#9a1a40',
          900: '#881739',
        },
        blue: {
          DEFAULT: '#195aa5',
          50: '#e8f1ff',
          100: '#d1e3ff',
          200: '#a3c7ff',
          300: '#75abff',
          400: '#478fff',
          500: '#195aa5',
          600: '#175196',
          700: '#154887',
          800: '#133f78',
          900: '#113669',
        },
        // Neutral colors
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(135deg, rgba(27, 101, 178, 0.6) 0%, rgba(27, 101, 178, 0.4) 100%)',
        'paper-texture': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f5f5f5" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3C/g%3E%3C/svg%3E")',
      },
      boxShadow: {
        'blue-glow': '0 0 20px rgba(27, 101, 178, 0.5)',
        'accent-glow': '0 0 20px rgba(208, 35, 85, 0.5)',
        'glow': '0 0 30px rgba(27, 101, 178, 0.3)',
        'float': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(27, 101, 178, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(27, 101, 178, 0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'organic': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'organic-2': '40% 60% 70% 30% / 40% 70% 30% 60%',
        'organic-3': '30% 70% 40% 60% / 70% 30% 60% 40%',
      },
    },
  },
  plugins: [],
}