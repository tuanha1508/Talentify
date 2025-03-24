<template>
  <section id="employers" class="relative py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900/95 via-dark-800/95 to-dark-900"></div>
    
    <div class="container relative z-10 mx-auto px-4 md:px-8">
      <div class="mb-16 text-center">
        <span class="linear-badge-green mb-4 inline-block">For Employers</span>
        <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Optimize Your <span class="text-accent-green">Recruitment</span>
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-gray-400">
          Powerful AI-driven tools to help you find, screen, and hire the best talent for your organization.
        </p>
      </div>
      
      <!-- Employer content -->
      <div class="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-6 backdrop-blur md:p-8 lg:p-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div class="flex-1">
            <div class="relative overflow-hidden rounded-xl">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Employer Dashboard" 
                class="h-full w-full rounded-xl object-cover" 
              />
              
              <!-- Sample UI overlay -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="glass-card m-4 max-w-sm rounded-xl p-4">
                  <div class="mb-3 flex items-center justify-between">
                    <h4 class="text-sm font-medium text-white">Candidate Analytics</h4>
                    <span class="rounded-full bg-accent-green/20 px-2 py-0.5 text-xs text-accent-green">Live</span>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-400">Applications</span>
                      <span class="text-xs text-white">124</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-400">Screened</span>
                      <span class="text-xs text-white">98</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-gray-400">Shortlisted</span>
                      <span class="text-xs text-white">32</span>
                    </div>
                    <div class="h-1.5 w-full rounded-full bg-dark-700">
                      <div class="h-full w-[75%] rounded-full bg-gradient-to-r from-accent-green to-primary-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex-1 space-y-6">
            <div class="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">
              AI-Powered Screening
            </div>
            
            <h3 class="text-2xl font-semibold text-white">Intelligent Talent Acquisition</h3>
            
            <p class="text-gray-400">
              Our advanced platform helps you identify the most qualified candidates quickly, 
              saving you time and resources while improving hiring quality.
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-green/20 text-accent-green">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Automated Skill Assessment</h4>
                  <p class="text-sm text-gray-400">Accurately evaluate technical and soft skills at scale</p>
                </div>
              </li>
              
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-green/20 text-accent-green">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Cultural Fit Matching</h4>
                  <p class="text-sm text-gray-400">Ensure candidates align with your company values</p>
                </div>
              </li>
              
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-green/20 text-accent-green">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Comprehensive Analytics</h4>
                  <p class="text-sm text-gray-400">Track metrics and optimize your recruitment funnel</p>
                </div>
              </li>
            </ul>
            
            <div>
              <a href="/" class="btn-outline inline-flex items-center gap-2 no-underline group">
                <span>Learn More</span> 
                <span class="group-hover:translate-x-0.5 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </a>
            </div>
            
            <NuxtLink to="/sign-up" class="modern-cta-button-green mt-6 inline-block group relative overflow-hidden no-underline px-7 py-3 text-base hover:scale-[1.03] rounded-2xl">
              <span class="relative z-10 font-medium flex items-center text-emerald-100 group-hover:text-accent-green transition-colors duration-300">
                Join as Employer
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-all duration-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span class="absolute inset-0 bg-black group-hover:bg-black/90 transition-all duration-300"></span>
              <span class="absolute -inset-x-full bottom-0 h-px w-[200%] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-70 animate-shine"></span>
              <span class="absolute inset-0 rounded-2xl border border-accent-green"></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
.bg-grid-pattern {
  @apply bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px];
}

.btn-primary {
  @apply bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-white border-none;
}

/* All modern-cta-button styles have been moved to main.css */
/* Use the modern-cta-button-green class from main.css for green buttons */
</style> 