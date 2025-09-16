// nuxt.config.ts
export default defineNuxtConfig({
  // enable devtools
  devtools: { enabled: true },

  // set compatibilityDate (use the date shown in the warning)
  compatibilityDate: '2025-09-15',

  // modules: keep Tailwind and add Nuxt Image
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'          // register the image module you have installed
  ],

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
  
 
})


