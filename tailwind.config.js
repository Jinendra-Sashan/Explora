/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/GetStarted/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        getstarted: {
          button: "#fdf2f2",
        },
      },
      keyframes: {
        "button-animation": {
          "0%": {
            transform: "translateX(-650%)",
            opacity: "1",
            visibility: "hidden",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            visibility: "visible",
          },
        },
      },
      animation: {
        button: "button-animation 4.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
