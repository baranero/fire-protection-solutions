/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      colors: {
        primary: '#111',
        secondary: '#393A47',
        accent: '#B30F00',
      },
    },
  },
 
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
