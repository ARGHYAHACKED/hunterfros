<template>
  <div class="pt-40 pb-20">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="max-w-4xl mb-32">
        <h1 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold">The Studio</h1>
        <h2 class="text-6xl md:text-[8vw] font-bold tracking-tighter leading-[0.9] mb-12">
          WE BUILD <br /> <span class="italic text-white/20">LEGACIES.</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p class="text-2xl leading-tight">
            Hunterfoss is a modular creative studio working at the intersection of brand strategy and digital performance.
          </p>
          <p class="text-lg text-white/50 leading-relaxed">
            Founded in 2024, we've helped dozens of startups and established enterprises redefine their digital presence through rigorous design systems and emotive storytelling.
          </p>
        </div>
      </div>

      <!-- Values -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-40">
        <div v-for="(v, i) in values" :key="i" class="p-10 bg-black hover:bg-white/5 transition-colors">
          <span class="text-accent text-xs font-bold mb-4 block">0{{ i + 1 }}</span>
          <h4 class="text-xl font-bold mb-4 uppercase tracking-tighter">{{ v.title }}</h4>
          <p class="text-sm text-white/40">{{ v.desc }}</p>
        </div>
      </div>

      <!-- Process -->
      <div class="mb-40">
        <h3 class="text-4xl font-bold tracking-tighter mb-20 uppercase">How we work</h3>
        <div class="space-y-0">
          <div v-for="(p, i) in process" :key="i" class="group flex flex-col md:flex-row border-t border-white/10 py-12 hover:bg-white/5 px-6 transition-colors">
            <span class="text-4xl font-bold text-white/10 group-hover:text-accent transition-colors mr-20 w-16">0{{ i + 1 }}</span>
            <div class="flex-1">
              <h4 class="text-2xl font-bold uppercase tracking-tight mb-4">{{ p.name }}</h4>
              <p class="text-white/40 max-w-xl">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-accent p-20 text-black text-center">
        <h3 class="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Let's build something unforgettable</h3>
        <NuxtLink to="/contact" class="inline-block px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          Get in Touch
        </NuxtLink>
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
  if (typeof window === 'undefined') return

  const container = document.querySelector('.container')
  if (container) {
    gsap.from('.container > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
      }
    })
  }
})

const values = [
  { title: 'Strategy First', desc: 'We don\'t start designing until we understand your business goals.' },
  { title: 'Radical Simplicity', desc: 'Removing the noise to let the core message shine through.' },
  { title: 'Human Centered', desc: 'Building for people, not just for screen pixels.' },
  { title: 'Future Proof', desc: 'Technologies and designs that age gracefully over time.' },
]

const process = [
  { name: 'Discovery', desc: 'Deep dive into your industry, competitors, and target audience needs.' },
  { name: 'Design', desc: 'Iterative design process from wireframes to high-fidelity prototypes.' },
  { name: 'Build', desc: 'Clean, performant code that brings the vision to life exactly as intended.' },
  { name: 'Launch', desc: 'Meticulous deployment and post-launch monitoring for optimal success.' },
]
</script>
