<template>
  <article class="pt-40 max-w-4xl mx-auto px-6 pb-40">
    <NuxtLink to="/news" class="text-xs uppercase tracking-widest text-accent font-bold mb-12 inline-block">
      ← Journal
    </NuxtLink>

    <header class="mb-20">
      <div class="flex items-center space-x-4 mb-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
        <span>February 12, 2026</span>
        <span class="w-1 h-1 bg-accent rounded-full"></span>
        <span class="text-accent">Insight</span>
      </div>
      <h1 class="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
        {{ post.title }}
      </h1>
      <div class="flex items-center space-x-6">
        <div class="w-12 h-12 bg-white/10 rounded-full"></div>
        <div>
          <p class="text-sm font-bold uppercase tracking-widest">Alex Foss</p>
          <p class="text-xs text-white/40 uppercase tracking-widest">Creative Director</p>
        </div>
      </div>
    </header>

    <div class="aspect-video w-full bg-white/5 mb-20"></div>

    <div class="prose prose-invert prose-2xl max-w-none text-white/70 leading-relaxed font-light">
      <p class="mb-12 text-white">
        Design is more than just how something looks; it's about the feeling it evokes and the story it communicates. In today's digital landscape, where attention is the most valuable currency, storytelling isn't just an option—it's a necessity.
      </p>
      <h2 class="text-4xl text-white font-bold mb-8 tracking-tight">The intersection of form and function</h2>
      <p class="mb-12">
        We often talk about the importance of aesthetics, but aesthetics without purpose is just decoration. Purposeful design starts with a problem and ends with a solution that feels inevitable.
      </p>
      <blockquote class="border-l-4 border-accent pl-12 py-8 italic text-3xl text-white mb-12">
        "The best design is the one that disappears, leaving only the experience behind."
      </blockquote>
      <p>
        As we look toward the future, the boundaries between physical and digital spaces continue to blur. Our role as designers is to navigate this ambiguity and create touchpoints that feel human.
      </p>
    </div>
  </article>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const post = {
  title: 'How we redefined the digital experience in 2026',
}
</script>
