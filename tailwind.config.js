/** @type {import('tailwindcss').Config} */
export default {
    base:process.env.VITE_BASH_PATH || "/",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}