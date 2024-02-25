<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6 md:flex">
        <div class="grow my-auto">
          <h1 class="text-balance text-3xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ post?.title }}
          </h1>
          <h4 class="py-2 text-balance">{{ post?.description }}</h4>
          <h5 class="inline-block">
            <i class="i-mdi-account"></i>
            {{ post?.author }}
          </h5>
          <h5 class="inline-block">
            <i class="i-mdi-calendar"></i>
            {{ post?.created_at }}
          </h5>
        </div>
        <div>
          <img :src="post?.image" class="max-w-80 mx-auto bg-slate-100 dark:bg-slate-700 shadow-lg p-2 my-2 rounded aspect-[4/3]" alt="Kosante | Last project" />
        </div>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <ContentDoc class="mdFormat" />
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { data:post } = await useAsyncData(route.path, () => queryContent(route.fullPath).findOne())
</script>
<style>
.mdFormat {
  h1 {
    font-size: 10em;
  }
}
</style>