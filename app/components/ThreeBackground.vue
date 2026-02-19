<template>
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <TresCanvas clear-color="#0a0a0a" @ready="onCanvasReady">
      <TresPerspectiveCamera :position="[0, 0, 7]" />
      
      <Suspense>
        <ThreeScene v-if="canvasReady" />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ThreeScene from './ThreeScene.vue'

const canvasReady = ref(false)

const onCanvasReady = () => {
  canvasReady.value = true
}
</script>

<style scoped>
/* Styles if needed */
</style>



