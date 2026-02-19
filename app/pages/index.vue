<template>
  <div class="relative bg-background text-white selection:bg-accent selection:text-black min-h-screen">
    <!-- Grain Overlay -->
    <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-center pt-20 px-6 text-center relative z-10">
      <div 
        ref="heroHeadingWrap"
        class="overflow-hidden mb-8"
      >
        <h1 
          ref="heroTitle"
          class="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter"
        >
          WE ARCHITECT <br />
          <span class="text-accent italic">CINEMATIC</span> <br />
          EXPERIENCES.
        </h1>
      </div>
      
      <p 
        ref="heroSub"
        class="text-lg md:text-xl text-white/40 max-w-xl mb-12 font-light leading-relaxed"
      >
        A premium storytelling graphic design agency building high-end digital solutions for visionary brands who refuse to be forgotten.
      </p>

      <div ref="heroButtons" class="flex flex-col md:flex-row gap-6 mb-20">
        <NuxtLink to="/work" class="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent hover:scale-105 transition-all duration-300 rounded-full text-xs">
          Explore Projects
        </NuxtLink>
        <NuxtLink to="/contact" class="px-12 py-5 border border-white/10 font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 rounded-full text-xs">
          The Studio
        </NuxtLink>
      </div>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span class="text-[10px] uppercase tracking-[0.4em] font-bold rotate-90 origin-left translate-x-1">Scroll</span>
        <div class="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="py-60 px-6 flex items-center justify-center relative overflow-hidden bg-black/40">
      <div class="container max-w-5xl">
        <h2 
          ref="narrativeText"
          class="text-4xl md:text-7xl font-bold tracking-tighter leading-tight text-white/20 relative"
        >
          <span class="block mb-4">Most brands are invisible.</span>
          <span class="relative inline-block text-fill-container">
            <span class="text-fill-base">In a world drowned in noise,</span>
            <span class="text-fill-overlay text-accent" ref="textFillOverlay1">In a world drowned in noise,</span>
          </span>
          <br />
          <span class="relative inline-block text-fill-container">
            <span class="text-fill-base">silence is often the loudest thing you can offer.</span>
            <span class="text-fill-overlay text-accent" ref="textFillOverlay2">silence is often the loudest thing you can offer.</span>
          </span>
          <br />
          <span class="block mt-4 italic text-white/10">We help you find your voice.</span>
        </h2>
      </div>
    </section>

    <!-- Cinematic Project Spotlight -->
    <section ref="spotlightSection" class="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <div 
        ref="spotlightImg"
        class="absolute inset-0 z-0 scale-125"
      >
        <img :src="spotlightProject.image" class="w-full h-full object-cover opacity-40" alt="Spotlight Project" />
      </div>
      
      <div class="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div class="overflow-hidden mb-6">
          <span class="block text-xs uppercase tracking-[0.5em] font-bold text-accent animate-reveal">Spotlight Project</span>
        </div>
        <h3 class="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.8] mix-blend-difference overflow-hidden">
          <span class="block animate-reveal delay-100">{{ spotlightProject.title }}</span>
        </h3>
        <p class="max-w-2xl text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 animate-reveal delay-200">
          {{ spotlightProject.description }}
        </p>
        <div class="flex items-center gap-10 animate-reveal delay-300">
           <div class="flex flex-col items-start">
             <span class="text-[10px] uppercase tracking-widest text-white/20 mb-2">Category</span>
             <span class="text-sm font-bold uppercase">{{ spotlightProject.category }}</span>
           </div>
           <div class="w-px h-10 bg-white/10"></div>
           <div class="flex flex-col items-start">
             <span class="text-[10px] uppercase tracking-widest text-white/20 mb-2">Year</span>
             <span class="text-sm font-bold">{{ spotlightProject.year }}</span>
           </div>
        </div>
      </div>
      
      <div class="absolute bottom-20 left-10 flex flex-col gap-4 text-[10px] font-bold tracking-[0.3em] uppercase opacity-20 origin-left -rotate-90">
        <span>Storytelling</span>
        <span>Impact</span>
        <span>Aesthetics</span>
      </div>
    </section>

    <!-- Auto Carousel -->
    <section class="py-40 bg-white/5 overflow-hidden border-y border-white/5">
      <div class="flex flex-col gap-12">
        <div class="px-6 container mx-auto mb-10">
          <h2 class="text-xs uppercase tracking-[0.4em] text-accent mb-4 font-bold">Trusted By</h2>
          <h3 class="text-4xl md:text-6xl font-bold tracking-tighter">GLOBAL VISIONARIES.</h3>
        </div>

        <div class="flex overflow-hidden group border-y border-white/5 py-10">
          <div class="flex space-x-20 animate-marquee-slow whitespace-nowrap items-center">
            <div v-for="n in 10" :key="n" class="flex items-center gap-6">
               <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-accent">0{{ n }}</div>
               <span class="text-4xl md:text-6xl font-bold opacity-30 uppercase tracking-tighter hover:opacity-100 transition-opacity cursor-pointer">Brand Experience {{ n }}</span>
               <span class="text-accent text-3xl">✦</span>
            </div>
          </div>
          <div class="flex space-x-20 animate-marquee-slow whitespace-nowrap items-center" aria-hidden="true">
            <div v-for="n in 10" :key="n" class="flex items-center gap-6">
               <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-accent">0{{ n }}</div>
               <span class="text-4xl md:text-6xl font-bold opacity-30 uppercase tracking-tighter hover:opacity-100 transition-opacity cursor-pointer">Brand Experience {{ n }}</span>
               <span class="text-accent text-3xl">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Horizontal Scroll Showcase (Infinite Variant) -->
    <section ref="horizontalSection" class="relative bg-black py-40 overflow-hidden">
      <!-- Fixed Intro Column (Sticky when pinpointing) -->
      <div class="container mx-auto px-6 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Left Content - Fixed when scrolling section -->
          <div class="lg:col-span-4 sticky top-40 z-20 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/5">
            <span class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold block">Showcase</span>
            <h3 class="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-10 uppercase">Selected <br /> Works.</h3>
            <p class="text-white/40 text-lg font-light leading-relaxed mb-10">Curated projects where strategy meets high-resolution reality.</p>
            
            <NuxtLink to="/work" class="group flex flex-col items-start">
              <div class="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 mb-4 font-bold text-xl">→</div>
              <span class="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-accent transition-colors">Explore All Portfolio</span>
            </NuxtLink>
          </div>

          <!-- Right Content - Infinite Carousel -->
          <div class="lg:col-span-8 overflow-hidden">
            <div ref="horizontalTrigger" class="flex gap-8 w-max pr-[400px]">
              <!-- We clone the work items for infinite effect -->
              <div v-for="(work, index) in [...featuredWork, ...featuredWork]" :key="index" class="flex-shrink-0 w-[80vw] md:w-[600px] h-[70vh] project-card">
                <WorkCard :work="work" class="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-40 relative z-10 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           <div v-for="(stat, i) in stats" :key="i" class="p-10 border border-white/5 bg-white/[0.02] rounded-3xl group hover:border-accent/40 transition-colors">
              <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Value 0{{ i+1 }}</div>
              <div class="text-6xl font-bold tracking-tighter mb-4 group-hover:scale-110 transition-transform origin-left">{{ stat.value }}</div>
              <div class="text-white/40 font-light uppercase tracking-widest text-xs">{{ stat.label }}</div>
           </div>
        </div>
      </div>
    </section>

    <!-- Expertise -->
    <section class="py-40 bg-black relative z-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
          <div class="sticky top-40">
            <h2 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold">Expertise</h2>
            <h3 class="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9]">CRAFTING THE <br /> UNCONVENTIONAL.</h3>
            <p class="text-white/40 text-xl font-light leading-relaxed max-w-md">We specialize in creating visual identities and digital platforms that resonate with your audience and drive measurable results.</p>
          </div>
          <div class="grid grid-cols-1 gap-1">
            <div v-for="(service, index) in services" :key="index" class="group border-b border-white/10 py-16 flex justify-between items-start hover:px-8 transition-all duration-500 service-item-ref">
              <div class="max-w-md">
                <span class="text-[10px] uppercase tracking-widest text-accent font-bold mb-4 block">0{{ index + 1 }}</span>
                <h4 class="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">{{ service.name }}</h4>
                <p class="text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">{{ service.desc }}</p>
              </div>
              <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold">↗</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Process -->
    <section class="py-40 relative z-10 bg-white/[0.01]">
      <div class="container mx-auto px-6">
        <div class="mb-20">
          <h2 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold text-center">Our Methodology</h2>
          <h3 class="text-5xl md:text-7xl font-bold tracking-tighter text-center uppercase">The Hunterfoss <br /> Process.</h3>
        </div>
        
        <div class="max-w-4xl mx-auto relative">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div v-for="(step, i) in processSteps" :key="i" class="relative mb-20 md:mb-40 last:mb-0">
            <div class="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div :class="['w-full md:w-1/2 flex flex-col', i % 2 === 0 ? 'md:items-end md:text-right' : 'md:order-last']">
                <span class="text-8xl font-black text-white/5 leading-none mb-4">0{{ i + 1 }}</span>
                <h4 class="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">{{ step.title }}</h4>
                <p class="text-white/40 font-light leading-relaxed">{{ step.desc }}</p>
              </div>
              
              <!-- Timeline Dot -->
              <div class="absolute left-0 md:left-1/2 top-0 md:top-10 w-4 h-4 rounded-full bg-accent -translate-x-1/2 hidden md:block border-4 border-black box-content"></div>
              
              <div class="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Thinking -->
    <section class="py-40 bg-black relative z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <h2 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold">Insights</h2>
            <h3 class="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Latest <br /> Thinking.</h3>
          </div>
          <NuxtLink to="/news" class="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-accent transition-colors">
            Explore All Insights <span class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all">→</span>
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(item, i) in newsItems" :key="i" class="group cursor-pointer">
            <div class="aspect-[4/5] overflow-hidden rounded-3xl mb-8 relative">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full">Read Article</span>
              </div>
            </div>
            <div class="flex justify-between items-center mb-4">
              <span class="text-[10px] uppercase font-bold text-accent tracking-widest">{{ item.category }}</span>
              <span class="text-[10px] uppercase font-medium text-white/20 tracking-widest">{{ item.date }}</span>
            </div>
            <h4 class="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Impact Section -->
    <section class="py-60 px-6 text-center bg-accent text-black relative z-10 overflow-hidden">
      <!-- Background Text -->
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span class="text-[30vw] font-black leading-none whitespace-nowrap">HUNTERFOSS</span>
      </div>
      
      <div class="container mx-auto max-w-5xl relative">
        <h3 class="text-4xl md:text-[7vw] font-black tracking-tighter mb-16 leading-[0.85] uppercase">
          Ready to <br /> <span class="text-white italic">Architect</span> <br /> your impact?
        </h3>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
          <NuxtLink to="/contact" class="group relative px-16 py-8 bg-black text-white font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full text-sm overflow-hidden">
            <span class="relative z-10">Start a Project</span>
            <div class="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span class="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">Let's Talk</span>
          </NuxtLink>
          
          <NuxtLink to="/work" class="text-xs font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">
            Our Work →
          </NuxtLink>
        </div>
        
        <div class="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-black/10 pt-10 gap-6">
          <div class="text-[10px] uppercase tracking-[0.3em] font-bold">Based in London — Working Globally</div>
          <div class="flex gap-10">
            <a href="#" class="text-[10px] uppercase tracking-[0.3em] font-bold hover:underline">Instagram</a>
            <a href="#" class="text-[10px] uppercase tracking-[0.3em] font-bold hover:underline">LinkedIn</a>
            <a href="#" class="text-[10px] uppercase tracking-[0.3em] font-bold hover:underline">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { onMounted, ref, inject, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isSiteLoaded = inject('isSiteLoaded')

const heroTitle = ref()
const heroSub = ref()
const heroButtons = ref()
const narrativeText = ref()
const textFillOverlay1 = ref()
const textFillOverlay2 = ref()
const horizontalSection = ref()
const horizontalTrigger = ref()
const spotlightSection = ref()
const spotlightImg = ref()

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '25+', label: 'Design Awards' },
  { value: '12', label: 'Years Experience' },
  { value: '99%', label: 'Happy Clients' },
]

