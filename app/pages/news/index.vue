<template>
  <div class="pt-40 pb-20 px-6">
    <div class="container mx-auto">
      <div class="max-w-4xl border-b border-white/10 pb-20 mb-20">
        <h1 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold">The Journal</h1>
        <h2 class="text-6xl md:text-8xl font-bold tracking-tighter">INSIGHTS & <span class="text-white/20">STORIES.</span></h2>
      </div>

      <div class="grid grid-cols-1 gap-20">
        <article v-for="(post, n) in news" :key="n" class="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-5 aspect-video overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div class="md:col-span-7">
            <div class="flex items-center space-x-4 mb-6 text-xs uppercase tracking-widest text-white/40 font-bold">
              <span>{{ post.date }}</span>
              <span class="w-1 h-1 bg-accent rounded-full"></span>
              <span class="text-accent">{{ post.tag }}</span>
            </div>
            <NuxtLink :to="`/news/${post.slug}`">
              <h3 class="text-3xl md:text-5xl font-bold tracking-tight mb-6 group-hover:text-accent transition-colors">{{ post.title }}</h3>
            </NuxtLink>
            <p class="text-white/50 text-lg max-w-xl mb-8 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <NuxtLink :to="`/news/${post.slug}`" class="text-sm font-bold uppercase tracking-widest border-b-2 border-accent pb-1 inline-block">
              Read Story
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const news = [
  {
    title: 'How we redefined the digital experience for Lumina',
    excerpt: 'Exploring the intersection of minimalism and performance in modern branding.',
    date: 'February 12, 2026',
    tag: 'Case Study',
    slug: 'lumina-redefined',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200'
  },
  {
    title: 'The future of typography in spatial computing',
    excerpt: 'Why legibility matters more than ever in the age of mixed reality.',
    date: 'January 28, 2026',
    tag: 'Opinion',
    slug: 'spatial-typography',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200'
  }
]
</script>
