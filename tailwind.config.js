/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lgg: "1200px",
      xl: "1440px",
      xxl: "1640px",
    },
    fontFamily: {
      nunito: ["Nunito", " sans-serif"],
      sanspro: ["Source Sans Pro", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
