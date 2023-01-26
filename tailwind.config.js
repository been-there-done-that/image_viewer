/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              "primary": "#e6e7ee"
          },
          boxShadow: {
              'cs': '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
          }
      },
  },
  plugins: [],
}