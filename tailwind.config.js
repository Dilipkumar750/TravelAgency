/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lovers: ['"Lovers Quarrel"', 'serif'],
      },
    },
  },
  plugins: [],
  colors: {
    'battleship-gray': '#5b5b5b', // Replace with your actual hex code
    'granite-gray': '#2f2f2f',
    'viridian-green': '#4b9e72',
    'white-1': '#ffffff',
  },
  fontSize: {
    'fs-6': '1rem',
}
}