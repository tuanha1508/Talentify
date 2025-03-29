<template>
  <div class="min-h-screen flex flex-col">
    <!-- Title Header Section with no background -->
    <div class="py-16 pt-28 mb-4 relative z-20">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <span class="linear-badge-purple mb-4 inline-block">Feature</span>
        <h1 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
          <span class="bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent">Smart Job</span> <span class="text-primary-400">Matching</span>
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-gray-300 drop-shadow-md">
          Our AI algorithms match candidates with jobs based on skills, experience, and preferences, 
          ensuring optimal fit for both parties.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 md:px-8 flex-grow">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">How It Works</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Advanced algorithms analyze your skills, experience, and preferences</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Job listings are evaluated for quality and relevance to your profile</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Match scores are calculated based on compatibility factors</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">The system continuously learns from your interactions to improve matches</p>
              </li>
            </ul>
          </div>

          <div class="mt-8 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Benefits</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Save time by focusing only on relevant opportunities</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Increase your chances of landing ideal positions</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Discover opportunities that align with your career goals</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <div class="relative overflow-hidden rounded-2xl">
            <img src="/images/placeholder.svg" alt="Smart Job Matching" class="h-auto w-full" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Success Stories</h2>
            <div class="space-y-6">
              <div class="rounded-xl bg-dark-800/70 p-4">
                <p class="italic text-gray-300">"Vortexify's AI matching helped me find my dream job within two weeks. The matches were incredibly relevant to my skills."</p>
                <p class="mt-2 text-sm text-gray-400">- Alex Johnson, Software Developer</p>
              </div>
              <div class="rounded-xl bg-dark-800/70 p-4">
                <p class="italic text-gray-300">"As a hiring manager, I've been impressed with the quality of candidates the smart matching system recommends for our positions."</p>
                <p class="mt-2 text-sm text-gray-400">- Maria Rodriguez, HR Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/sign-up" class="inline-flex items-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-primary-500/30 transition duration-300 hover:from-primary-500 hover:to-primary-400">
          Try Smart Job Matching
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '@/components/FooterSection.vue';
import { useHead } from 'nuxt/app';

// Set page title
useHead({
  title: 'Smart Job Matching - Vortexify',
  meta: [
    { name: 'description', content: 'Our AI algorithms match candidates with jobs based on skills, experience, and preferences for optimal fit.' }
  ]
});
// Component logic can be added here
</script> 