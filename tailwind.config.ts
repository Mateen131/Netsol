// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'
import flowbite from 'flowbite/plugin'

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        qualy: ['Qualy', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customGray: '#f5f5f5',   // custom gray
        PrimaryBlue: '#0056b3',  // custom blue
        gradientStart: '#1e3a8a', // dark blue
        gradientEnd: '#3b82f6',   // light blue
      },
       backgroundImage: {
        'custom-linear': 'linear-gradient(89deg, #e2e4e400 13.16%, #f1f1f1 99.53%)',
      },
           container: {
        center: true,
        padding: "4px", // same as px-6
 
    },
  },
  plugins: [flowbite],
}
}

