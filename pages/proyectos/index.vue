<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          Proyectos
        </h1>
        <h4>Hemos trabajado en muchos proyectos, aquí tienes algunos de ellos.</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto py-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectsCard v-for="project in projects.data" :key="project.slug" :project="project" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const projects = await $fetch<Pagination<Post[]>>(`/api/appi/posts?limit=50&category=proyectos`) ?? { data: []}

</script>
