<template>
  <div class="bg-slate-200 min-h-screen dark:bg-slate-800 dark:text-gray-200">
    <UiHeader />
    <slot />
    <UiFooter />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { data:doc } = await useAsyncData('page-data', () => queryContent(route.fullPath).findOne())
useSeoMeta({
  title: doc.value?.title ?? `${t('header.title')} | ${t('header.subtitle')}`,
  ogTitle: doc.value?.title ?? `${t('header.title')} | ${t('header.subtitle')}` ,
  description: doc.value?.description ?? t('header.description'),
  ogDescription: doc.value?.description ?? t('header.description'),
  ogImage: doc.value?.image ?? 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>