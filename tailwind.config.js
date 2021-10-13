module.exports = {
  purge: [
    './index.html',
    './main.js'
  ],
  darkMode: 'media' , // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xl: '50vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui'), 
  ],
}
