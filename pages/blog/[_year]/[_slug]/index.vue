<template>
  <div v-if="doc">
    <UiHero>
      <div class="text-center md:text-start py-6 md:flex">
        <div class="grow my-auto">
          <h1 class="text-balance text-3xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ doc?.title }}
          </h1>
          <h4 class="py-2 text-balance">{{ doc.description }}</h4>
          <div class="py-2">
            <NuxtLink :to="doc.translated" class="text-balance" v-if="doc.translated">
              <UiPill>
                <i class="i-mdi-translate"></i>
                {{ locale === 'en' ? 'Versión en Español' : 'English Version' }}
              </UiPill>
            </NuxtLink>
            <UiPill :to="doc.author_link">
              <i class="i-mdi-account"></i>
              {{ doc?.author }}
            </UiPill>
            <UiPill>
              <i class="i-mdi-calendar"></i>
              {{ doc?.created_at }}
            </UiPill>
            <UiPill v-for="tag in doc.tags" :key="tag" class="me-2">
              {{ tag }}
            </UiPill>
          </div>
        </div>
        <div>
          <NuxtImg
            :src="doc.image"
            class="max-w-80 mx-auto bg-slate-100 dark:bg-slate-700 shadow-lg p-2 my-2 rounded"
            :alt="doc.title" />
        </div>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <div class="aspect-video" v-if="doc.video">
        <iframe
          :src="getVideoUrl(doc.video)"
          :title="doc.title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full">
          </iframe>
      </div>
      <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8">
        <ContentDoc />
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const { data:doc } = await useAsyncData(route.path, () => queryContent(route.fullPath).findOne())
useSeoMeta({
  title: doc.value?.title,
  ogTitle: doc.value?.title,
  description: doc.value?.description,
  ogDescription:  doc.value?.description,
  ogImage: doc.value?.image,
  twitterCard: 'summary_large_image',
})
const getVideoUrl = (url: string) => {
  let videoId = url.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return `https://www.youtube.com/embed/${videoId}`
}
</script>