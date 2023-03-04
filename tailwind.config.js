/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-wrapper-max": "1200px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("fm", ".fm &");
    },
  ],
};
