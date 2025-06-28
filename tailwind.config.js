/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // required for class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      dropShadow: {
        glow: '0 0 10px rgba(100, 150, 255, 0.7)',
      },
  },
  plugins: [],
}
}
