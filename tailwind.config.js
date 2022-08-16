/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      primary: {
        100: "#e2dfff",
        200: "#c5beff",
        300: "#a99eff",
        400: "#8c7dff",
        500: "#6f5dff",
        600: "#594acc",
        700: "#433899",
        800: "#2c2566",
        900: "#161333",
      },
      green: colors.green,
      //CUSTOM COLORS
      //https://www.tailwindshades.com/
      //or crtl g + ctrl k on hexa value (#007ce6)

      dark: {
        100: "#d0d0d0",
        200: "#a1a1a1",
        300: "#717171",
        400: "#424242",
        500: "#131313",
        600: "#0f0f0f",
        700: "#0b0b0b",
        800: "#080808",
        900: "#040404",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
