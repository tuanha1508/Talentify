<template>
  <section id="job-seekers" class="relative py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900"></div>
    
    <div class="container relative z-10 mx-auto px-4 md:px-8">
      <div class="mb-16 text-center">
        <span class="linear-badge-secondary mb-4 inline-block">For Job Seekers</span>
        <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Find Your <span class="text-secondary-400">Dream Job</span>
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-gray-400">
          Our advanced AI tools help you discover and apply for positions that perfectly match your skills and career goals.
        </p>
      </div>
      
      <!-- Job seeker content -->
      <div class="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-6 backdrop-blur md:p-8 lg:p-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div class="flex-1 space-y-6">
            <div class="inline-flex items-center rounded-full bg-secondary-500/10 px-3 py-1 text-xs font-medium text-secondary-400">
              AI-Powered Matching
            </div>
            
            <h3 class="text-2xl font-semibold text-white">Smart Career Recommendations</h3>
            
            <p class="text-gray-400">
              Our platform analyzes thousands of jobs daily to find the perfect match for your skills, 
              experience, and career aspirations.
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Personalized Job Matches</h4>
                  <p class="text-sm text-gray-400">Receive custom recommendations based on your unique profile</p>
                </div>
              </li>
              
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Skill Gap Analysis</h4>
                  <p class="text-sm text-gray-400">Identify skills to develop for your dream position</p>
                </div>
              </li>
              
              <li class="flex items-start gap-3">
                <div class="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-3 w-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-white">Career Growth Insights</h4>
                  <p class="text-sm text-gray-400">Get data-driven advice on your next career move</p>
                </div>
              </li>
            </ul>
            
            <button class="btn-secondary mt-4">Explore Opportunities</button>
          </div>
          
          <div class="flex-1">
            <div class="relative overflow-hidden rounded-xl">
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" 
                alt="Job Recommendations Dashboard" 
                class="h-full w-full rounded-xl object-cover" 
              />
              
              <!-- Sample UI overlay -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="glass-card m-4 max-w-sm rounded-xl p-4">
                  <div class="mb-3 flex items-center justify-between">
                    <h4 class="text-sm font-medium text-white">Your Match Score</h4>
                    <span class="rounded-full bg-secondary-500/20 px-2 py-0.5 text-xs text-secondary-400">96%</span>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <div class="h-1.5 flex-1 rounded-full bg-dark-700">
                        <div class="h-full w-[96%] rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400"></div>
                      </div>
                      <span class="text-xs text-white">96%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
</style> 