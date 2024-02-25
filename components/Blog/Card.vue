<template>
  <article v-if="post" class="bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700
    hover:scale-105 transition-transform">
    <NuxtLink :to="post._path ?? ''">
      <img
        class="rounded-t aspect-video object-cover"
        :src="post.image"
        alt="" />
    </NuxtLink>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300">
          {{ post.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-600 dark:text-gray-300">
        <small class="text-gray-500 dark:text-gray-400 block">
          By {{ post.author }}| {{ post.created_at }}
        </small>
        {{ post.description }}
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps<{
  post: {
    title?: string
    description?: string
    image?: string
    created_at?: string
    author?: string
    _path?: string
  }
}>()
</script>