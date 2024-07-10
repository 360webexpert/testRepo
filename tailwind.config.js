/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeBlue': '#45A9EA',
        'themeBlue-200': '#1d87cc',
        'themeBlue-500': '#CAE6FE',
      },
    },
  },
  plugins: [],
}

