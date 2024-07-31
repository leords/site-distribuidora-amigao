/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)"
      },
      backgroundColor: {
        blur: "#FFF5E1"
      },
      fontFamily: {
        sans: ["League Spartan", 'sans-serif'],
        mount: ["Montserrat", 'sans-serif']
      },
      colors: {
        red: {
          dark: '#BF0000',
          DEFAULT: '#FF0000',
          light: '#FF6666',
        },
        yellow: {
          dark: '#FFD700',
          DEFAULT: '#FFEE58',
          light: '#FFF176',
        },
        orange: {
          dark: '#FFBF00',
          DEFAULT: '#FFA500',
          light: '#FFB74D',
        },
      },
    },
  },
  plugins: [],
});

