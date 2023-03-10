/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"Manrope"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        primary: '#da373d',
        ttred: '#FF0000',
        ttorange: '#FF8938',
      }
    },
  },
  plugins: [],
}
