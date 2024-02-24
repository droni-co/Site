<template>
  <header class="bg-zinc-800 dark:bg-slate-300">
    <h1>{{ $t('header.title') }}</h1>
    <ul>
      <li>
        <nuxt-link :to="localePath('/')" class="text-kalvin-500">
          {{ $t('header.menu.home') }}
          <span class="i-mdi-home text-primary"></span>
          dddd
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/services')" class="text-purple-700">
          {{ $t('header.menu.services') }}
        </nuxt-link>
      </li>
    </ul>
    <div class="dark-mode nuevo">

    
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('es')">Español</NuxtLink>
  </header>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
console.log(colorMode.preference)
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

console.log( locales.value)
</script>
<style>
.nuevo {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode .nuevo {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode .nuevo {
  background-color: #f1e7d0;
  color: #433422;
}
</style>