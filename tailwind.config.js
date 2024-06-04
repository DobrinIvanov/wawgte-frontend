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
          1: "#ED7D31",
        },
        "green": {
          1: "#D9EDBF",
          2: "#C2C698",
          3: "F788402",
        },
        "white": {
          1: "#F6F1EE",
          2: "#F5EEE3",
        },
        "black": {
          1: "#4F4A45",
          2: "#6C5F5B",
          3: "#C2C698"
        }
      },      
    },
  },
  plugins: [
  ],
}