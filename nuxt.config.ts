// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["chota", "~/assets/css/app.css"],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxt/image",
    "vue3-carousel-nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
  ],

})
