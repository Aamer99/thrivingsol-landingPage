/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5275CF",
        secondary: "#7E9AE4",
      },
      screens: {
        xs: "0px",
        sm: "360px",
        "2sm": "576px",
        md: "768px",
        "2md": "800px",
        lg: "1000px",
        xl: "1200px",

        "2xl": "1300px",
        "3xl": "1500px",
        "4xl": "1600px",
        mobile: { max: "650px" },
        tablet: { max: "1200px", min: "651px" },
        smDesktop: { max: "1500px", min: "1200px"}
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
};
