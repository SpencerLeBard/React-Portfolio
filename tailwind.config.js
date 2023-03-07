/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'marble' : {
        DEFAULT: '#f5f7f7'
      } 
    },
  },
  plugins: [
    'postcss-import' ,
  ],
}
