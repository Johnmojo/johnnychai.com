/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        hero: "1500px"
      },
      animation: {
        fade: "fade 3s infinite",
        fastfade: "opacity 1s",
        elastic: "elastic 0.5s",
        slowElastic: "slowElastic 0.3s",
        push: "push 0.5s",
        jump: "jump 0.5s",
        logo: "logo 1s infinite ease",
        menu: "menu 1s ease"
      },
      keyframes: {
        menu: {
          "0%": {
            transform: "translateY(-30px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "100"
          }
        },
        logo: {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(15px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        jump: {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(5%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        fade: {
          "0%": { opacity: ".1" },
          "100%": { opacity: "1" }
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        elastic: {
          "0%": {
            transform: "translateY(10%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        slowElastic: {
          "0%": {
            transform: "translateY(1%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        push: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(15%, -15%)" }
        }
      },
      fontFamily: {
        sans: ["Inter"]
      }
    }
  },
  plugins: []
};
