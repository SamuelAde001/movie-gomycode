/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      custGreen: "#009B4D",
      custYellow: "#FFCC00",
      cusIvory: "#FAF5E9",
    },

    plugins: [],
    corePlugins: {
      preflight: false,
    },
  },
};
