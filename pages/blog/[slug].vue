<template>
  <div v-if="post">
    <UiHero>
      <div class="text-center md:text-start py-6 md:flex">
        <div class="grow my-auto">
          <h1 class="text-balance text-3xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ post?.name }}
          </h1>
          <h4 class="py-2 text-balance">{{ post.description }}</h4>
          <div class="py-2">
            <NuxtLink v-if="getProp('en_version')" :to="getProp('en_version')" class="text-balance">
              <UiPill>
                <i class="i-mdi-translate"></i>
                English Version
              </UiPill>
            </NuxtLink>
            <NuxtLink v-if="getProp('es_version')" :to="getProp('es_version')" class="text-balance">
              <UiPill>
                <i class="i-mdi-translate"></i>
                Versión en español
              </UiPill>
            </NuxtLink>
            <UiPill to="/">
              <i class="i-mdi-account"></i>
              {{ post?.user?.name }}
            </UiPill>
            <UiPill>
              <i class="i-mdi-calendar"></i>
              {{ post?.createdAt }}
            </UiPill>
          </div>
        </div>
        <div>
          <NuxtImg
            v-if="post.image"
            :src="post.image"
            class="max-w-80 mx-auto bg-slate-100 dark:bg-slate-700 shadow-lg p-2 my-2 rounded"
            :alt="post.name" />
        </div>
      </div>
    </UiHero>
    <div class="container mx-auto">
      <div class="aspect-video" v-if="getProp('video')">
        <iframe
          :src="getVideoUrl(getProp('video'))"
          :title="post.name"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full">
          </iframe>
      </div>
    </div>
    <div class="container xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-2 md:px-auto py-4">
      <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8" v-html="markdown.render(String(post.content))" />
      <LazyBlogCommentsList :post="post" />
      <LazyBlogCommentsAdd :post="post" :parent-id="0" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();
const route = useRoute()
const { data:post } = await useFetch<Post>(`/api/appi/posts/${route.params.slug}`)

useHead({
  link: [
    { rel: 'canonical', href: `https://droni.co/${post.value?.lang === 'es' ? 'es/' : ''}blog/${post.value?.slug}` }
  ]
})
useSeoMeta({
  title: post.value?.name,
  ogTitle: post.value?.name,
  description: post.value?.description,
  ogDescription:  post.value?.description,
  ogType: 'article',
  ogImage: post.value?.image,
  twitterCard: 'summary_large_image',
  ogUrl: `https://droni.co/${post.value?.lang === 'es' ? 'es/' : ''}blog/${post.value?.slug}`
})
const getProp = (name: string) => {
  return post.value?.props?.find(prop => prop.name === name)?.value
}
const getVideoUrl = (video:string) => {
  let videoId = video.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return `https://www.youtube.com/embed/${videoId}`
}
</script>