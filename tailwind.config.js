/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": "11rem",
      },
      keyframes: {
        bubble: {
          '0%, 100%': { transform: "rotate(0deg) scale(1)" },
          '25%': { transform: "rotate(3deg) scale(1.1)" },
          '50%': { transform: "rotate(0deg) scale(1)" },
          '75%': { transform: "rotate(-3deg) scale(1.1)" },
        },
        "move-letter": {
          '0%': {
            transform: "translateY(100px)",
            opacity: 0,
            color: "#ff99ff",
          },
          '60%': {
            transform: "translateY(-30px)",
            opacity: 1,
            color: "#ffbbff",
          },
          '100%': {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "enter-up": {
          "0%": {transform: "translateY(70px)", opacity: 0},
          '60%': {
            transform: "translateY(-10px)",
            opacity: 0.7,
          },
          '100%': {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        "page-transition": {
          "0%": {width: "2000px", height: "2000px"},
          "100%": {width: 0, height: 0}
        }
      },
      animation: {
        bubble: 'bubble 1.3s linear infinite',
        "move-letter": 'move-letter 0.7s forwards',
        "enter-up": 'enter-up 0.7s forwards',
        "page-transition": 'page-transition 0.7s forwards',
      }
    },
  },
  plugins: [],
}

