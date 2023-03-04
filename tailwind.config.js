/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'fo-pink': '#D651F5',
        'fo-magenta': '#B054FF',
        'fo-purple': '#7F58E8',
        'fo-blue': '#5455FF',
        'fo-aqua': '#517DF5',
      },
    },
  },
  plugins: [],
}
