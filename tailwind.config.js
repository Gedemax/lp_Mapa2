/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc9c9',
          300: '#ffa3a3',
          400: '#ff6d6d',
          500: '#FF6B6B',
          600: '#f43f5e',
          700: '#e11d48',
          800: '#be123c',
          900: '#9f1239',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};