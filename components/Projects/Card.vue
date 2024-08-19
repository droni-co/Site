<template>
  <article 
    v-if="project"
    class="bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700
    hover:scale-105 transition-transform">
    <NuxtLink :to="localePath(`/projects/${project.slug}`)">
      <NuxtImg :src="project.image ?? ''" class="w-full rounded-t aspect-video object-cover" :alt="project.name" />
    </NuxtLink>
    <div class="p-5">
      <NuxtLink :to="localePath(`/blog/${project.slug}`)">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300">
          {{ project.name }}
        </h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-600 dark:text-gray-300">
        <small class="text-gray-500 dark:text-gray-400 block">
          By {{ project.user?.name }} | {{ project.createdAt }}
        </small>
        {{ project.description }}
      </p>
    </div>
  </article>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const props = defineProps<{
  project: Post
}>()
</script>