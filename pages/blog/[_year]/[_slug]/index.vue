<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          {{ post?.title }}
        </h1>
        <h4>{{ post?.description }}</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ContentDoc />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { data:post } = await useAsyncData('home', () => queryContent(route.fullPath).findOne())
</script>