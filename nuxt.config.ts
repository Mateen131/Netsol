// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],

  // ... other configurations
});
