// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    'aos/dist/aos.css',
    'animate.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  ssr:true,
  plugins: [],
  postcss: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  // runtimeConfig: {
  //   public: {
  //     dev_base: process.env.API_BASE,
  //     prod_base: process.env.API_BASE_PRODUCTION
  //   }
  // }
})
