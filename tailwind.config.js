/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "750px" },
      lg: {
        min: "751px",
        max: "1200px",
      },
      xl: {
        min: "1201px",
      },
    },
  },
  plugins: [],
};
