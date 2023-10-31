// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Lukajaa Nuxt Template',
    },
  },
  css: ['@/assets/styles/main.scss'],
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', 'nuxt-gtag'],
  colorMode: {
    classSuffix: '',
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
