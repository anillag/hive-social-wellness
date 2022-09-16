/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        bees: "bees 9s infinite"
      },
      keyframes: {
        bees: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          }, 
          "33%":{
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      }
    },
  },
  plugins: [],
}
