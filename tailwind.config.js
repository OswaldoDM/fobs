/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
    },    
    extend: {
      colors: {
        primary_green:'#bbf764',
        secondary_green:'#c1ee7d',
      }
    },
  },
  plugins: [],
}