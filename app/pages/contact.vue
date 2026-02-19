<template>
  <div class="pt-40 pb-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Contact Info -->
        <div>
          <h1 class="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-bold">Inquiry</h1>
          <h2 class="text-6xl md:text-8xl font-bold tracking-tighter mb-12">LET'S <br /> <span class="text-white/20 italic">CONNECT.</span></h2>
          
          <div class="space-y-12">
            <div>
              <h4 class="text-xs uppercase tracking-widest text-white/40 mb-4 font-bold">New Business</h4>
              <p class="text-2xl font-bold hover:text-accent transition-colors"><a href="mailto:hello@hunterfoss.studio">hello@hunterfoss.studio</a></p>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-widest text-white/40 mb-4 font-bold">Office</h4>
              <p class="text-xl text-white/60 leading-relaxed">
                123 Creative Street<br />
                Design District, NY 10013
              </p>
            </div>
            <div>
              <h4 class="text-xs uppercase tracking-widest text-white/40 mb-4 font-bold">Socials</h4>
              <div class="flex space-x-8 text-lg font-bold">
                <a href="#" class="hover:text-accent transition-colors">Behance</a>
                <a href="#" class="hover:text-accent transition-colors">Dribbble</a>
                <a href="#" class="hover:text-accent transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-white/5 p-10 md:p-16 border border-white/10">
          <form @submit.prevent="handleSubmit" class="space-y-10">
            <div class="relative group">
              <label class="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Full Name</label>
              <input 
                v-model="form.name"
                required
                type="text" 
                placeholder="What's your name?" 
                class="bg-transparent border-b border-white/20 w-full py-4 outline-none focus:border-accent transition-colors text-white text-lg"
              />
            </div>

            <div class="relative group">
              <label class="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Email Address</label>
              <input 
                v-model="form.email"
                required
                type="email" 
                placeholder="Where can we reach you?" 
                class="bg-transparent border-b border-white/20 w-full py-4 outline-none focus:border-accent transition-colors text-white text-lg"
              />
            </div>

            <div class="relative group">
              <label class="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-2">Project Brief</label>
              <textarea 
                v-model="form.message"
                required
                rows="4"
                placeholder="Tell us about your project..." 
                class="bg-transparent border-b border-white/20 w-full py-4 outline-none focus:border-accent transition-colors text-white text-lg resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-6 bg-accent text-black font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              <span v-if="loading">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <p v-if="success" class="text-accent text-sm font-bold animate-pulse">Your message has been sent successfully! We'll be in touch soon.</p>
            <p v-if="error" class="text-red-500 text-sm font-bold">Something went wrong. Please try again later.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = false

  // EMAILJS INTEGRATION INSTRUCTIONS:
  // 1. Create an account at emailjs.com
  // 2. Add a Service and a Template
  // 3. Replace the strings below with your Service ID, Template ID, and Public Key

  const SERVICE_ID = 'YOUR_SERVICE_ID'
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

  try {
    // Note: In a real app, replace the placeholder IDs
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    
    // Simulate API call for demo purposes
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    success.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    console.error('EmailJS Error:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
