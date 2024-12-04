/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "red": "#F64A4A",
      "green": "#A4FFAF",
      "orange": "#FB7C58",
      "yellow": "#F8CD65",
      "dark-gray": "#24232C",
      "gray": "#817D92",
      "almost": "#E6E5EA",
      "very-dark-gray": "#18171F",
    },
    extend: {
      fontFamily: {
        "JetBrains": ["'JetBrains Mono Variable'", "sans-serif"]
      },
      fontSize: {
        "32": "2rem",
      }
    },
  },
  plugins: [],
}