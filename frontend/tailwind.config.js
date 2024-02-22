/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        roboto_slab: ["Roboto Slab"],
        barlows: ["Barlow Semi Condensed"],
        crimsonPro: ["Crimson Pro"],
        rowdies: ["Rowdies"],
      },
    },
  },
  plugins: [],
};
