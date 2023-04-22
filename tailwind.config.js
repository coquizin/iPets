/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-wrapper-max": "1200px",
      },
      boxShadow: {
        shadowInner: "inset 0 -80px 0 0px rgb(255, 255, 255)",
        "shadow-inner-2": "inset 0 0 0 2px rgb(255, 255, 255)",
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
        "auto-repeat": "repeat(auto-fill,minmax(320px,1fr))",
      },
      animation: {
        "height-in": "height-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "height-out": "height-out 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "height-in": {
          "0%": {
            height: "0",
          },
          "100%": {
            height: "100%",
          },
        },
        "height-out": {
          "0%": {
            height: "100%",
          },
          "100%": {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("fm", ".fm &");
    },
  ],
};
