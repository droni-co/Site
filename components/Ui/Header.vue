<template>
  <header
    class="
      bg-zinc-100
      p-1
      shadow-lg
    dark:bg-zinc-800
      md:p-2
      md:pb-1">
    <div class="container mx-auto">
      <div class="md:flex justify-between items-center">
        <div class="flex p-2 pb-0 md:pb-2">
          <nuxt-link :to="localePath('/')">
            <img src="~/assets/img/logo.svg" :alt="$t('header.title')" class="w-8 md:w-10 dark:hidden" />
            <img src="~/assets/img/logo-w.svg" :alt="$t('header.title')" class="w-8 md:w-10 hidden dark:block" />
          </nuxt-link>
          <div class="grow"></div>
          <button class="text-end text-3xl px-2 md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
            <i class="i-mdi-menu"></i>
          </button>
        </div>
        <div class="overflow-hidden text-center transition-all
          md:grow md:h-auto md:flex md:text-start"
          :class="{ 'h-0': !mobileMenuOpen, 'h-screen': mobileMenuOpen}">
          <nav @click="mobileMenuOpen = false" class="px-4 md:grow">
            <nuxt-link
              :to="localePath('/blog')"
              class="block border-b border-gray-700 p-2 text-end
                md:inline-block md:border-none md:p-3
                transition
                hover:text-gray-600
                dark:text-gray-50
                dark:hover:text-gray-400">
              {{ $t('header.menu.blog') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/about')"
              class="block border-b border-gray-700 p-2 text-end
                md:inline-block md:border-none md:p-3
                transition
                hover:text-gray-600
                dark:text-gray-50
                dark:hover:text-gray-400">
              {{ $t('header.menu.about') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/services')"
              class="block border-b border-gray-700 p-2 text-end
                md:inline-block md:border-none md:p-3
                transition
                hover:text-gray-600
                dark:text-gray-50
                dark:hover:text-gray-400">
              {{ $t('header.menu.services') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/projects')"
              class="block p-2 text-end
                md:inline-block md:border-none md:p-3
                transition
                hover:text-gray-600
                dark:text-gray-50
                dark:hover:text-gray-400">
              {{ $t('header.menu.projects') }}
            </nuxt-link>
          </nav>
          <div>
            <input
              type="search"
              class="block mx-auto mt-2 px-6 py-3 rounded-full dark:bg-zinc-700 dark:text-gray-50 md:mt-0"
              :placeholder="$t('header.search')"
            />
          </div>          
          <NuxtLink
            :to="switchLocalePath(locale === 'es' ? 'en' : 'es')"
            class="text-xl
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400
              p-3">
            <i class="i-mdi-translate"></i>
          </NuxtLink>
          <button
            @click="changeColorMode"
            class="text-xl
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400
              p-3">
            <i class="i-mdi-theme-light-dark"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const mobileMenuOpen = ref(false)
const colorMode = useColorMode()
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
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
  
}
</script>