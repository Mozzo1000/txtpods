/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#FCF8F8',
        'background': '#e4f8dd',
        'primary': '#fc7b53',
        'secondary': 'rgba(252, 123, 83, 0.7)',
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}

