/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7e6',
          100: '#ffe8b3',
          200: '#ffd680',
          300: '#ffc44d',
          400: '#ffb400',
          500: '#e09e00',
          600: '#cc8f00',
          700: '#b37f00',
          800: '#996f00',
          900: '#805f00',
        },
        secondary: {
          50: '#e6f7f5',
          100: '#b3e8e2',
          200: '#80d9cf',
          300: '#4dcabc',
          400: '#1abbad',
          500: '#009688',
          600: '#008577',
          700: '#007466',
          800: '#006355',
          900: '#005244',
        },
        navy: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b2ff',
          300: '#4d93ff',
          400: '#1a74ff',
          500: '#0b3d91',
          600: '#0a367f',
          700: '#092f6d',
          800: '#08285b',
          900: '#072149',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#555555',
        },
        border: '#E0E0E0',
      },
      fontFamily: {
        'sans': ['Poppins', 'Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
