/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "logo-main": ["Pacifico", "cursive"],
        "title-header": ["Dancing Script", "cursive"],
        "body-main": ["Roboto", "Arial"],
      },
    },
  },
  plugins: [],
};
