/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
],
  theme: {
    extend: {
      colors: {
        secondary: "#EE325C",
        dark: '#080809',
        gray:'#EFEFEF',
        lightGray:'#7E7E7E',
        lighterGray:'#D6D8DD'
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(159.13deg, #3d2e80 51.38%, #dc1969 125.72%)",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        muli: ["Muli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
