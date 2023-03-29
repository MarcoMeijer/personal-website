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
        }
      },
      animation: {
        bubble: 'bubble 1.3s linear infinite',
        "move-letter": 'move-letter 0.7s forwards',
      }
    },
  },
  plugins: [],
}

