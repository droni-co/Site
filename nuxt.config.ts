// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    "@sidebase/nuxt-auth"
  ],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },
  gtag: {
    id: 'G-HB48CY1HBF'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['~/assets/css/app.scss'],
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
  },
  image: {
    quality: 70,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    }
  }
})