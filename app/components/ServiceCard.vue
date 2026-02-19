<template>
  <div class="p-12 md:p-16 hover:bg-white/5 transition-colors group">
    <div class="mb-12">
      <div class="w-12 h-1 bg-accent/20 mb-8 group-hover:w-full transition-all duration-700"></div>
      <h4 class="text-3xl md:text-4xl font-bold tracking-tighter uppercase">{{ service.name }}</h4>
    </div>
    <p class="text-white/40 text-lg leading-relaxed group-hover:text-white transition-colors">
      {{ service.desc }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  service: Object
})
</script>
