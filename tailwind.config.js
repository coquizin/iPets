/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-wrapper-max": "1200px",
      },
      maxWidth: {
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
      gridTemplateColumns: {
        "auto-1818px": "repeat(auto-fill,minmax(max(320px,20% - 32px),1fr))",
        "auto-960px":
          "repeat(auto-fill,minmax(max(320px,33.3333333333% - 32px),1fr))",
        "auto-768px": "repeat(auto-fill,minmax(max(320px,50% - 32px),1fr))",
        "auto-repeat": "repeat(auto-fill,minmax(280px,1fr))",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("fm", ".fm &");
    },
  ],
};
