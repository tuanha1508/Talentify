<template>
  <section class="relative min-h-screen pt-16">
    <!-- Main hero content -->
    <div class="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center md:px-8">
      <span class="linear-badge-blue mb-4 inline-block">Future-Ready HR Platform</span>
      <h1 class="mb-6 max-w-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Streamline Your <span class="text-primary-400">Talent Acquisition</span> Process
      </h1>
      <p class="mb-8 max-w-xl text-gray-400">
        Our AI-powered platform connects the right talent with the right opportunities, making hiring simpler and more effective.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button class="btn-primary">Find Jobs</button>
        <button class="btn-outline">For Employers</button>
      </div>
    </div>

    <!-- Floating transparent elements -->
    <!-- User card floating element (top left) -->
    <div class="glass absolute left-[10%] top-[30%] hidden w-64 rounded-xl p-4 md:block shadow-linear-lg">
      <div class="flex items-center gap-3">
        <div class="relative h-10 w-10 overflow-hidden rounded-full bg-primary-500/30">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" class="h-full w-full object-cover" />
        </div>
        <div class="text-left">
          <p class="text-sm font-medium text-white">Emma Johnson</p>
          <p class="text-xs text-gray-400">UX Designer</p>
        </div>
      </div>
      <div class="mt-3 flex">
        <div class="mr-6">
          <p class="text-xs text-gray-400">Match Score</p>
          <p class="text-sm font-medium text-white">95%</p>
        </div>
        <div>
          <p class="text-xs text-gray-400">Experience</p>
          <p class="text-sm font-medium text-white">4 years</p>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between rounded-lg bg-dark-800/50 p-2">
        <span class="flex items-center gap-1 text-xs text-white">
          <span class="h-2 w-2 rounded-full bg-green-500"></span> Active now
        </span>
        <button class="text-xs text-primary-400 hover:text-primary-300">View Profile</button>
      </div>
    </div>
    
    <!-- Job recommendations floating element (top right) -->
    <div class="glass absolute right-[10%] top-[35%] hidden w-60 rounded-xl p-4 md:block shadow-linear-lg">
      <div class="mb-2 flex items-center justify-between">
        <h3 class="text-sm font-medium text-white">Job Recommendations</h3>
        <span class="rounded-full bg-primary-500/20 px-2 py-0.5 text-xs text-primary-400">3 new</span>
      </div>
      <div class="space-y-3">
        <div class="rounded-lg bg-dark-800/60 p-2">
          <p class="text-xs font-medium text-white">Senior Developer</p>
          <p class="text-xs text-gray-400">TechCorp Inc • Remote</p>
          <div class="mt-1 flex items-center justify-between">
            <span class="text-xs text-gray-500">$120-150k</span>
            <span class="text-xs text-accent-green">98% match</span>
          </div>
        </div>
        <div class="rounded-lg bg-dark-800/60 p-2">
          <p class="text-xs font-medium text-white">Product Manager</p>
          <p class="text-xs text-gray-400">Innovate Co • Hybrid</p>
          <div class="mt-1 flex items-center justify-between">
            <span class="text-xs text-gray-500">$110-140k</span>
            <span class="text-xs text-accent-purple">92% match</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Stats floating card (bottom center) -->
    <div class="glass absolute bottom-[20%] left-1/2 hidden w-64 -translate-x-1/2 rounded-xl p-4 md:block shadow-linear-lg">
      <div class="flex items-center justify-between">
        <div class="text-center">
          <p class="text-xs text-gray-400">Users</p>
          <p class="text-sm font-medium text-white">10k+</p>
        </div>
        <div class="h-8 w-px bg-dark-700"></div>
        <div class="text-center">
          <p class="text-xs text-gray-400">Companies</p>
          <p class="text-sm font-medium text-white">500+</p>
        </div>
        <div class="h-8 w-px bg-dark-700"></div>
        <div class="text-center">
          <p class="text-xs text-gray-400">Jobs</p>
          <p class="text-sm font-medium text-white">5k+</p>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-center gap-1 rounded-lg bg-dark-800/60 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-accent-green">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-xs text-white">Secure & Verified Platform</span>
      </div>
    </div>
    
    <!-- Draggable notification floating element (bottom right) -->
    <div class="glass absolute bottom-[15%] right-[10%] hidden rounded-xl p-3 lg:block shadow-linear-lg">
      <div class="flex items-center gap-2">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </div>
        <div>
          <p class="text-xs font-medium text-white">New job alert</p>
          <p class="text-xs text-gray-400">5 minutes ago</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Additional component styling */
</style> 