export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode: "class", // ✅ important
  theme: {
    extend: {},
  },
  plugins: [flowbite],
}