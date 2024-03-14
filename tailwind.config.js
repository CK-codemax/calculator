/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        screenBrown: "rgba(50, 30, 0, 0.8)",
        screenGray : "rgba(0, 0, 0, 0.5)"
    }
    },
  },
  plugins: [],
  darkMode: "class",
};
