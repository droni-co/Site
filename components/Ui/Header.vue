<template>
  <header>
    <h1>{{ $t('header.title') }}</h1>
    <ul>
      <li>
        <nuxt-link :to="localePath('/')">
          {{ $t('header.menu.home') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/services')">
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
