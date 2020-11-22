module.exports = {
  plugins: [
    require('@tailwindcss/ui'),
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'mint': {
          50: '#FCFFFD',
          100: '#FAFFFB',
          200: '#F2FFF6',
          300: '#EBFFF0',
          400: '#DBFFE4',
          500: '#CCFFD9',
          600: '#B8E6C3',
          700: '#7A9982',
          800: '#5C7362',
          900: '#3D4D41',
          },
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
