<template>
  <div class="pt-40">
    <div class="container mx-auto px-6">
      <NuxtLink to="/work" class="text-xs uppercase tracking-widest text-accent font-bold mb-12 inline-block hover:-translate-x-2 transition-transform">
        ← Back to all projects
      </NuxtLink>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-end">
        <div>
          <h1 class="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-white">
            {{ work.title }}
          </h1>
          <p class="text-2xl text-white/60 mb-8 max-w-xl italic">
            "Redefining visual excellence through strategic design and immersive storytelling."
          </p>
        </div>
        <div class="pb-8">
          <div class="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            <div>
              <p class="text-accent mb-2">Category</p>
              <p class="text-white">{{ work.category }}</p>
            </div>
            <div>
              <p class="text-accent mb-2">Year</p>
              <p class="text-white">2026</p>
            </div>
          </div>
        </div>
      </div>

      <div class="aspect-video w-full overflow-hidden mb-40 bg-[#111]">
        <img :src="work.image" class="w-full h-full object-cover" />
      </div>

      <div class="max-w-4xl mx-auto space-y-32 mb-40">
        <section>
          <h3 class="text-xs uppercase tracking-widest text-accent font-bold mb-8">The Challenge</h3>
          <p class="text-3xl font-medium leading-[1.3]">
            Our primary objective was to create a cohesive visual language that speaks to both established players and emerging visionaries in the sector.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 class="text-xs uppercase tracking-widest text-accent font-bold mb-8">Solution</h3>
            <p class="text-white/60 leading-relaxed text-lg">
              We developed a custom grid system and a bold typography stack that allows for flexibility across various media while maintaining a recognizable brand core.
            </p>
          </div>
          <div>
            <h3 class="text-xs uppercase tracking-widest text-accent font-bold mb-8">Result</h3>
            <p class="text-white/60 leading-relaxed text-lg">
              A 40% increase in digital engagement and a nomination for Site of the Year at the Awwwards conference.
            </p>
          </div>
        </section>
      </div>

      <!-- Gallery Placeholder -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        <div class="aspect-square bg-white/5"></div>
        <div class="aspect-square bg-white/5"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

// In a real app, you would fetch this from a CMS or local store
const work = {
  title: slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' '),
  category: 'Strategic Design',
  image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200'
}
</script>
