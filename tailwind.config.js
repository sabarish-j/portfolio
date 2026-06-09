/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#f0e6ff',
          100: '#d4b8ff',
          200: '#b388ff',
          300: '#9c5cff',
          400: '#7c3aed',
          500: '#6d28d9',
          600: '#5b21b6',
          700: '#4c1d95',
          800: '#3b0f7a',
          900: '#2d0a5e',
          950: '#1a0533',
        },
        neon: {
          blue: '#00d4ff',
          indigo: '#4f46e5',
          gold: '#d4a843',
        },
        dark: {
          900: '#0a0a0f',
          800: '#0d0d15',
          700: '#111122',
          600: '#161630',
        },
      },
      fontFamily: {
        cinematic: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'grid-fade': 'grid-fade 4s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(0) scale(1)', opacity: '0.3' },
          '33%': { transform: 'translateX(30px) scale(1.1)', opacity: '0.6' },
          '66%': { transform: 'translateX(-20px) scale(0.9)', opacity: '0.4' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.08' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
