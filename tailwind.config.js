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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
