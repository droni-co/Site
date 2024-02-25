// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  i18n: {
    baseUrl: 'https://droni.co',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'es', iso: 'es-ES' }
    ], // used in URL path prefix
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  tailwindcss: {
    
  },
  colorMode: {
    classSuffix: ''
  }
})
