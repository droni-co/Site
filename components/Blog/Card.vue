<template>
  <article 
    v-if="typeof blogPost === 'object'"
    class="bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700
    hover:scale-105 transition-transform">
    <NuxtLink :to="blogPost._path">
      <img
        class="rounded-t aspect-video object-cover"
        :src="blogPost.image"
        alt="" />
    </NuxtLink>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300">
          {{ blogPost.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-600 dark:text-gray-300">
        <small class="text-gray-500 dark:text-gray-400 block">
          By {{ blogPost.author }}| {{ blogPost.created_at }}
        </small>
        {{ blogPost.description }}
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps<{
  blogPost: any
}>()
</script>