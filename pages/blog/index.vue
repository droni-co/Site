<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          {{ t('blog.title') }}
        </h1>
        <h4>{{ t('blog.subtitle') }}</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: `${t('blog.title')} | ${t('blog.subtitle')}`,
  description: t('blog.description'),
  ogImage: '/assets/img/home/heroKosante.webp'
})
</script>