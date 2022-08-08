/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      width: {
        hero: "1500px"
      },
      animation: {
        fade: "fading 3s infinite"
      },
      keyframes: {
        fading: {
          "0%": { opacity: ".1" },
          "100%": { opacity: "1" }
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
