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
          light: "#f1f5f9",
          dark: "#0f172a",
        },
      },
      keyframes: {
        "button-animation": {
          "0%": {
            transform: "translateX(-500%)",
            opacity: "1",
            visibility: "hidden",
            animationDelay: "15s",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            visibility: "visible",
          },
        },
      },
      animation: {
        button: "button-animation 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
