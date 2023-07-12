/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg' :'0 0 4px -1px #A020F0 ',
        'md' :'0 0 20px -1px #000 ',
      }
    },
  },
  plugins: [],
}

