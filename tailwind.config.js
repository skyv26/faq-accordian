const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work_sans: ['WorkSans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'accordian-m-bg': "url('./src/assets/background-pattern-mobile.svg')",
        'accordian-bg': "url('./src/assets/background-pattern-desktop.svg')",
        'trace-m-bg': "url('./src/assets/mobile-design.jpg')"
      },
    },
  },
  plugins: [],
}

