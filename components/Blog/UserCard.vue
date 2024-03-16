<template>
  <div class="shadow-lg bg-white rounded md:flex dark:bg-slate-900">
    <NuxtImg
      :src="picture"
      class="w-20 object-cover rounded-s"
      alt="doc.title" />
    <div class="p-2 grow">
      <h3 class="font-bold">
        {{ title }}
      </h3>
      <p class="text-slate-600">
        {{ subtitle }}
      </p>
    </div>
    <div class="align-bottom">
      <a :href="link" target="_blank" :title="title" class="block p-2">
        <i class="i-mdi-open-in-new text-2xl"></i>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  picture: String,
  link: String
})
</script>