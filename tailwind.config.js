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
        }
      },
      animation: {
        bubble: 'bubble 1.3s linear infinite',
      }
    },
  },
  plugins: [],
}

