<template>
  <NuxtLoadingIndicator color="#ed1f9b" />
  <div class="bg-slate-100 min-h-screen dark:bg-slate-800 dark:text-gray-200">
    <NuxtRouteAnnouncer />
    <UiHeader />
    <slot />
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es'
  },
})
</script>