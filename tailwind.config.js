/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFF7ED",
        dark: "#161616",
        orange: {
          100: "FFEAD0",
          300: "#FFCC8D",
          primary: "#FF8C38",
          700: "#E17654",
        },
        "soft-dark": "#252525",
        "soft-light": "#AAAAAA",
      },
      backgroundImage: {
        "home-bg": "url('/images/home-bg.webp')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
