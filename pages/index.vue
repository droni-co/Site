<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start flex-col md:flex-row flex md:pt-14">
        <div class="-mt-20 md:-mt-0 py-12 md:py:20 lg:w-1/2">
          <h2 class="text-gray-400
            text-2xl
            md:text-4xl">
            {{ t('header.title') }}
          </h2>
          <h1 class="text-balance
            font-extrabold 
            text-gray-800
            drop-shadow-lg
            dark:text-gray-50
            text-3xl
            md:text-6xl">
            {{ t('header.subtitle') }}
          </h1>
          <p class="text-xl my-5">
            {{ t('header.description') }} 
          </p>
          <UiAction 
            :to="localePath('/about')"
            :title="t('header.action')">
            <i class="i-mdi-rocket-launch-outline me-3"></i> 
            {{ t('header.action') }}
          </UiAction>
        </div>
        <div class="lg:w-1/2 order-first md:order-1 pt-10 md:pt-0">
          <img src="~/assets/img/home/heroKosante.webp" class="aspect-[4/3]" alt="Kosante | Last project" />
        </div>
      </div>
    </UiHero>
    <!-- Blog List -->
    <section class="py-8">
      <div class="container mx-auto px-2 md:px-auto">
        <h3 class="
          text-center
          text-4xl
          font-extrabold
          mb-3
          md:mb-6
          text-gray-800
          dark:text-gray-100
          drop-shadow-lg">
          {{ t('blog.lastPosts') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BlogCard v-for="lastPost in lastPosts" :key="lastPost.id" :blogPost="lastPost" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()
const { t } = useI18n()
const { data:lastPosts } = await useAsyncData('hddddome', () => queryContent(locale.value === 'es' ? '/es/blog' : '/blog').sort({ created_at: -1 }).limit(4).find())
</script>
