/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins']
      },
      backgroundImage: {
        'background': 'url(./src/assets/background.jpeg)'
      }
    },
  },
  plugins: [],
}

