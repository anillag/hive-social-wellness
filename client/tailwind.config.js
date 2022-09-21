/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        bees: "bees 15s infinite",
        bee1: "bee1 20s infinite",
        bee2: "bee2 40s infinite"
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
        },

        bee1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          }, 
          "33%":{
            transform: "translate(20px, -90px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-10px, 30px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          },
        }, 

        bee2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          }, 
          "20%":{
            transform: "translate(30px, -100px) scale(1.5)"
          },
          "76%":{
            transform: "translate(-20px, 20px) scale(1.0)"
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
