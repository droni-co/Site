<template>
  <div v-if="challenge" class="container mx-auto">
    <h1>
      {{ challenge.name }}
    </h1>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8" v-html="markdown.render(String(challenge.content))" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();
const route = useRoute()
const challenge = useFetch<Challenge>(`/api/appi/codevs/challenges/${route.params.slug}`).data
useSeoMeta({
  title: () => challenge.value?.name,
  ogTitle: () => challenge.value?.name,
  description: () => challenge.value?.description,
  ogDescription:  () => challenge.value?.description,
  ogType: 'article',
  ogImage: 'https://dronico.nyc3.digitaloceanspaces.com/4ebaccf5-b863-4f12-aa49-9bbe0e1844e2/db7d4d54-7354-4421-9682-d1b75b1f1413/74529-dronico-card.png.png',
  twitterCard: 'summary_large_image',
  ogUrl: () => `https://droni.co/codelab/desafios/${challenge.value?.slug}`
})
</script>