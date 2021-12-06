module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        display: ['Roboto Mono', 'Menlo', 'monospace'],
        body: ['Roboto Mono', 'Menlo', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
