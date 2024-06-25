<template>
  <footer class="bg-gray-300 
    text-gray-700
    dark:bg-gray-900
    ">
    <div class="container mx-auto py-6 px-3 text-center">
      <p class="text-sm">
        <i class="i-mdi-copyleft"></i> 2024 {{ $t('footer.copy') }}.
        <NuxtLink
          :to="localePath('/legal')"
          title="Legal">
          Legal
        </NuxtLink>
      </p>
      <a
        href="https://twitter.com/droni_co"
        class="transition
          inline-block
          p-3
          text-blue-400 
          hover:text-blue-300
          text-2xl">
        <i class="i-mdi-twitter"></i>
      </a> 
      <a
        href="https://www.facebook.com/fan.droni.co/"
        class="transition
          inline-block
          p-3
          text-blue-400 
          hover:text-blue-300
          text-2xl">
        <i class="i-mdi-facebook"></i>
      </a>
      <a href="https://co.linkedin.com/company/droni-co"
        class="transition
          inline-block
          p-3
          text-blue-400 
          hover:text-blue-300
          text-2xl">
        <i class="i-mdi-linkedin"></i>
      </a>
      <a href="https://discord.gg/paaFehun"
        class="transition
          inline-block
          p-3
          text-blue-400 
          hover:text-blue-300
          text-2xl">
        <i class="i-mdi-discord"></i>
      </a>
    </div>
  </footer>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
</script>