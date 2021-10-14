module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './main.js'
  ],
  darkMode: false, // or 'media' or 'class'
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
