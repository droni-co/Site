<template>
<div class="relative inline-flex  group">
  <div
    class="absolute
    transitiona-all
    duration-1000
    opacity-70 
    -inset-px
    bg-gradient-to-r
    from-[#44BCFF] via-[#FF44EC] to-[#FF675E]
    rounded-xl
    blur-lg
    group-hover:opacity-100
    group-hover:-inset-1
    group-hover:duration-200
    animate-tilt">
  </div>
  <NuxtLink :to="props.to"
    :title="props.title"
    class="relative
    inline-flex
    items-center
    justify-center
    px-8 py-2
    text-lg
    font-bold
    text-gray-100
    dark:text-gray-800
    transition-all
    duration-200
    bg-gray-900
    dark:bg-gray-100
    rounded-xl
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-gray-900"
    role="button">
    <slot />
  </NuxtLink>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  to: string,
  title: string
}>()
</script>