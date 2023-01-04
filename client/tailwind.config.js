/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-green": "#45b649",
        "theme-light-orange": "#f04838",
        "theme-dark-orange": "#f72a16",
        "theme-light-black": "#282727",
        "theme-dark-black": "#1b1b1b",
        "theme-light-grey": "#5b5a5a",
        "theme-dark-grey": "#4a4a4a",
        "theme-dark-grey2": "#292626",
      },
    },
  },
  plugins: [],
};
