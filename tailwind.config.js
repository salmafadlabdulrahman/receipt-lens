/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010c31",
        secondary: "#b25ef7",
        accent: "#8881ed",
        dark: "#0c0c0c",
        light: "#f1f1f1",
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
