// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://bikeandb.us',
    name: 'Car Dependency in San Francisco',
    description:
      'Learn about the history of car dependency in San Francisco with a brief overview of the city\'s transportation history complete with maps and graphs and relevant legislation and local organizations.',
    defaultLocale: 'en',
  },
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Car Dependency in San Francisco',
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
    'nuxt3-leaflet',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
  ],
  ogImage: { enabled: false },
  colorMode: {
    preference: 'light',
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
