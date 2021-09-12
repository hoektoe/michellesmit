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
          50: "#FFFCFA",
          100: "#FCEBE3",
          200: "#F8CBB4",
          300: "#F4AB85",
          400: "#EF8A57",
          500: "#EB6A28",
          600: "#CD5213",
          700: "#9E3F0F",
          800: "#702D0A",
          900: "#411A06",
          DEFAULT: "#EB6A28",
        },
        accent: colors.gray,
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
