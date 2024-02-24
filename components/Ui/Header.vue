<template>
  <header class="bg-zinc-100 dark:bg-zinc-800 p-3">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="px-2">
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/img/logo.svg" alt="Logo" class="w-12 dark:hidden" />
            <img src="~/assets/img/logo-w.svg" alt="Logo" class="w-12 hidden dark:block" />
          </nuxt-link>
        </div>
        <div class="grow">
          <nuxt-link
            :to="localePath('/')"
            class="px-5
              py-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-200">
            {{ $t('header.menu.home') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/services')"
            class="px-5
              py-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-200">
            {{ $t('header.menu.services') }}
          </nuxt-link>
        </div>
        <button @click="changeLocale" class="dark:text-gray-50 p-3">
          <i class="i-mdi-translate"></i>
        </button>
        <button @click="changeColorMode" class="dark:text-gray-50 p-3">
          <i class="i-mdi-theme-light-dark"></i>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
console.log(colorMode.preference)
const { locale } = useI18n()
const localePath = useLocalePath()
/* change color mode */
const changeColorMode = () => {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else if (colorMode.preference === 'dark') {
    colorMode.preference = 'sepia'
  } else if (colorMode.preference === 'sepia') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
/* change local */
const changeLocale = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>