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
        <BlogCard v-for="post in posts.data" :key="post.slug" :post="post" />
      </div>
      <div class="text-center py-4">
        Preparing Pagination  
      </div>
      <input type="button" @click="morePosts" value="Load more" class="btn btn-primary" />
      {{ filters.page }}
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const { locale } = useI18n()
const filters = ref({ page: 1, limit: 12 })

const morePosts = () => {
  filters.value.page++
  getPosts({npage: filters.value.page, nperPage: filters.value.limit})  
}

const posts = ref(
  (await useFetch<Pagination<Post[]>>(`/api/appi/posts?limit=${filters.value.limit}&lang=${locale.value}`)).data.value
  ?? { data: []}
)
const getPosts = async ({npage=1, nperPage=20}) => {
  filters.value = { limit: nperPage, page: npage }
  const data = await $fetch<Pagination<Post[]>>(`/api/appi/posts?limit=${filters.value.limit}&lang=${locale.value}&page=${filters.value.page}`)
  posts.value = data ?? { data: []}  
}

useSeoMeta({
  title: t('blog.title'),
  ogTitle: t('blog.title'),
  description: t('blog.subtitle'),
  ogDescription: t('blog.subtitle'),
  ogImage: 'https://dronico.nyc3.digitaloceanspaces.com/4ebaccf5-b863-4f12-aa49-9bbe0e1844e2/db7d4d54-7354-4421-9682-d1b75b1f1413/74529-dronico-card.png.png',
  twitterCard: 'summary_large_image',
})
</script>