<template>
  <header>
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
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('es')">Español</NuxtLink>
  </header>
</template>
<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

console.log( locales.value)
</script>
