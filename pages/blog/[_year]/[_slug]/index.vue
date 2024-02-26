<template>
  <div v-if="post">
    <UiHero>
      <div class="text-center md:text-start py-6 md:flex">
        <div class="grow my-auto">
          <h1 class="text-balance text-3xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ post?.title }}
          </h1>
          <h4 class="py-2 text-balance">{{ post.description }}</h4>
          <div class="py-2">
            <UiPill :to="post.author_link">
              <i class="i-mdi-account"></i>
              {{ post?.author }}
            </UiPill>
            <UiPill>
              <i class="i-mdi-calendar"></i>
              {{ post?.created_at }}
            </UiPill>
            <UiPill v-for="tag in post.tags" :key="tag" class="me-2">
              {{ tag }}
            </UiPill>
          </div>
        </div>
        <div>
          <img :src="post.image" class="max-w-80 mx-auto bg-slate-100 dark:bg-slate-700 shadow-lg p-2 my-2 rounded aspect-video" alt="Kosante | Last project" />
        </div>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <div class="aspect-video" v-if="post.video">
        <iframe
          :src="getVideoUrl(post.video)"
          frameborder="0"
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
const { data:post } = await useAsyncData(route.path, () => queryContent(route.fullPath).findOne())
const getVideoUrl = (url: string) => {
  let videoId = url.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return `https://www.youtube.com/embed/${videoId}`
}
</script>