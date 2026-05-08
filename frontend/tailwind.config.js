/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        bridge: "#0E7C86",
        mint: "#D7F7EA",
        amber: "#F2B84B",
        coral: "#EF6F6C",
        cloud: "#F7FAFC"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
