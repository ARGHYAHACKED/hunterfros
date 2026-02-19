<template>
  <Transition name="loader-panel" @after-leave="$emit('finish')">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-[2000] bg-black flex flex-col justify-center items-center overflow-hidden"
    >
      <div class="relative flex flex-col items-center w-full max-w-lg px-10">
        <!-- Brand Name -->
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-white mb-12 select-none">
          HUNTER <span class="text-accent">FOSS</span>
        </h1>
        
        <!-- Progress Bar Container -->
        <div class="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
          <div 
            class="absolute top-0 left-0 h-full bg-accent shadow-[0_0_15px_#e2ff00]"
            :style="{ width: `${progress}%`, transition: 'width 0.1s ease-out' }"
          ></div>
        </div>

        <!-- Progress Info -->
        <div class="flex justify-between w-full text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
          <span class="animate-pulse">Architecting Digital Impact</span>
          <span class="text-accent">{{ Math.round(progress) }}%</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['finish'])
const isVisible = ref(true)
const progress = ref(0)
let rafId = null

console.log('AppLoader: Script setup executed')

console.log('AppLoader: Script Setup Executed')
if (process.server) console.log('AppLoader: Running on SERVER')
if (process.client) console.log('AppLoader: Running on CLIENT')

const DURATION = 2800 // ms
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

onMounted(() => {
  if (!process.client) return
  
  console.log('AppLoader: onMounted fired in BROWSER')
  
  // Guard against double start or SSR leak
  if (rafId) return

  let start = performance.now()
  console.log('AppLoader: Start time:', start)

  const tick = (now) => {
    let elapsed = now - start
    let t = Math.min(elapsed / DURATION, 1)
    
    // Calculate eased progress
    progress.value = easeOutCubic(t) * 100
    
    // Log every 10% or so
    const rounded = Math.round(progress.value)
    if (rounded % 10 === 0 && rounded !== 0) {
       console.log(`AppLoader: ${rounded}%`)
    }

    if (t < 1) {
      rafId = requestAnimationFrame(tick)
    } else {
      console.log('AppLoader: Animation Loop Finished')
      setTimeout(() => {
        console.log('AppLoader: Setting isVisible to false')
        isVisible.value = false
      }, 500)
    }
  }

  rafId = requestAnimationFrame(tick)
  console.log('AppLoader: rafId created:', rafId)
})

onUnmounted(() => {
  console.log('AppLoader: Unmounted')
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.loader-panel-leave-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}
.loader-panel-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>

