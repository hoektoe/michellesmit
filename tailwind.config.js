/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.html', './src/**/*.vue'],
  // },
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Open Sans',
          ...defaultTheme.fontFamily.mono,
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
