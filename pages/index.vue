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
            to="https://discord.gg/gSYN7J2x"
            :title="t('header.action')">
            <i class="i-mdi-discord me-3"></i>
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
          <BlogCard v-for="lastPost in lastPosts?.data" :key="lastPost.id" :post="lastPost" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n()
const { t } = useI18n()
const { data:lastPosts } = useFetch<Pagination<Post[]>>(`/api/appi/posts?limit=4&lang=${locale.value}`)

const route = useRoute()
useSeoMeta({
  title: t('header.title'),
  ogTitle: t('header.title'),
  description: t('header.subtitle'),
  ogDescription: t('header.subtitle'),
  ogImage: 'https://dronico.nyc3.digitaloceanspaces.com/4ebaccf5-b863-4f12-aa49-9bbe0e1844e2/db7d4d54-7354-4421-9682-d1b75b1f1413/74529-dronico-card.png.png',
  twitterCard: 'summary_large_image',
})
</script>
