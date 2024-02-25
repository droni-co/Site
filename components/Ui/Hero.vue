<template>
  <div class="animatedBg bg-gradient-to-br
    from-slate-100 via-cyan-100 to-purple-100
     dark:from-slate-900 dark:via-cyan-800 dark:to-purple-900">
    <div class="container mx-auto">
      <slot /> 
    </div>
  </div>
</template>
<script setup>
const colorMode = useColorMode()
</script>
<style scoped>
.animatedBg {
  animation: gradient 60s ease infinite;
  background-size: 400% 400%;
}

@keyframes gradient {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
</style>