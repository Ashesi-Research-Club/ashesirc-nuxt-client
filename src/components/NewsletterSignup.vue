<template>
  <section class="mx-auto my-12 max-w-4xl rounded-md border border-slate-200/70 bg-paper p-6 md:my-16 md:p-8">
    <!-- Success Message -->
    <div v-if="isSuccess" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
      <p class="text-green-800 text-sm">✓ Successfully subscribed! You'll receive our monthly research updates.</p>
    </div>
    
    <!-- Error Message -->
    <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
      <p class="text-red-800 text-sm">{{ errorMessage }}</p>
    </div>
    
    <div class="grid items-center gap-6 md:grid-cols-5">
      <div class="md:col-span-2">
        <h3 class="font-serif text-2xl leading-tight text-ink">Subscribe to our magazine</h3>
        <p class="mt-1 text-sm text-ink/70">Research insights delivered monthly. No spam.</p>
      </div>
      <form class="md:col-span-3 flex flex-col gap-3 md:flex-row" @submit.prevent="onSubmit">
        <label class="sr-only" for="email">Email</label>
        <input 
          id="email" 
          v-model="email" 
          type="email" 
          required 
          :disabled="loading"
          :placeholder="`you@${universityDomain}`" 
          class="flex-1 rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-secondary/20 placeholder:text-slate-400 focus:ring-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed" 
        />
        <button 
          type="submit" 
          :disabled="loading"
          class="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-oxford-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">Subscribing...</span>
          <span v-else>Subscribe</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { appConfig } from '@/config/app'

const email = ref('')
const isSuccess = ref(false)
const errorMessage = ref<string | null>(null)
const loading = ref(false)
const universityDomain = appConfig.universityDomain || 'ashesi.edu'

function validateEmail(e: string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
  return re.test(e)
}

async function onSubmit() {
  errorMessage.value = null
  isSuccess.value = false
  loading.value = true

  try {
    // Basic validation
    if (!email.value || !validateEmail(email.value)) {
      throw new Error('Please enter a valid email address')
    }

    // If SheetDB endpoint is not configured, fall back to a local simulation
    const url = appConfig.sheetdbNewsletterUrl || ''
    if (!url) {
      // simulate network latency and success
      await new Promise((r) => setTimeout(r, 800))
      isSuccess.value = true
      email.value = ''
      return
    }

    const payload = {
      data: [
        {
          id: 'INCREMENT',
          email: email.value,
        },
      ],
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const txt = await res.text()
      throw new Error(`Server returned ${res.status}: ${txt}`)
    }

    isSuccess.value = true
    email.value = ''

    // Hide success message after 3 seconds
    setTimeout(() => { isSuccess.value = false }, 3000)
  } catch (err) {
    errorMessage.value = err instanceof Error ? err.message : 'Failed to subscribe'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
input { outline: none; }
</style>
