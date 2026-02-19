// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    configPath: '../tailwind.config.ts'
  },

  css: ['~/assets/css/main.css'],


  build: {
    transpile: ['gsap', 'three', '@tresjs/core', '@tresjs/cientos', 'object-hash'],
  },

})

