/** @type {import('tailwindcss').Config} */

const { withUt } = require("uploadthing/tw");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
module.exports = withUt({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX and TS/TSX files in the src folder
  ],
  darkMode: "class", // Add dark mode setting
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    addVariablesForColors, // Plugin for adding CSS variables for colors
  ],
});
