/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}; 