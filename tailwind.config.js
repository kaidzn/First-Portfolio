/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl': '1538px',
    },
    colors: {
      'pageyellow': '#FFE51C',
      'pageblue': '#060725',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans'],
    }
  },
  plugins: [],
}

