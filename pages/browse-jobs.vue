<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Browse <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Jobs</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Discover opportunities that match your skills and career goals, powered by our AI matching technology.
          </p>
        </div>

        <!-- Search and Filter Section -->
        <div class="mb-12 rounded-xl bg-dark-900 p-6 shadow-glow-sm">
          <div class="grid gap-4 md:grid-cols-3">
            <div>
              <label for="keyword" class="mb-2 block text-sm font-medium text-gray-300">Keywords</label>
              <input
                type="text"
                id="keyword"
                placeholder="Job title, skills, or company"
                class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label for="location" class="mb-2 block text-sm font-medium text-gray-300">Location</label>
              <input
                type="text"
                id="location"
                placeholder="City, state, or remote"
                class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label for="job-type" class="mb-2 block text-sm font-medium text-gray-300">Job Type</label>
              <select
                id="job-type"
                class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
              >
                <option value="">All Job Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="remote">Remote</option>
                <option value="internship">Internship</option>
              </select>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <button class="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <span>Advanced Filters</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button class="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-2 font-medium text-white hover:from-primary-600 hover:to-secondary-700">
              Search Jobs
            </button>
          </div>
        </div>

        <!-- Job Listings -->
        <div class="mb-16">
          <div class="mb-8 flex items-center justify-between">
            <h2 class="text-2xl font-bold text-white">Featured Jobs</h2>
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-400">Sort by:</span>
              <select class="rounded-lg border border-dark-700 bg-dark-800 px-3 py-1 text-sm text-white focus:border-primary-500 focus:outline-none">
                <option value="relevance">Relevance</option>
                <option value="date">Date Posted</option>
                <option value="salary">Salary</option>
              </select>
            </div>
          </div>

          <!-- Job Cards -->
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Job Card 1 -->
            <div class="group rounded-xl bg-dark-900 p-6 shadow-linear transition-transform hover:scale-[1.02] hover:shadow-glow-sm">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <span class="text-xl font-bold text-blue-500">A</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">AI Engineer</h3>
                    <p class="text-sm text-gray-400">AlphaTech Industries</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div class="mb-4 space-y-2">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">San Francisco, CA (Remote)</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">Full-time</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">$120,000 - $160,000 /year</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">Machine Learning</span>
                <span class="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500">Python</span>
                <span class="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">TensorFlow</span>
              </div>
              <div class="mt-5 pt-5 border-t border-dark-800">
                <a href="#" class="block w-full rounded-lg bg-dark-800 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-500">
                  View Job
                </a>
              </div>
            </div>

            <!-- Job Card 2 -->
            <div class="group rounded-xl bg-dark-900 p-6 shadow-linear transition-transform hover:scale-[1.02] hover:shadow-glow-sm">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <span class="text-xl font-bold text-green-500">V</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">UX/UI Designer</h3>
                    <p class="text-sm text-gray-400">VisionaryApps</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div class="mb-4 space-y-2">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">New York, NY (Hybrid)</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">Full-time</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">$95,000 - $120,000 /year</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500">Figma</span>
                <span class="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500">UI Design</span>
                <span class="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500">Prototyping</span>
              </div>
              <div class="mt-5 pt-5 border-t border-dark-800">
                <a href="#" class="block w-full rounded-lg bg-dark-800 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-500">
                  View Job
                </a>
              </div>
            </div>

            <!-- Job Card 3 -->
            <div class="group rounded-xl bg-dark-900 p-6 shadow-linear transition-transform hover:scale-[1.02] hover:shadow-glow-sm">
              <div class="mb-4 flex items-start justify-between">
                <div class="flex items-center gap-3">
                  <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                    <span class="text-xl font-bold text-purple-500">Q</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">Full Stack Developer</h3>
                    <p class="text-sm text-gray-400">QuantumSoft</p>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
              <div class="mb-4 space-y-2">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">Austin, TX (Remote)</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">Full-time</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm text-gray-400">$110,000 - $140,000 /year</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500">React</span>
                <span class="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">Node.js</span>
                <span class="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-500">TypeScript</span>
              </div>
              <div class="mt-5 pt-5 border-t border-dark-800">
                <a href="#" class="block w-full rounded-lg bg-dark-800 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-500">
                  View Job
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center">
            <button class="rounded-lg border border-dark-700 bg-dark-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:border-primary-500 hover:text-primary-500">
              Load More Jobs
            </button>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-8 text-center md:p-12">
          <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
            Let AI Find Your Perfect Job Match
          </h2>
          <p class="mx-auto mb-6 max-w-2xl text-gray-400">
            Upload your resume and let our AI-powered matching technology connect you with jobs that align with your skills, experience, and career goals.
          </p>
          <button class="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 font-medium text-white shadow-glow-sm hover:shadow-glow">
            Upload Your Resume
          </button>
        </div>
      </div>
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import FooterSection from '~/components/FooterSection.vue';

useHead({
  title: 'Browse Jobs - Vortexify',
  meta: [
    { name: 'description', content: 'Discover job opportunities that match your skills and career goals with Vortexify\'s AI-powered job search.' }
  ]
});
</script> 