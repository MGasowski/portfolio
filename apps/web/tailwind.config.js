/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#002642",
          light: "#F0F0F0",
        },
        text: {
          light: "#f1f5f9",
          dark: "#002642",
        },
        primary: "#FFFF33",
      },
    },
  },
  plugins: [],
};