const featuredWork = [
  { title: 'Lumina Branding', category: 'Visual Identity', slug: 'lumina-branding', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Aether OS', category: 'UI/UX Design', slug: 'aether-os', image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Neon Pulse', category: 'Motion Graphics', slug: 'neon-pulse', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Vanguard Mob', category: 'Web App', slug: 'vanguard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
]

const services = [
  { name: 'Identity & Brand Strategy', desc: 'Decoding the DNA of your vision to build identities that command respect.' },
  { name: 'High-End Web Architecture', desc: 'Bespoke digital experiences focused on cinematic storytelling and flawless conversion.' },
  { name: 'Dynamic Motion Assets', desc: 'Bringing your story to life through rhythm and high-fidelity motion graphics.' },
  { name: 'UI/UX Ecosystems', desc: 'Intuitive interfaces built with the user journey at the absolute core.' },
]

const processSteps = [
  { title: 'Discovery & DNA', desc: 'We dive deep into your brand identity to uncover the unique storytelling elements that set you apart.' },
  { title: 'Cinematic Strategy', desc: 'Crafting a visual and technical roadmap that ensures your brand commands attention across all platforms.' },
  { title: 'High-Fidelity Design', desc: 'Bespoke UI/UX and visual assets built with meticulous attention to detail and premium aesthetics.' },
  { title: 'Technical Excellence', desc: 'Seamlessly deploying high-performance digital platforms using cutting-edge technologies.' },
]

const newsItems = [
  { title: 'The Future of Minimalist Branding', category: 'Thinking', date: 'Feb 12, 2026', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80' },
  { title: 'Why 3D is Redefining Web UX', category: 'Innovation', date: 'Feb 10, 2026', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80' },
  { title: 'The Power of Negative Space', category: 'Design', date: 'Feb 05, 2026', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80' },
]

const spotlightProject = {
  title: 'Eclipse High-Res',
  category: 'Cinematic Branding',
  year: '2026',
  image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80',
  description: 'A study in dark minimalist aesthetics and high-performance digital presence for the next generation of luxury motorsports.'
}

const startHeroAnimation = () => {
  // Hero Animation Entrance
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.8 } })
  
  tl.fromTo(heroTitle.value, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.5 })
    .fromTo(heroSub.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=1.4')
    .fromTo(heroButtons.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=1.4')
}

onMounted(() => {
  if (typeof window === 'undefined') return

  // Trigger hero animation immediately
  startHeroAnimation()

  // Spotlight Parallax
  if (spotlightSection.value && spotlightImg.value) {
    gsap.to(spotlightImg.value, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: spotlightSection.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }

  // Text Fill Scroll Effect
  if (narrativeText.value && textFillOverlay1.value && textFillOverlay2.value) {
    const fillTl = gsap.timeline({
      scrollTrigger: {
        trigger: narrativeText.value,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 1,
      }
    })

    fillTl.to(textFillOverlay1.value, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1 })
          .to(textFillOverlay2.value, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1 }, '+=0.2')
  }

  // Horizontal Carousel (Infinite - Seamless Loop)
  const items = gsap.utils.toArray('.project-card')
  if (items.length > 0 && horizontalTrigger.value && horizontalSection.value) {
    const loop = horizontalLoop(items, {
      paused: true,
      repeat: -1,
      speed: 1,
      paddingRight: 32 // gap-8
    })

    const scrollTween = ScrollTrigger.create({
      trigger: horizontalSection.value,
      start: "top top",
      end: () => `+=${items.length * 400}`, // Dynamic length
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Map scroll progress to loop progress
        if (loop) loop.progress(self.progress)
      }
    })

    // Parallax logic for internal images remains
    items.forEach((card) => {
      const innerImg = card.querySelector('.card-parallax-img')
      if (innerImg) {
        gsap.to(innerImg, {
          x: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween, 
            start: 'left right',
            end: 'right left',
            scrub: true,
          }
        })
      }
    })
  }

  // Atmospheric Section Background Transition
  if (horizontalSection.value) {
    gsap.to(horizontalSection.value, {
      backgroundColor: '#0a0a0a',
      scrollTrigger: {
        trigger: horizontalSection.value,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      }
    })
  }

  // Service Reveals
  const services = gsap.utils.toArray('.service-item-ref')
  if (services.length > 0) {
    services.forEach((group, i) => {
      gsap.from(group, {
        scrollTrigger: {
          trigger: group,
          start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: i * 0.1,
      })
    })
  }
})

