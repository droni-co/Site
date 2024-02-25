<template>
  <header class="bg-zinc-100
      p-2
      shadow-lg
    dark:bg-zinc-800">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="px-2">
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/img/logo.svg" :alt="$t('header.title')" class="w-8 dark:hidden" />
            <img src="~/assets/img/logo-w.svg" :alt="$t('header.title')" class="w-8 hidden dark:block" />
          </nuxt-link>
        </div>
        <div class="grow">
          <nuxt-link
            :to="localePath('/blog')"
            class="p-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400">
            {{ $t('header.menu.blog') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/about')"
            class="p-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400">
            {{ $t('header.menu.about') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/services')"
            class="p-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400">
            {{ $t('header.menu.services') }}
          </nuxt-link>
          <nuxt-link
            :to="localePath('/projects')"
            class="p-3
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400">
            {{ $t('header.menu.projects') }}
          </nuxt-link>
        </div>
        <input
          type="search"
          class="px-4 p-2 rounded-full dark:bg-zinc-700 dark:text-gray-50"
          :placeholder="$t('header.search')"
        />
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