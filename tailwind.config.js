module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './main.js'
  ],

  darkMode: 'class', // or 'media' or 'class'


  theme: {
 
    extend: {
      height: {
        xl: '50vh'
      },
      screen: {
        xs: '420px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui'), 
  ],
}
