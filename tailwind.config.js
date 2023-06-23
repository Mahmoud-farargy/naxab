/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        primary: "#5C2D91",
        secondary: "#FFF000",
        primaryLighter:"#92278F",
        dark:{
          1:"#000000",
          2:"#1E1E1E",
          3:"#292828",
        },
        light:{
          1:"#FFFFFF",
          2:"#C5C5C5",
          3:"#707070",
          4:"#F3F3F3"
        },
      },
      screens: {
        md:'819px',
        '3xl': '2400px',
      },
    },
  }
}