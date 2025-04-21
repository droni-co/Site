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
        <NuxtLink to="/codelab/desafios" class="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-lg font-semibold text-gray-800">Suma de dos números</h2>
          <p class="text-gray-600">Dada una matriz de números enteros y un objetivo entero, devuelve los índices de los dos números tales que sumen el objetivo.</p>
          <p class="text-gray-500 mt-2">Estamos construyendo esto</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// const filters = ref({ page: 1, itemsPerPage: 12 })
// const challenges = ref(
//   (await $fetch<Pagination<Post[]>>(`/api/appi/codevs/challenges?perPage=${filters.value.itemsPerPage}`))
//   ?? { data: []}
// )

</script>