const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "Sans-serif"],
      },
      screens: {
        xm: "360px",
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        semibold: 800,
      },
      fontSize: {
        home: "14px",
        detail: "16px",
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueDark: "hsl(207, 26%, 17%)",
        veryDarkBlueLight: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 93%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
