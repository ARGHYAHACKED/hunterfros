<template>
  <div class="pt-40 pb-20 px-6">
    <div class="container mx-auto">
      <h1 class="text-6xl md:text-9xl font-bold tracking-tighter mb-20">WORKS</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <WorkCard 
          v-for="(work, index) in allWork" 
          :key="index"
          :work="work"
          class="h-[600px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('h1', { y: 100, opacity: 0, duration: 1.5, ease: 'power4.out' })
  gsap.from('.grid > *', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.5
  })
})

const allWork = [
  { title: 'Lumina Branding', category: 'Visual Identity', slug: 'lumina-branding', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200' },
  { title: 'Aether OS', category: 'UI/UX Design', slug: 'aether-os', image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=1200' },
  { title: 'Neon Pulse', category: 'Motion Graphics', slug: 'neon-pulse', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200' },
  { title: 'Vanguard Mob', category: 'Web App', slug: 'vanguard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200' },
]
</script>
