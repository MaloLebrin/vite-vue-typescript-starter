module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
