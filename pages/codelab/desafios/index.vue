<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance text-xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          Desafios de programación
        </h1>
        <h4 class="text-balance text-sm lg:text-lg text-gray-800 drop-shadow-lg dark:text-gray-50">
          Mejora tus habilidades de programación y resuelve problemas interesantes.
        </h4>
      </div>
    </UiHero>
    <div class="container mx-auto py-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <NuxtLink
          v-for="challenge in challenges?.data ?? []"
          :key="challenge.slug"
          :to="`/codelab/desafios/${challenge.slug}`"
          class="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ challenge.name }}
          </h2>
          <p class="text-gray-600">
            {{ challenge.description }}
          </p>
          <p class="text-gray-500 mt-2">Estamos construyendo esto</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Desafios de programación | Droni.co',
  ogTitle: 'Desafios de programación | Droni.co',
  description: 'Mejora tus habilidades de programación y resuelve problemas interesantes.',
  ogDescription: 'Mejora tus habilidades de programación y resuelve problemas interesantes.',
  ogImage: 'https://dronico.nyc3.digitaloceanspaces.com/4ebaccf5-b863-4f12-aa49-9bbe0e1844e2/db7d4d54-7354-4421-9682-d1b75b1f1413/74529-dronico-card.png.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://droni.co/codelab/desafios'
})
const filters = ref({ page: 1, itemsPerPage: 12 })
const challenges = ref(
  (await useFetch<Pagination<Challenge[]>>(`/api/appi/codevs/challenges?perPage=${filters.value.itemsPerPage}`)).data
  ?? { data: [] }
)

</script>