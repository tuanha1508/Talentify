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
            
            <NuxtLink to="/sign-up" class="btn-primary btn-lg cta-button mt-6 inline-block group relative overflow-hidden no-underline">
              <span class="relative z-10">Start Hiring</span>
              <span class="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-green/80 group-hover:scale-105 transition-transform duration-300"></span>
              <span class="absolute -inset-x-full bottom-0 h-px w-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:animate-shine"></span>
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
/* Additional component styling */
.btn-primary {
  @apply bg-gradient-to-r from-accent-green to-accent-green/80 hover:from-accent-green/90 hover:to-accent-green/70 text-white shadow-sm hover:shadow-glow-sm transform hover:-translate-y-0.5;
}

.btn-lg {
  @apply rounded-lg px-6 py-2.5 text-base font-medium;
}

.cta-button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.025em;
  font-weight: 600;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(63, 185, 80, 0.25);
}

@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 3s infinite linear;
}
</style> 