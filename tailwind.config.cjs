module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'lino': 'rgb(211, 211, 211)',
        'spaceblue': 'rgb(70, 70, 70)'
      }
    },
    fontFamily: {
      'display': ['Roboto', 'sans-serif']
    },
    backgroundImage: {
      'linen': `url('/src/img/black-linen.png')`
    }
  },
  plugins: []
};