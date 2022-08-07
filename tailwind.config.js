/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#6D4C41",

          "neutral": "#F3F4F6",

          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      },
      {
        dark: {

          "primary": "#EF6C00",

          "secondary": "#FDE68A",

          "accent": "#3E2723",

          "neutral": "#F3F4F6",

          "base-100": "#1F2937",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#FFC000",

          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}