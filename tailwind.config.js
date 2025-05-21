/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E4756",
        secondary: "#9FA2B2",
        tertiary: "#ede7ea",
        quaternary: "#2E4756",
        quinary: "#16262E",
      },
    },
  },
  plugins: [],
}
