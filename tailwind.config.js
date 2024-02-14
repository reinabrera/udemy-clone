/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2d2f31",
        secondary: "#5624d0",
        "light-gray": "#f7f9fa",
        "tabs-default": "#6a6f73",
        "purple": "#a435f0",
        "purple-hover": "#8710d8",
        "green" : "#1e6055",
        "dark-gray": "#1c1d1f",
        "light-purple": "#c0c4fc",
        "gold": "#f69c08",
        "dark-purple": "#5624d0",
        "dark-purple-hover": "#401b9c",
      },
      fontFamily: {
        display: ["Gelasio"],
        sans: ["DM Sans", "sans-serif"],
      },
      screens: {
        "xs": "580px",
        "2xl": "1340px",
      },
      maxWidth: {
        '2xl': '43.5rem',
      }
    },
  },
  plugins: [],
};
