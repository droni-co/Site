<template>
  <header
    class="
      bg-zinc-100
      p-1
      shadow-lg
    dark:bg-zinc-800
      md:p-2
      md:pb-1
      relative
      z-1">
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
            <!-- <nuxt-link
              :to="localePath('/services')"
              class="block border-b border-gray-700 p-2 text-end
                md:inline-block md:border-none md:p-3
                transition
                hover:text-gray-600
                dark:text-gray-50
                dark:hover:text-gray-400">
              {{ $t('header.menu.services') }}
            </nuxt-link> -->
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
            <nuxt-link
              :to="localePath('/live')"
              class="group block p-2 text-end
                md:inline-block md:py-1 md:px-3
                border border-purple-700 rounded-full
                transition
                hover:bg-purple-700
                hover:text-white
                dark:text-gray-50
                dark:hover:text-gray-400
                dark:hover:text-white">
              {{ $t('header.menu.live') }}
              <i class="i-mdi-twitch text-purple-700 animate-ping md:absolute group-hover:text-zinc-100"></i>
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
          <div class="md:flex">
            <div class="py-2 md:flex">
              <img
                v-if="data?.user?.image"
                :src="data.user.image"
                class="w-8 h-8 rounded-full mx-auto"
                :alt="data?.user?.name ?? ''"
              />
            </div>
            <button
            v-if="status === 'authenticated'"
            @click="closeSession"
            class="text-xl
              transition
              hover:text-gray-600
              dark:text-gray-50
              dark:hover:text-gray-400
              p-3">
              <i class="i-mdi-logout"></i>
            </button>
            <button
              v-else
              @click="signIn('google')"
              class="mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold my-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full flex">
              <i class="i-mdi-google mt-3"></i>
              <span class="p-2">
                {{ $t('header.menu.login') }}
              </span>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { status, data, signIn, signOut   } = useAuth()
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
// Close session
const closeSession = () => {
  signOut()
}
</script>