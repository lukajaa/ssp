// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    'nuxt-vuefire',
  ],
  colorMode: {
    preference: 'light',
  },
  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyCaXSuoKB39CDSBr7WNX4s5jYllBLtbG0k',
      authDomain: 'srsp-e984e.firebaseapp.com',
      projectId: 'srsp-e984e',
      storageBucket: 'srsp-e984e.appspot.com',
      messagingSenderId: '909006591676',
      appId: '1:909006591676:web:336a686f87209781afa2b9',
    },
  },

});
