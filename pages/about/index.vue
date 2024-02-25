<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start py-6">
        <h1 class="text-balance lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
          {{ t('about.title') }}
        </h1>
        <h4>{{ t('about.subtitle') }}</h4>
      </div>
    </UiHero>
    <div class="container mx-auto px-2 md:px-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:col-span-1">
          
        </div>
        <div class="md:col-span-1">
          <h2 class="text-3xl font-extrabold text-gray-800 dark:text-gray-50 drop-shadow-lg">
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
          </UiAction>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>