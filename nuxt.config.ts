// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  ui: {
  },
  fonts: {
    provider: 'local'
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'vi', name: 'Vietnamese', file: 'vi.json' }
    ],
    langDir: '../src/i18n/locales'
  }
})