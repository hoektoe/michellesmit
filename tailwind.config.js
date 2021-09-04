/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          100: "#BF7F7F",
          200: "#B26666",
          300: "#A64C4C",
          400: "#993333",
          500: "#8C1919",
          600: "#800000",
          700: "#730000",
          800: "#660000",
          900: "#590000",
          DEFAULT: "#8C1919",
        },
        accent: colors.trueGray,
      },
    },
  },
  variants: {},
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
