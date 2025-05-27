/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'friendship-pink': {
          100: '#fff9fa',
          200: '#ffd8e1',
          300: '#ffb3c1',
          400: '#ff8e9e',
          500: '#ff6b8b',
          600: '#f06292',
          700: '#e91e63',
        },
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};