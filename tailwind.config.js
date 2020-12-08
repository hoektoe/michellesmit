const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    plugins: [require('@tailwindcss/ui')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                serif: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'brand': {
                    
                    '100': '#FFFFFF',
                    '200': '#F8FBFB',
                    '300': '#D8E9E9',
                    '400': '#B7D7D7',
                    '500': '#96C5C5',
                    '600': '#75B3B3',
                    '700': '#579E9E',
                    '800': '#457D7D',
                    '900': '#335C5C',
                    DEFAULT: '#96C5C5',
                  },
                  'accent': {
                    
                    '100': '#A3C4DB',
                    '200': '#7EACCD',
                    '300': '#5A95BF',
                    '400': '#407BA5',
                    '500': '#326081',
                    '600': '#24445C',
                    '700': '#152937',
                    '800': '#070E12',
                    '900': '#000000',
                    DEFAULT: '#326081',
                  },
            }
        }
    }
};
