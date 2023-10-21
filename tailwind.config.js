/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d1a39",
        secondary: "#451952",
        "custom-purple": "#662549",
        "custom-pink": "#ae445a",
        "custom-yellow": "#f39f5a",
        light: "#e8bcb9",
      },
    },
  },
  plugins: [],
};
