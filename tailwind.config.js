/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ed',
          100: '#f9edca',
          200: '#f2d98f',
          300: '#e8c055',
          400: '#e0aa2a',
          DEFAULT: '#c9a84c',
          600: '#b08c3a',
          700: '#8e6e2d',
          800: '#6b5220',
          900: '#4a3917',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#111111',
          200: '#1a1a1a',
          300: '#222222',
          400: '#2e2e2e',
          500: '#3d3d3d',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          100: '#fdfaf5',
          200: '#f9f4ea',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e8c055 50%, #c9a84c 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.7) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      screens: {
        xs: '475px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        88: '22rem',
        100: '25rem',
        112: '28rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
};