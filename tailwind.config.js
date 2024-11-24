/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa': ['Nexa'],
        'nexa-light': ['Nexa-Light'],
      },
      backgroundImage: {
        'produk-bg' : "url(./src/assets/bg_1.png)"
      }
    },
  },
  plugins: [],
}