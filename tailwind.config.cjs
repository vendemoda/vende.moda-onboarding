/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CE92",
        secondary: "#9841E2",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
