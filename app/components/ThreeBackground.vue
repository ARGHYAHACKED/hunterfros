<template>
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <!-- 1. Wrap in ClientOnly to prevent SSR leakage entirely -->
    <ClientOnly>
      <TresCanvas clear-color="#0a0a0a" window-size>
        <!-- 2. Ensure the camera is ready and active -->
        <TresPerspectiveCamera 
          :position="[0, 0, 7]" 
          :fov="45"
          :look-at="[0, 0, 0]"
        />
        
        <!-- 3. Move lighting inside or ensure it exists -->
        <TresAmbientLight :intensity="0.5" />
        <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />

        <Suspense>
          <ThreeScene />
        </Suspense>
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// Explicit import for stability in production builds
import ThreeScene from './ThreeScene.vue'

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>

<style scoped>
/* Ensure the canvas takes up the container */
canvas {
  display: block;
}
</style>