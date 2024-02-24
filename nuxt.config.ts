// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    locales: ['en', 'es'], // used in URL path prefix
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  tailwindcss: {
    
  },
  colorMode: {
    classSuffix: ''
  }
})
