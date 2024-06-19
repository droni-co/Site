<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          {{ doc?.title }}
        </h1>
        <h4>{{ doc?.subtitle }}</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto">
      <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8">
        <ContentDoc />
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()
const { data:doc } = await useAsyncData('page-data', () => queryContent(route.fullPath).findOne())
</script>