// GSAP Infinite Horizontal Loop Helper
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items)
  config = config || {}
  let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), 
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  
  gsap.set(items, { 
    xPercent: 0
  })
  
  totalWidth = items[length-1].offsetLeft + items[length-1].offsetWidth - startX + (config.paddingRight || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    widths[i] = parseFloat(gsap.getProperty(item, "width", "px"));
    xPercents[i] = snap(parseFloat(gsap.getProperty(item, "x", "px")) / widths[i] * 100 + gsap.getProperty(item, "xPercent"));
    distanceToStart = item.offsetLeft - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, {xPercent: snap((distanceToStart - totalWidth) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((distanceToStart - totalWidth + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (totalWidth - distanceToLoop) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); 
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time < tl.time() || index > curIndex) { 
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration();
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  
  tl.next = vars => toIndex(curIndex + 1, vars);
  tl.prev = vars => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); 
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
</script>


<style scoped>
@keyframes reveal {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-reveal {
  animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate-marquee-slow {
  animation: marquee 60s linear infinite;
}
.group:hover .animate-marquee-slow {
  animation-play-state: paused;
}

/* Text Fill Styling */
.text-fill-container {
  overflow: hidden;
}
.text-fill-base {
  display: block;
}
.text-fill-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  white-space: nowrap;
  pointer-events: none;
}
</style>