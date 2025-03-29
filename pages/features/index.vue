<template>
  <div class="min-h-screen flex flex-col">
    <!-- Title Header Section with no background -->
    <div class="py-16 pt-28 mb-4 relative z-20">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <span class="linear-badge-purple mb-4 inline-block">Features</span>
        <h1 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
          <span class="bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent">Streamline Your</span> <span class="text-primary-400">Hiring Process</span>
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-gray-300 drop-shadow-md">
          Our AI-powered platform offers smart solutions for both job seekers and employers, 
          making the hiring process more efficient and effective.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 md:px-8 flex-grow">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <NuxtLink to="/features/smart-job-matching" class="group">
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur transition duration-300 hover:bg-dark-800/95">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Smart Job Matching</h3>
            <p class="text-gray-400">
              Our AI algorithms match candidates with jobs based on skills, experience, and preferences, 
              ensuring optimal fit for both parties.
            </p>
            <div class="mt-4 flex items-center text-primary-400 transition-all duration-300 group-hover:translate-x-2">
              <span class="text-sm font-medium">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Feature 2 -->
        <NuxtLink to="/features/secure-hiring-process" class="group">
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur transition duration-300 hover:bg-dark-800/95">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-500/20 text-secondary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Secure Hiring Process</h3>
            <p class="text-gray-400">
              End-to-end encryption and privacy controls protect sensitive information 
              throughout the entire hiring journey.
            </p>
            <div class="mt-4 flex items-center text-secondary-400 transition-all duration-300 group-hover:translate-x-2">
              <span class="text-sm font-medium">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
        
        <!-- Feature 3 -->
        <NuxtLink to="/features/advanced-analytics" class="group">
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur transition duration-300 hover:bg-dark-800/95">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-purple/20 text-accent-purple">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Advanced Analytics</h3>
            <p class="text-gray-400">
              Gain valuable insights into your hiring process with real-time analytics 
              and performance metrics to make data-driven decisions.
            </p>
            <div class="mt-4 flex items-center text-accent-purple transition-all duration-300 group-hover:translate-x-2">
              <span class="text-sm font-medium">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-20 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 class="mb-6 text-2xl font-semibold text-white">Why Choose Vortexify?</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">AI-powered features designed to simplify the hiring process</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">User-friendly interface for both job seekers and employers</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Comprehensive security measures to protect your data</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Continuous updates and improvements based on user feedback</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-2xl font-semibold text-white">Our Commitments</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Privacy-first approach to handling your personal information</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Ethical AI development with transparent algorithms</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Regular security updates and vulnerability assessments</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">24/7 customer support for both job seekers and employers</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/sign-up" class="inline-flex items-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-primary-500/30 transition duration-300 hover:from-primary-500 hover:to-primary-400">
          Get Started with Vortexify
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
  title: 'Features - Vortexify',
  meta: [
    { name: 'description', content: 'Explore all features of Vortexify, the AI-powered hiring platform that streamlines your hiring process.' }
  ]
});
// Component logic can be added here
</script> 