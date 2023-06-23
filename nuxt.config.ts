import texts from "./fixtures/texts.js";
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
  app:{
    head: {
      title: texts.seo.title,
      meta: [
        {
          name: "name",
          content: texts.seo.title
        },
        {
          name: "image",
          content: "/assets/imgs/site_img.jpg"
        },      
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default"
        },
        {
          name: "mobile-web-app-capable",
          content: "yes"
        },
        {
          name: "keywords",
          content: texts.seo.keywords
        },
        // google meta tags
        {
          name: "og:title",
          content: texts.seo.title,
        },
        {
          name: "og:url",
          content: texts.seo.website_url
        },
        {
          name: "og:type",
          content: 'website'
        },
        {
          name: "og:image",
          content: "/assets/imgs/site_img.jpg"
        },
        {
          property: "og:url",
          content: texts.seo.website_url
        },
        {
          property: "og:type",
          content: 'website'
        },
        {
          property: "og:image",
          content: "/assets/imgs/site_img.jpg"
        },
        {
          name: "og:locale",
          content: "ar_EG"
        },
        {
          name: "og:site_name",
          content: texts.seo.title
        },
        //social media meta tags
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:title",
          content: texts.seo.title
        },
        {
          name: "twitter:image",
          content: "/assets/imgs/site_img.jpg"
        },
        {
          name: "instagram:site",
          ...(texts.links.socials.instagram && {
            content: `@${texts.links.socials.instagram}`
          })
        },
        {
          name: "twitter:site",
          ...(texts.links.socials.twitter && {
             content: `@${texts.links.socials.twitter}`
          })
        },
        {
          name: "twitter:image:alt",
          content: texts.seo.title
        },
        {
          name: "twitter:app:country",
          content: "EGY"
        }
        
      ],
      link: [{ rel: "icon", type: "image/png", href: "/assets/imgs/logo.png" }],
    }
  },
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
