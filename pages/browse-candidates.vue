<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-16 pb-20">
      <div class="container mx-auto px-4">
        <h1 class="mb-4 text-4xl font-bold text-white text-center md:text-5xl lg:text-6xl">
          Browse <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Candidates</span>
        </h1>
        <p class="mx-auto max-w-2xl text-lg text-gray-400 text-center mb-16">
          Discover top talent with our AI-powered candidate search and matching technology.
        </p>
        
        <div class="text-center text-white">
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
    
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import FooterSection from '~/components/FooterSection.vue';

useHead({
  title: 'Browse Candidates - Vortexify',
  meta: [
    { name: 'description', content: 'Browse and discover top talent with our AI-powered candidate search. Find the perfect match for your team with advanced filtering and matching technology.' }
  ]
});
</script> 