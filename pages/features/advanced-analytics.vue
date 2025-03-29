<template>
  <div class="min-h-screen flex flex-col">
    <!-- Title Header Section with no background -->
    <div class="py-16 pt-28 mb-4 relative z-20">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <span class="linear-badge-purple mb-4 inline-block">Feature</span>
        <h1 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
          <span class="bg-gradient-to-r from-white via-accent-purple/70 to-white bg-clip-text text-transparent">Advanced</span> <span class="text-accent-purple">Analytics</span>
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-gray-300 drop-shadow-md">
          Gain valuable insights into your hiring process with real-time analytics 
          and performance metrics to make data-driven decisions.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 md:px-8 flex-grow">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Data-Driven Insights</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-purple/20 text-accent-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </span>
                <p class="text-gray-300">Track application conversion rates and hiring funnel metrics</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-purple/20 text-accent-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </span>
                <p class="text-gray-300">Analyze candidate quality and match scores over time</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-purple/20 text-accent-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </span>
                <p class="text-gray-300">Identify bottlenecks in your recruiting process</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-purple/20 text-accent-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </span>
                <p class="text-gray-300">Compare your metrics against industry benchmarks</p>
              </li>
            </ul>
          </div>

          <div class="mt-8 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Reporting Tools</h2>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Customizable dashboards for different roles and needs</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Automated reports delivered to your inbox on schedule</p>
              </li>
              <li class="flex items-start">
                <span class="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p class="text-gray-300">Data export capabilities for further analysis</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <div class="relative overflow-hidden rounded-2xl">
            <img src="/images/placeholder.svg" alt="Advanced Analytics" class="h-auto w-full" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-8 backdrop-blur">
            <h2 class="mb-6 text-2xl font-semibold text-white">Use Cases</h2>
            <div class="space-y-6">
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">Recruitment ROI</h3>
                <p class="text-gray-300">Track cost-per-hire, time-to-fill, and quality-of-hire metrics to optimize your recruitment budget.</p>
              </div>
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">Diversity Initiatives</h3>
                <p class="text-gray-300">Monitor and improve diversity metrics throughout your hiring pipeline with demographic analytics.</p>
              </div>
              <div class="rounded-xl bg-dark-800/70 p-4">
                <h3 class="mb-2 text-lg font-medium text-white">Team Performance</h3>
                <p class="text-gray-300">Measure recruiter efficiency and effectiveness with detailed team performance metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink to="/sign-up" class="inline-flex items-center rounded-xl bg-gradient-to-r from-accent-purple to-accent-purple-dark px-6 py-3 text-lg font-medium text-white shadow-lg shadow-accent-purple/30 transition duration-300 hover:from-accent-purple hover:to-accent-purple">
          Explore Analytics Tools
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
  title: 'Advanced Analytics - Vortexify',
  meta: [
    { name: 'description', content: 'Gain valuable insights into your hiring process with real-time analytics and performance metrics.' }
  ]
});
// Component logic can be added here
</script> 