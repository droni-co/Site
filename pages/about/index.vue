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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2">
          <article class="prose lg:prose-xl max-w-full dark:prose-invert md:my-8">
            <ContentDoc />
          </article>
        </div>
        <div class="md:col-span-1">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-50 drop-shadow-lg mt-8 mb-3">
            El equipo
          </h2>
          <BlogUserCard
            class="mb-2"
            title="Gustavo Barragán"
            subtitle="Ingeniero de Software"
            picture="/attachments/gustavo.barragan.webp"
            link="https://twitter.com/kalvinmanson"/>
          <BlogUserCard
            class="mb-2"
            title="Andrea Diaz"
            subtitle="Diseñadora Gráfica"
            picture="/attachments/andrea.diaz.webp"
            link="https://www.facebook.com/andrea.d.mateus"/>
          <BlogUserCard
            class="mb-2"
            title="Manuel Laverde"
            subtitle="Copywriter"
            picture="/attachments/manuel.laverde.webp"
            link="https://confesionesdeuniletrado.blogspot.com/"/>

          <!-- <h2 class="text-3xl font-extrabold text-gray-800 dark:text-gray-50 drop-shadow-lg">
            {{ t('about.who') }}
          </h2>
          <p class="text-xl my-5">
            {{ t('about.description') }}
          </p>
          <UiAction 
            :to="localePath('/contact')"
            :title="t('about.action')">
            <i class="i-mdi-email-outline me-3"></i> 
            {{ t('about.action') }}
          </UiAction> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()
const { data:doc } = await useAsyncData('page-data', () => queryContent(route.fullPath).findOne())
</script>