<template>
  <footer class="bg-black py-20 border-t border-white/5 relative z-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <NuxtLink to="/" class="text-3xl font-bold tracking-tighter mb-6 block">
            HUNTER<span class="text-accent">FOSS</span>
          </NuxtLink>
          <p class="text-white/60 max-w-sm mb-8 leading-relaxed">
            A creative studio blending strategy, design, and technology to build iconic digital experiences.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-xl hover:text-accent transition-colors">Instagram</a>
            <a href="#" class="text-xl hover:text-accent transition-colors">Twitter</a>
            <a href="#" class="text-xl hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-xs uppercase tracking-widest text-white/40 mb-6 font-bold">Navigation</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/work" class="hover:text-accent transition-colors">Works</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-accent transition-colors">Studio</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:text-accent transition-colors">News</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-accent transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xs uppercase tracking-widest text-white/40 mb-6 font-bold">Stay Updated</h4>
          <div class="relative group">
            <input 
              type="email" 
              placeholder="Your email" 
              class="bg-transparent border-b border-white/20 w-full py-4 outline-none focus:border-accent transition-colors text-white"
            />
            <button class="absolute right-0 bottom-4 text-accent uppercase text-[10px] font-bold tracking-widest hover:translate-x-1 transition-transform">
              Join
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/40 font-bold">
        <p>© 2026 Hunterfoss Creative Studio. All rights reserved.</p>
        <div class="flex space-x-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
