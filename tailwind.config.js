/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        blur: "#FFF5E1"
      },
      fontFamily: {
        sans: ["Open Sans", 'sans-serif'],
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
          dark: '#FF8C00',
          DEFAULT: '#FFA500',
          light: '#FFB74D',
        },
      },
    },
  },
  plugins: [],
}

