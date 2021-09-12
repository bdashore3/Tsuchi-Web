module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5',
        blurple: '#7289da',
        orange: {
          400: '#f6ad55'
        }
      },
      height: {
        '70v': '70vh',
        'inherit': 'inherit'
      },
      minWidth: {
        '7xl': '85rem',
        '20v': '20vw',
        '25v': '25vw',
        '30v': '30vw',
        '35v': '35vw',
        '40v': '40vw',
        '45v': '45vw',
        '50v': '50vw',
        '75v': '75vw'
      },
      maxWidth: {
        '7xl': '85rem',
        '25v': '25vw',
        '30v': '30vw',
        '35v': '35vw',
        '40v': '40vw',
        '45v': '45vw',
        '50v': '50vw',
        '75v': '75vw'
      },
      minHeight: {
        '20v': '20vh',
        '25v': '25vh',
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh',
        '45v': '45vh',
        '50v': '50vh',
        '75v': '75vh'
      },
      maxHeight: {
        '20v': '20vh',
        '25v': '25vh',
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh',
        '45v': '45vh',
        '50v': '50vh',
        '75v': '75vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
