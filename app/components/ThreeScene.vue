<template>
  <TresGroup>
    <TorusKnot :args="[2.5, 0.4, 256, 64]" ref="knotRef">
      <TresMeshStandardMaterial 
        :color="'#e2ff00'" 
        :wireframe="true"
        :transparent="true"
        :opacity="0.3"
        :emissive="'#e2ff00'"
        :emissive-intensity="1"
      />
    </TorusKnot>

    <!-- Floating Glowing Orbs -->
    <Sphere 
      v-for="(orb, i) in orbPositions" 
      :key="i" 
      :args="[0.1, 32, 32]" 
      :position="orb"
    >
       <TresMeshStandardMaterial 
         :color="'#e2ff00'" 
         :emissive="'#e2ff00'" 
         :emissive-intensity="3" 
         :transparent="true" 
         :opacity="0.6" 
       />
    </Sphere>

    <TresAmbientLight :intensity="1" />
    <TresPointLight :position="[5, 5, 5]" :color="'#e2ff00'" :intensity="5" />
    <TresPointLight :position="[-5, -5, 5]" :color="'#ffffff'" :intensity="2" />
  </TresGroup>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRenderLoop } from '@tresjs/core'
import { TorusKnot, Sphere } from '@tresjs/cientos'
import { useWindowScroll } from '@vueuse/core'

const knotRef = ref()
const { y } = useWindowScroll()

// Fixed positions to avoid hydration mismatch
const orbPositions = [
  [4, 2, -5],
  [-5, -3, -2],
  [2, -5, -8],
  [-3, 4, -4],
  [6, -1, -3]
]

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta, elapsed }) => {
  if (knotRef.value) {
    // Continuous rotation
    knotRef.value.rotation.y += delta * 0.15
    knotRef.value.rotation.x += delta * 0.08
    
    // React to scroll
    const scrollFactor = y.value * 0.001
    knotRef.value.position.y = -scrollFactor * 2
    knotRef.value.scale.set(1 + scrollFactor * 0.5, 1 + scrollFactor * 0.5, 1 + scrollFactor * 0.5)
    
    // Subtle breathing effect
    const pulse = Math.sin(elapsed * 2) * 0.1
    if (knotRef.value.material) {
      knotRef.value.material.opacity = 0.3 + pulse
    }
  }
})
</script>
