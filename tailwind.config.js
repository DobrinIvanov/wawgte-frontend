/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": {
          2: "#FEAA00",
        },
        "green": {
          1: "#D9EDBF",
          2: "#C2C698",
          3: "F788402",
        },
        "white": {
          1: "#F7F4EF",
          2: "#F5EEE3",
        },
        "black": {
          1: "#4C393B",
          2: "#342628",
          3: "#C2C698"
        }
      },      
    },
  },
  plugins: [
  ],
}