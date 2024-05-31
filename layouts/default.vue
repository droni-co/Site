<template>
  <div class="bg-slate-100 min-h-screen dark:bg-slate-800 dark:text-gray-200">
    <UiHeader />
    <slot />
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n()
useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>