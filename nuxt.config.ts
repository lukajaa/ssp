// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Lucas\'s SSP',
    },
  },
  css: ['@/assets/styles/main.scss'],
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
