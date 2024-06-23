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
  },
  routeRules: {
    '/es/blog/2024/auxilio-no-se-si-me-bloquearon-en-whatsapp': { redirect: '/es/blog/auxilio-no-se-si-me-bloquearon-en-whatsapp' },
    '/es/blog/2024/comandos-basicos-para-empezar-con-la-consola-o-terminal': { redirect: '/es/blog/comandos-basicos-para-empezar-con-la-consola-o-terminal' },
    '/es/blog/2024/tus-fotografias-de-instagram-pueden-llevarte-a-la-carcel': { redirect: '/es/blog/tus-fotografias-de-instagram-pueden-llevarte-a-la-carcel' },
    '/es/posts/por-que-se-rompen-o-queman-los-votos-en-las-elecciones': { redirect: '/es/blog/por-que-se-rompen-o-queman-los-votos-en-las-elecciones' },
    '/es/blog/2024/algunas-nociones-de-autenticacion-y-autorizacion-con-azure-b2c': { redirect: '/es/blog/algunas-nociones-de-autenticacion-y-autorizacion-con-azure-b2c' },
    '/es/blog/2024/construyendo-webs-en-dias-sin-backend': { redirect: '/es/blog/construyendo-webs-en-dias-sin-backend' },
    '/es/blog/2024/comenzando-de-nuevo': { redirect: '/es/blog/comenzando-de-nuevo' },
    '/es/blog/2024/migrando-de-php-a-node-es-ahora-mas-facil': { redirect: '/es/blog/migrando-de-php-a-node-es-ahora-mas-facil' },
    '/es/blog/2024/some-notion-about-authentication-and-authorization-with-azure-b2c': { redirect: '/es/blog/some-notion-about-authentication-and-authorization-with-azure-b2c' },
    '/es/blog/2024/building-websites-in-days-without-backend': { redirect: '/es/blog/building-websites-in-days-without-backend' },
    '/es/blog/2024/tutorial-manipular-volumen-de-un-audio-en-linea-de-tiempo-adobe-premiere': { redirect: '/es/blog/tutorial-manipular-volumen-de-un-audio-en-linea-de-tiempo-adobe-premiere' },
    '/es/blog/2024/como-instalar-y-configurar-oci8-en-php-de-windows': { redirect: '/es/blog/como-instalar-y-configurar-oci8-en-php-de-windows' },
    '/es/blog/2024/yii2-vs-laravel-comparacion-sesgada': { redirect: '/es/blog/yii2-vs-laravel-comparacion-sesgada' },
    '/es/blog/2024/la-decadencia-de-good-omens': { redirect: '/es/blog/la-decadencia-de-good-omens' },
    '/es/blog/2024/como-implementar-ckeditor4-en-laravel-5-6-con-administrador-de-archivos-personalizado': { redirect: '/es/blog/como-implementar-ckeditor4-en-laravel-5-6-con-administrador-de-archivos-personalizado' },
    '/es/blog/2024/como-agregar-dominios-de-primer-nivel-en-un-multisitio-de-wordpress': { redirect: '/es/blog/como-agregar-dominios-de-primer-nivel-en-un-multisitio-de-wordpress' },
    '/es/blog/2024/alternativas-a-zoom-para-dar-clases-virtuales': { redirect: '/es/blog/alternativas-a-zoom-para-dar-clases-virtuales' },
    '/es/blog/2024/mi-stack-de-desarrollo-para-proyectos-grandes': { redirect: '/es/blog/mi-stack-de-desarrollo-para-proyectos-grandes' },
    '/blog/2024/algunas-nociones-de-autenticacion-y-autorizacion-con-azure-b2c': { redirect: '/blog/algunas-nociones-de-autenticacion-y-autorizacion-con-azure-b2c' },
    '/blog/2024/construyendo-webs-en-dias-sin-backend': { redirect: '/blog/construyendo-webs-en-dias-sin-backend' },
    '/blog/2024/comenzando-de-nuevo': { redirect: '/blog/comenzando-de-nuevo' },
    '/blog/2024/migrando-de-php-a-node-es-ahora-mas-facil': { redirect: '/blog/migrando-de-php-a-node-es-ahora-mas-facil' },
    '/blog/2024/tutorial-manipular-volumen-de-un-audio-en-linea-de-tiempo-adobe-premiere': { redirect: '/blog/tutorial-manipular-volumen-de-un-audio-en-linea-de-tiempo-adobe-premiere' },
    '/blog/2024/como-instalar-y-configurar-oci8-en-php-de-windows': { redirect: '/blog/como-instalar-y-configurar-oci8-en-php-de-windows' },
    '/blog/2024/yii2-vs-laravel-comparacion-sesgada': { redirect: '/blog/yii2-vs-laravel-comparacion-sesgada' },
    '/blog/2024/la-decadencia-de-good-omens': { redirect: '/blog/la-decadencia-de-good-omens' },
    '/blog/2024/como-implementar-ckeditor4-en-laravel-5-6-con-administrador-de-archivos-personalizado': { redirect: '/blog/como-implementar-ckeditor4-en-laravel-5-6-con-administrador-de-archivos-personalizado' },
    '/blog/2024/como-agregar-dominios-de-primer-nivel-en-un-multisitio-de-wordpress': { redirect: '/blog/como-agregar-dominios-de-primer-nivel-en-un-multisitio-de-wordpress' },
    '/blog/2024/alternativas-a-zoom-para-dar-clases-virtuales': { redirect: '/blog/alternativas-a-zoom-para-dar-clases-virtuales' },
    '/blog/2024/mi-stack-de-desarrollo-para-proyectos-grandes': { redirect: '/blog/mi-stack-de-desarrollo-para-proyectos-grandes' },
    '/blog/2024/condicionales-ternarias-y-evaluadores-usados-correctamente': { redirect: '/blog/condicionales-ternarias-y-evaluadores-usados-correctamente' },
    '/blog/2024/some-notion-about-authentication-and-authorization-with-azure-b2c': { redirect: '/blog/some-notion-about-authentication-and-authorization-with-azure-b2c' },
    '/blog/2024/building-websites-in-days-without-backend': { redirect: '/blog/building-websites-in-days-without-backend' }
  }
})