/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-wrapper-max": "1200px",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: "#EDC065",
        secundary: "#3e3e3e",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("fm", ".fm &");
    },
  ],
};
