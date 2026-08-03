/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This tells Tailwind to scan your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
