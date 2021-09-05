/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        accent: {
          50: "#EEF6F6",
          100: "#DDEEED",
          200: "#BBDDDC",
          300: "#9ACBCA",
          400: "#78BAB9",
          500: "#56A9A7",
          600: "#458786",
          700: "#346564",
          800: "#224443",
          900: "#112221",
          DEFAULT: "#56A9A7",
        },
        brand: {
          50: "#FDF0CE",
          100: "#FDE9B5",
          200: "#FBD984",
          300: "#FACA52",
          400: "#F8BB21",
          500: "#DFA207",
          600: "#AE7E05",
          700: "#7C5A04",
          800: "#4B3602",
          900: "#191201",
          DEFAULT: "#DFA207",
        },
      },
    },
  },
  variants: {
    opacity: ["disabled"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.js",
      "layouts/**/*.js",
      "pages/**/*.js",
      "next.config.js",
    ],
  },
};
