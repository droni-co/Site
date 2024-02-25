<template>
  <div class="bg-slate-200 min-h-screen dark:bg-slate-800 dark:text-gray-200">
    <UiHeader />
    <slot />
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: `${t('header.title')} | ${t('header.subtitle')}`,
  ogTitle: `${t('header.title')} | ${t('header.subtitle')}` ,
  description: t('header.description'),
  ogDescription: t('header.description'),
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>