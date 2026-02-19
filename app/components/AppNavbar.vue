<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-expo"
    :class="{ 'py-6 bg-background/90 backdrop-blur-xl border-b border-white/5': scrolled, 'py-10 bg-transparent': !scrolled }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold tracking-tighter group flex items-center gap-2 relative z-50">
        <span class="w-2 h-2 bg-accent rounded-full group-hover:scale-[3] transition-transform duration-500"></span>
        HUNTER<span class="text-accent underline decoration-accent/30 underline-offset-4">FOSS</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-12 items-center">
        <NuxtLink 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent transition-colors relative group overflow-hidden"
          active-class="text-accent"
        >
          <span class="block transition-transform duration-500 group-hover:-translate-y-full">{{ link.name }}</span>
          <span class="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-white">{{ link.name }}</span>
        </NuxtLink>
        
        <button class="relative px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full overflow-hidden group">
          <span class="relative z-10 group-hover:text-white transition-colors duration-500">Start a Project</span>
          <div class="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
        </button>
      </div>

      <!-- Mobile Toggle -->
      <button @click="toggleMenu" class="md:hidden z-50 flex items-center gap-3 group relative overflow-hidden h-10 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        <span class="text-[10px] uppercase tracking-widest font-bold text-white/70 group-hover:text-white transition-colors">
          {{ mobileMenuOpen ? 'Close' : 'Menu' }}
        </span>
        <div class="w-6 flex flex-col items-end gap-1.5">
          <div class="h-0.5 bg-white transition-all duration-500 ease-expo" :class="mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'"></div>
          <div class="h-0.5 bg-white transition-all duration-500 ease-expo" :class="mobileMenuOpen ? 'w-0 opacity-0' : 'w-3'"></div>
          <div class="h-0.5 bg-white transition-all duration-500 ease-expo" :class="mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'"></div>
        </div>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      ref="mobileMenuRef"
      class="fixed inset-0 bg-background flex flex-col justify-center items-center z-40 px-6 translate-y-full invisible pointer-events-none"
    >
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div class="flex flex-col items-center space-y-4 md:space-y-6">
        <NuxtLink 
          v-for="(link, i) in links" 
          :key="link.path" 
          :to="link.path"
          @click="toggleMenu"
          class="mobile-link text-5xl md:text-7xl font-bold tracking-tighter hover:italic hover:text-accent transition-all duration-300 transform-gpu opacity-0 pointer-events-none"
          active-class="text-accent italic"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <div class="mobile-social absolute bottom-12 md:bottom-20 flex space-x-8 md:space-x-10 text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 opacity-0 pointer-events-none">
        <a href="#" class="hover:text-white transition-colors">Instagram</a>
        <a href="#" class="hover:text-white transition-colors">Behance</a>
        <a href="#" class="hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const mobileMenuRef = ref(null)
const getLenis = inject('lenis', () => null)

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    scrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return

  window.addEventListener('scroll', handleScroll)

  // Initialize GSAP timeline for mobile menu
  if (mobileMenuRef.value) {
    menuTl = gsap.timeline({ paused: true })

    menuTl.set(mobileMenuRef.value, { autoAlpha: 1 }) // This sets visibility to visible

    menuTl.to(mobileMenuRef.value, {
      y: 0,
      duration: 1.2,
      ease: 'expo.inOut'
    })

    menuTl.to(mobileMenuRef.value, {
      pointerEvents: 'auto',
      duration: 0
    }, '<')

    menuTl.fromTo('.mobile-link', 
      { y: 100, opacity: 0, rotate: 5, pointerEvents: 'none' },
      { y: 0, opacity: 1, rotate: 0, duration: 1, stagger: 0.1, ease: 'expo.out', pointerEvents: 'auto' },
      '-=0.6'
    )

    menuTl.fromTo('.mobile-social',
      { opacity: 0, y: 20, pointerEvents: 'none' },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', pointerEvents: 'auto' },
      '-=0.4'
    )
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
  if (menuTl) {
    menuTl.kill()
  }
})

const toggleMenu = () => {
  if (!menuTl) return
  
  mobileMenuOpen.value = !mobileMenuOpen.value
  const lenis = getLenis()
  
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    if (lenis) lenis.stop()
    menuTl.play()
  } else {
    document.body.style.overflow = ''
    if (lenis) lenis.start()
    menuTl.reverse()
  }
}
</script>

<style scoped>
.ease-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

/* Ensure mobile links are visible for animation */
.mobile-link {
  display: block;
}
</style>

