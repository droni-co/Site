// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/color-mode', '@sidebase/nuxt-auth'],
  gtag: {
    id: 'G-HB48CY1HBF'
  },
  runtimeConfig: {
    appi: process.env.APPI,
    appiSiteId: process.env.APPI_SITE_ID,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' }
      ]
    }
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
  },
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'authjs'
    }
  },
})