<template>
  <div
    class="relative grid select-none items-center whitespace-nowrap rounded-full px-3 py-1.5 font-sans text-xs font-bold uppercase">
    <div class="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4">
      <img
        :src="user.avatar"
        :alt="user.name"
        class="relative inline-block h-full w-full -translate-x-0.5 !rounded-full  object-cover object-center" />
    </div>
    <span class="ml-[18px]">
      <p class="block text-sm antialiased font-medium leading-none capitalize">
        {{ user.name }}
      </p>
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  user: User
}>()
</script>