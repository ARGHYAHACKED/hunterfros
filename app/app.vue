<template>
  <div class="min-h-screen bg-background text-white selection:bg-accent selection:text-black">
    <div>
      <AppNavbar />
      
      <main>
        <NuxtPage />
      </main>

      <AppFooter />
      <AppBackToTop />
    </div>
    
    <ClientOnly>
      <ThreeBackground />
    </ClientOnly>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import Lenis from 'lenis'

const isLoaded = ref(true)
let lenis = null

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

// Provide loaded state and lenis globally
provide('isSiteLoaded', isLoaded)
provide('lenis', () => lenis)
</script>


<style>
/* Global styles are in assets/css/main.css */
</style>
