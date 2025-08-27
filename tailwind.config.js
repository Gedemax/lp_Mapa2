/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9d0ff',
          300: '#bea8ff',
          400: '#9f7aff',
          500: '#8B4A9B',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        coral: {
          50: '#fef7f0',
          100: '#fdeee1',
          200: '#fad9c2',
          300: '#f7c199',
          400: '#f3a06e',
          500: '#ef7f44',
          600: '#e06530',
          700: '#ba4e26',
          800: '#944025',
          900: '#773622',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-horizontal': 'float-horizontal 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-horizontal': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(8px)' },
        }
      },
    },
  },
  plugins: [],
};