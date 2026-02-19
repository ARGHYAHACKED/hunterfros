<template>
  <NuxtLink 
    :to="`/work/${work.slug}`"
    class="group block relative overflow-hidden bg-[#111] aspect-[4/5] project-card"
  >
    <div class="absolute inset-0 card-image-wrap h-[120%] -top-[10%]">
      <img 
        ref="cardImage"
        :src="work.image" 
        :alt="work.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 card-parallax-img"
      />
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    
    <div class="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
      <div class="overflow-hidden mb-2">
        <p class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">{{ work.category }}</p>
      </div>
      <div class="overflow-hidden">
        <h4 class="text-3xl md:text-4xl font-bold tracking-tighter leading-none group-hover:text-accent transition-colors duration-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">{{ work.title }}</h4>
      </div>
      <div class="w-16 h-[1px] bg-accent mt-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 delay-200"></div>
    </div>

    <!-- Interactive Border -->
    <div class="absolute inset-0 border border-white/5 group-hover:border-accent/30 transition-colors duration-500 pointer-events-none"></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  work: Object
})
</script>
