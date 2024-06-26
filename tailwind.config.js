/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", "sans-serif", "open-sans"],
      },
      colors: {
        textColor: "#FDF0D5",
        titleColor: "#f6bd60",
      },
    },
  },
  plugins: [],
};
