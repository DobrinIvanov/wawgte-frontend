/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './index.html',
     './src/**/*.{js,ts,jsx,tsx}',
    ],
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ['odd', 'even']
  //   },
  // },
  plugins: [],
  corePlugins: {
    // preflight: false;
  }
}