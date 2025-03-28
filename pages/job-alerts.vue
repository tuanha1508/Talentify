<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Job <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Alerts</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Create personalized job alerts to receive notifications when new opportunities match your skills and preferences.
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid gap-10 lg:grid-cols-3">
          <!-- Left Column - Create Alert Form -->
          <div class="lg:col-span-2">
            <div class="rounded-xl bg-dark-900 p-6 md:p-8">
              <h2 class="mb-6 text-2xl font-bold text-white">Create Job Alert</h2>
              
              <div class="space-y-6">
                <!-- Alert Name -->
                <div>
                  <label for="alert-name" class="mb-2 block text-sm font-medium text-gray-300">Alert Name</label>
                  <input
                    type="text"
                    id="alert-name"
                    class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="e.g. Software Developer Jobs in New York"
                  />
                </div>
                
                <!-- Job Title -->
                <div>
                  <label for="job-title" class="mb-2 block text-sm font-medium text-gray-300">Job Title / Keywords</label>
                  <input
                    type="text"
                    id="job-title"
                    class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="e.g. Software Engineer, Developer, Programmer"
                  />
                </div>
                
                <!-- Location -->
                <div>
                  <label for="location" class="mb-2 block text-sm font-medium text-gray-300">Location</label>
                  <input
                    type="text"
                    id="location"
                    class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="e.g. New York, NY"
                  />
                  
                  <div class="mt-2 flex items-center">
                    <input type="checkbox" id="remote" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                    <label for="remote" class="ml-2 text-sm text-gray-300">Include remote jobs</label>
                  </div>
                </div>
                
                <!-- Job Type -->
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-300">Job Type</label>
                  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div class="flex items-center">
                      <input type="checkbox" id="full-time" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="full-time" class="ml-2 text-sm text-gray-300">Full-time</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="part-time" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="part-time" class="ml-2 text-sm text-gray-300">Part-time</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="contract" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="contract" class="ml-2 text-sm text-gray-300">Contract</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="temporary" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="temporary" class="ml-2 text-sm text-gray-300">Temporary</label>
                    </div>
                    <div class="flex items-center">
                      <input type="checkbox" id="internship" class="h-4 w-4 rounded border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="internship" class="ml-2 text-sm text-gray-300">Internship</label>
                    </div>
                  </div>
                </div>
                
                <!-- Experience Level -->
                <div>
                  <label for="experience" class="mb-2 block text-sm font-medium text-gray-300">Experience Level</label>
                  <select
                    id="experience"
                    class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">Any experience level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>
                
                <!-- Salary Range -->
                <div>
                  <label for="salary" class="mb-2 block text-sm font-medium text-gray-300">Minimum Salary</label>
                  <select
                    id="salary"
                    class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                  >
                    <option value="">No minimum</option>
                    <option value="30000">$30,000</option>
                    <option value="50000">$50,000</option>
                    <option value="70000">$70,000</option>
                    <option value="90000">$90,000</option>
                    <option value="110000">$110,000</option>
                    <option value="130000">$130,000</option>
                    <option value="150000">$150,000+</option>
                  </select>
                </div>
                
                <!-- Notification Frequency -->
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-300">Notification Frequency</label>
                  <div class="flex flex-col space-y-2">
                    <div class="flex items-center">
                      <input type="radio" id="instant" name="frequency" class="h-4 w-4 border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="instant" class="ml-2 text-sm text-gray-300">Instant (as soon as jobs are posted)</label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" id="daily" name="frequency" class="h-4 w-4 border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" checked />
                      <label for="daily" class="ml-2 text-sm text-gray-300">Daily summary</label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" id="weekly" name="frequency" class="h-4 w-4 border-gray-700 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="weekly" class="ml-2 text-sm text-gray-300">Weekly summary</label>
                    </div>
                  </div>
                </div>
                
                <!-- Create Alert Button -->
                <button class="w-full rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 py-3 font-medium text-white shadow-md hover:shadow-glow-sm transition-shadow">
                  Create Alert
                </button>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Existing Alerts -->
          <div>
            <div class="rounded-xl bg-dark-900 p-6 md:p-8">
              <h2 class="mb-6 text-xl font-bold text-white">Your Job Alerts</h2>
              
              <div class="space-y-4">
                <!-- Alert 1 -->
                <div class="rounded-lg bg-dark-800 p-4">
                  <div class="mb-3 flex items-start justify-between">
                    <div>
                      <h3 class="font-medium text-white">Senior React Developer</h3>
                      <p class="text-sm text-gray-400">San Francisco, CA (Remote)</p>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button class="rounded p-1 text-gray-400 hover:bg-dark-700 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button class="rounded p-1 text-gray-400 hover:bg-dark-700 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mb-3 flex flex-wrap gap-2">
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">Full-time</span>
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">$120K+</span>
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">Senior</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500">Daily notifications</span>
                    <span class="text-xs text-gray-500">Created 3 days ago</span>
                  </div>
                </div>
                
                <!-- Alert 2 -->
                <div class="rounded-lg bg-dark-800 p-4">
                  <div class="mb-3 flex items-start justify-between">
                    <div>
                      <h3 class="font-medium text-white">UX/UI Designer</h3>
                      <p class="text-sm text-gray-400">New York, NY</p>
                    </div>
                    <div class="flex items-center space-x-2">
                      <button class="rounded p-1 text-gray-400 hover:bg-dark-700 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button class="rounded p-1 text-gray-400 hover:bg-dark-700 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mb-3 flex flex-wrap gap-2">
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">Full-time</span>
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">$90K+</span>
                    <span class="rounded-full bg-dark-700 px-2 py-1 text-xs text-gray-300">Mid-level</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500">Weekly notifications</span>
                    <span class="text-xs text-gray-500">Created 2 weeks ago</span>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <h3 class="mb-4 text-lg font-semibold text-white">Alert Statistics</h3>
                <div class="rounded-lg bg-dark-800 p-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center">
                      <p class="text-sm text-gray-400">New Jobs This Week</p>
                      <p class="text-2xl font-bold text-white">24</p>
                    </div>
                    <div class="text-center">
                      <p class="text-sm text-gray-400">Applied</p>
                      <p class="text-2xl font-bold text-white">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Guidance Section -->
        <div class="mt-16 rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-8 md:p-10">
          <div class="grid gap-10 md:grid-cols-2">
            <div>
              <h2 class="mb-4 text-2xl font-bold text-white">Tips for Effective Job Alerts</h2>
              <ul class="space-y-3 text-gray-400">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use multiple related job titles to capture more relevant opportunities</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Include nearby locations to expand your search radius</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set up multiple alerts with different criteria for maximum coverage</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Choose daily frequency for competitive fields to apply early</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 class="mb-4 text-2xl font-bold text-white">Our AI Matching Technology</h2>
              <p class="mb-4 text-gray-400">
                Our advanced AI analyzes your profile, resume, and preferences to deliver highly relevant job opportunities, even when they don't exactly match your search terms.
              </p>
              <div class="flex items-center">
                <div class="text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-white">Complete Your Profile</h3>
                  <p class="text-sm text-gray-400">For even better job matching, make sure your profile is complete with all your skills and experience.</p>
                  <a href="#" class="mt-1 inline-block text-sm font-medium text-primary-500 hover:text-primary-400">
                    Update Profile →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Job Alerts - Vortexify',
  meta: [
    { name: 'description', content: 'Create personalized job alerts to get notified about new opportunities that match your skills, experience, and preferences.' }
  ]
});
</script> 