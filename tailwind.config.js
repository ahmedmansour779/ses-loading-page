/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"]
      },
      colors: {
        background: "#010314",
        blue: "#578DF5"
      }
    },
  },
  plugins: [],
}

