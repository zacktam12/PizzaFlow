/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pizza: "Roboto Mono, monospace",
    },
    extend: {
      fontSize: { huge: ["80rem", { lineHeight: "1" }] },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
