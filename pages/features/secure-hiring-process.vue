<template>
  <div class="min-h-screen flex flex-col">
    <!-- Title Header Section with no background -->
    <div class="py-16 pt-28 mb-4 relative z-20">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <span class="linear-badge-purple mb-4 inline-block">Feature</span>
        <h1 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
          <span class="bg-gradient-to-r from-white via-secondary-300 to-white bg-clip-text text-transparent">Secure Hiring</span> <span class="text-secondary-400">Process</span>
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-gray-300 drop-shadow-md">
          End-to-end encryption and privacy controls protect sensitive information 
          throughout the entire hiring journey.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 md:px-8 flex-grow">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Security Features</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">End-to-end encryption for all communications</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Granular privacy controls for your personal information</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Multi-factor authentication for secure account access</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p class="text-gray-300">Regular security audits and compliance certifications</p>
              </li>
            </ul>
          </div>

          <div class="mt-8 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Privacy Controls</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Choose who can view your profile and contact information</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Anonymize specific parts of your resume or application</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Control notification settings and data retention periods</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <div class="relative overflow-hidden rounded-2xl">
            <img src="/images/placeholder.svg" alt="Secure Hiring Process" class="h-auto w-full" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Compliance & Certifications</h2>
            <div class="space-y-4">
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">GDPR Compliant</h3>
                <p class="text-gray-300">We adhere to all requirements of the General Data Protection Regulation for EU users.</p>
              </div>
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">SOC 2 Certified</h3>
                <p class="text-gray-300">Our platform meets rigorous standards for security, availability, and confidentiality.</p>
              </div>
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">ISO 27001</h3>
                <p class="text-gray-300">Certified for implementing the highest international standards for information security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/sign-up" class="inline-flex items-center rounded-xl bg-gradient-to-r from-secondary-600 to-secondary-500 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-secondary-500/30 transition duration-300 hover:from-secondary-500 hover:to-secondary-400">
          Experience Secure Hiring
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
  title: 'Secure Hiring Process - Vortexify',
  meta: [
    { name: 'description', content: 'End-to-end encryption and privacy controls to protect sensitive information throughout your hiring journey.' }
  ]
});
// Component logic can be added here
</script> 