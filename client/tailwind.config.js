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
      screens: {
        xxs: "320px",
        xs: "640px",
        sm: "768px",
        mmd: "1080px",
        md: "1180px",
        lg: "1380px",
        xl: "1540px",
        xxl: "1940px",
      },
    },
  },
  plugins: [],
};
