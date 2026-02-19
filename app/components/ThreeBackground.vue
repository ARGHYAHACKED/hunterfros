<template>
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <TresCanvas clear-color="#0a0a0a">
      <TresPerspectiveCamera :position="[0, 0, 7]" />
      <Suspense>
        <ThreeScene v-if="isMounted" />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ThreeScene from './ThreeScene.vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
/* Styles if needed */
</style>



