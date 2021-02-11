const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        sm: "24px",
        md: "32px",
      },
      padding: {
        sm: "24px",
        md: "32px",
      },
      colors: {
        bgPrim: "#F8FAFC",
        "geekBlue-50": "#EDF5FF",
        "geekBlue-100": "#D0E2FF",
        "geekBlue-200": "#A6C8FF",
        "geekBlue-300": "#78A9FF",
        "geekBlue-400": "#4589FF",
        "geekBlue-500": "#0F62FE",
        "geekBlue-600": "#0043CE",
        "geekBlue-700": "#002D9C",
        "geekBlue-800": "#001D6C",
        "geekBlue-900": "#001141",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
