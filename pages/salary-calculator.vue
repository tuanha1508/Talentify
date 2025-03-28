<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Salary <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Calculator</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Calculate competitive salary ranges based on your skills, experience, location, and industry standards.
          </p>
        </div>

        <!-- Salary Calculator Form and Results -->
        <div class="mb-16 grid gap-10 lg:grid-cols-2">
          <!-- Calculator Form -->
          <div class="rounded-xl bg-dark-900 p-6 md:p-8">
            <h2 class="mb-6 text-2xl font-bold text-white">Calculate Your Worth</h2>
            <div class="space-y-6">
              <!-- Job Title -->
              <div>
                <label for="job-title" class="mb-2 block text-sm font-medium text-gray-300">Job Title</label>
                <input
                  type="text"
                  id="job-title"
                  class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>
              
              <!-- Location -->
              <div>
                <label for="location" class="mb-2 block text-sm font-medium text-gray-300">Location</label>
                <input
                  type="text"
                  id="location"
                  class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                  placeholder="e.g. San Francisco, CA"
                />
              </div>
              
              <!-- Industry -->
              <div>
                <label for="industry" class="mb-2 block text-sm font-medium text-gray-300">Industry</label>
                <select
                  id="industry"
                  class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="" disabled selected>Select an industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                  <option value="media">Media & Communication</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <!-- Years of Experience -->
              <div>
                <label for="experience" class="mb-2 block text-sm font-medium text-gray-300">
                  Years of Experience
                  <span class="ml-1 text-secondary-500" id="experience-value">5</span>
                </label>
                <input
                  type="range"
                  id="experience"
                  min="0"
                  max="20"
                  value="5"
                  step="1"
                  class="w-full appearance-none rounded-lg bg-dark-800 h-2 accent-primary-500 focus:outline-none"
                />
                <div class="mt-1 flex justify-between text-xs text-gray-500">
                  <span>Entry Level</span>
                  <span>Mid-Career</span>
                  <span>Senior/Expert</span>
                </div>
              </div>
              
              <!-- Education Level -->
              <div>
                <label for="education" class="mb-2 block text-sm font-medium text-gray-300">Education Level</label>
                <select
                  id="education"
                  class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                >
                  <option value="" disabled selected>Select your highest education level</option>
                  <option value="high-school">High School</option>
                  <option value="associates">Associate's Degree</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="professional">Professional Degree</option>
                </select>
              </div>
              
              <!-- Key Skills -->
              <div>
                <label for="skills" class="mb-2 block text-sm font-medium text-gray-300">Key Skills (up to 5)</label>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-400 flex items-center">
                    Python
                    <button class="ml-1.5 text-primary-400 hover:text-primary-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                  <span class="rounded-full bg-secondary-500/20 px-3 py-1 text-xs font-medium text-secondary-400 flex items-center">
                    React
                    <button class="ml-1.5 text-secondary-400 hover:text-secondary-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                  <span class="rounded-full bg-accent-green/20 px-3 py-1 text-xs font-medium text-accent-green flex items-center">
                    AWS
                    <button class="ml-1.5 text-accent-green hover:text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </span>
                </div>
                <div class="flex">
                  <input
                    type="text"
                    id="skills"
                    class="w-full rounded-l-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Add a skill..."
                  />
                  <button class="rounded-r-lg bg-primary-500 px-4 font-medium text-white hover:bg-primary-600">
                    Add
                  </button>
                </div>
              </div>
              
              <!-- Calculate Button -->
              <button class="w-full rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 py-3 font-medium text-white shadow-md hover:shadow-glow-sm transition-shadow">
                Calculate Salary Range
              </button>
            </div>
          </div>
          
          <!-- Calculator Results -->
          <div class="rounded-xl bg-dark-900 p-6 md:p-8">
            <h2 class="mb-6 text-2xl font-bold text-white">Your Estimated Salary Range</h2>
            
            <!-- Salary Range Display -->
            <div class="mb-8 rounded-lg bg-dark-800 p-6 text-center">
              <p class="mb-2 text-sm font-medium text-gray-400">Based on your profile and market data</p>
              <div class="mb-4 flex items-baseline justify-center">
                <span class="text-3xl font-bold text-white sm:text-4xl">$120,000</span>
                <span class="mx-2 text-gray-500">—</span>
                <span class="text-3xl font-bold text-white sm:text-4xl">$145,000</span>
              </div>
              <p class="text-sm text-gray-500">Annual Salary in USD</p>
              
              <!-- Confidence Meter -->
              <div class="mt-6">
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-xs font-medium text-gray-400">Confidence Level</span>
                  <span class="text-xs font-medium text-accent-green">High</span>
                </div>
                <div class="h-2 w-full rounded-full bg-dark-700">
                  <div class="h-2 rounded-full bg-accent-green" style="width: 85%"></div>
                </div>
                <p class="mt-2 text-xs text-gray-500">Based on 2,347 similar profiles in your area</p>
              </div>
            </div>
            
            <!-- Salary Breakdown -->
            <div class="mb-6">
              <h3 class="mb-4 text-lg font-semibold text-white">Salary Breakdown</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Base Salary</span>
                  <span class="text-sm font-medium text-white">$110,000 - $130,000</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Average Bonus</span>
                  <span class="text-sm font-medium text-white">$8,000 - $12,000</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-400">Stock Options</span>
                  <span class="text-sm font-medium text-white">$2,000 - $3,000</span>
                </div>
                <div class="h-px w-full bg-dark-700"></div>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-300">Total Compensation</span>
                  <span class="text-sm font-bold text-white">$120,000 - $145,000</span>
                </div>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="flex flex-col space-y-3">
              <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-800 py-2.5 text-sm font-medium text-white hover:bg-dark-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Detailed Report</span>
              </button>
              <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-800 py-2.5 text-sm font-medium text-white hover:bg-dark-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span>Get Negotiation Tips</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Salary Insights -->
        <div class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-center text-white">Salary Insights</h2>
          
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Chart 1: Experience Impact -->
            <div class="rounded-xl bg-dark-900 p-6">
              <h3 class="mb-4 text-lg font-semibold text-white">Impact of Experience</h3>
              <div class="mb-4 h-48 w-full rounded-lg bg-dark-800 p-4">
                <!-- Placeholder for chart - would be implemented with a charting library -->
                <div class="flex h-full w-full items-center justify-center">
                  <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p class="mt-2 text-sm text-gray-500">Experience vs. Salary Chart</p>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-400">
                Each year of relevant experience adds approximately 8-12% to your base salary until reaching senior levels.
              </p>
            </div>
            
            <!-- Chart 2: Location Impact -->
            <div class="rounded-xl bg-dark-900 p-6">
              <h3 class="mb-4 text-lg font-semibold text-white">Location Comparison</h3>
              <div class="mb-4 h-48 w-full rounded-lg bg-dark-800 p-4">
                <!-- Placeholder for chart -->
                <div class="flex h-full w-full items-center justify-center">
                  <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p class="mt-2 text-sm text-gray-500">Location Comparison Chart</p>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-400">
                Your current location shows a 15% premium compared to the national average for this role.
              </p>
            </div>
            
            <!-- Chart 3: Skills Impact -->
            <div class="rounded-xl bg-dark-900 p-6">
              <h3 class="mb-4 text-lg font-semibold text-white">Skills Premium</h3>
              <div class="mb-4 h-48 w-full rounded-lg bg-dark-800 p-4">
                <!-- Placeholder for chart -->
                <div class="flex h-full w-full items-center justify-center">
                  <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p class="mt-2 text-sm text-gray-500">Skills Impact Chart</p>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-400">
                Your AWS skills add a 12% premium, while Python and React contribute an additional 8% combined.
              </p>
            </div>
          </div>
        </div>

        <!-- Additional Resources -->
        <div class="mb-16 rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-8 md:p-10">
          <div class="text-center">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              Maximize Your Earnings Potential
            </h2>
            <p class="mx-auto mb-8 max-w-2xl text-gray-400">
              Explore these resources to enhance your earning potential and negotiate better compensation packages.
            </p>
          </div>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Resource 1 -->
            <div class="rounded-xl bg-dark-900/70 p-6 backdrop-blur-sm">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Negotiation Guide</h3>
              <p class="mb-4 text-sm text-gray-400">Learn proven strategies to negotiate higher compensation and better benefits packages.</p>
              <a href="#" class="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400">
                <span>Read Guide</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <!-- Resource 2 -->
            <div class="rounded-xl bg-dark-900/70 p-6 backdrop-blur-sm">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Skill Development</h3>
              <p class="mb-4 text-sm text-gray-400">Discover high-value skills that can significantly increase your market value in your industry.</p>
              <a href="#" class="flex items-center gap-2 text-sm font-medium text-secondary-500 hover:text-secondary-400">
                <span>Explore Skills</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <!-- Resource 3 -->
            <div class="rounded-xl bg-dark-900/70 p-6 backdrop-blur-sm">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-green/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Industry Reports</h3>
              <p class="mb-4 text-sm text-gray-400">Access detailed industry compensation reports with trends, forecasts, and benchmarks.</p>
              <a href="#" class="flex items-center gap-2 text-sm font-medium text-accent-green hover:text-green-400">
                <span>View Reports</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter Sign-up -->
        <div class="rounded-xl bg-dark-900 p-8 text-center md:p-12">
          <div class="mx-auto max-w-2xl">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              Stay Updated on Salary Trends
            </h2>
            <p class="mb-6 text-gray-400">
              Get the latest salary data, industry trends, and negotiation tips delivered to your inbox monthly.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
              <button class="whitespace-nowrap rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 font-medium text-white hover:from-primary-600 hover:to-secondary-700 sm:w-auto">
                Subscribe
              </button>
            </div>
            <p class="mt-4 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Salary Calculator - Vortexify',
  meta: [
    { name: 'description', content: 'Calculate your market value with our AI-powered salary calculator. Get personalized salary insights based on your skills, experience, and location.' }
  ]
});
</script> 