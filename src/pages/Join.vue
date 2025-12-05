<template>
  <main class="min-h-screen bg-paper">
    <div class="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
      <h1 class="font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">Subscribe</h1>
      <p class="mt-4 text-lg text-ink/75 max-w-2xl mx-auto">Join our monthly research newsletter to receive the latest articles, events, and calls for collaboration.</p>
    </div>

    <div class="mx-auto max-w-4xl px-4">
      <NewsletterSignup />
    </div>
  </main>
</template>

<script setup lang="ts">
import NewsletterSignup from '@/components/NewsletterSignup.vue'
</script>
