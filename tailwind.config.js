/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
    },
    screens: {
      xs: "0px",

      sm: "640px",

      md: "848px",

      lg: "1025px",

      xl: "1280px",

      lxl: "1580px",

      "2xl": "1806px",
    },
    extend: {
      width: {
        128: "450px",
      },
      gridTemplateColumns: {
        SL: "auto 1fr",
        "2auto": "repeat(2, minmax(auto, auto))",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
      },
      backgroundImage: {
        formBG: "url('./Attachments/Images/formBG.png')",
      },
      colors: {
        "dark-blue": "#282938",
        "light-creme": "#F4F5F5",
      },
    },
  },
  plugins: [],
};
