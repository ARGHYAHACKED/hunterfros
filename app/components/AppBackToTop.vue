<template>
  <button 
    @click="scrollToTop"
    class="fixed bottom-10 right-10 z-50 w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 group"
    :class="{ 'opacity-100 pointer-events-auto': show }"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const show = ref(false)
const getLenis = inject('lenis', () => null)

const scrollToTop = () => {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(0)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  show.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
