<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Resume <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Builder</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Create a professional, ATS-friendly resume with our powerful AI-assisted builder in minutes.
          </p>
        </div>

        <!-- Template Selection -->
        <div class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-center text-white">Choose a Template</h2>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Template 1 -->
            <div class="group relative overflow-hidden rounded-xl bg-dark-900 transition-all hover:shadow-glow-sm">
              <div class="aspect-[3/4] overflow-hidden p-4">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070" alt="Minimalist Template" class="h-full w-full object-cover rounded-lg shadow-linear" />
              </div>
              <div class="p-4 border-t border-dark-800">
                <h3 class="text-lg font-semibold text-white">Minimalist</h3>
                <p class="mb-4 text-sm text-gray-400">Clean, modern design with optimal content spacing.</p>
                <button class="w-full rounded-lg bg-primary-500 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors">
                  Use Template
                </button>
              </div>
              <div class="absolute top-3 right-3">
                <span class="rounded-full bg-dark-900/90 px-3 py-1 text-xs font-medium text-white">Popular</span>
              </div>
            </div>

            <!-- Template 2 -->
            <div class="group relative overflow-hidden rounded-xl bg-dark-900 transition-all hover:shadow-glow-sm">
              <div class="aspect-[3/4] overflow-hidden p-4">
                <img src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070" alt="Executive Template" class="h-full w-full object-cover rounded-lg shadow-linear" />
              </div>
              <div class="p-4 border-t border-dark-800">
                <h3 class="text-lg font-semibold text-white">Executive</h3>
                <p class="mb-4 text-sm text-gray-400">Elegant layout for senior professionals and executives.</p>
                <button class="w-full rounded-lg bg-primary-500 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            <!-- Template 3 -->
            <div class="group relative overflow-hidden rounded-xl bg-dark-900 transition-all hover:shadow-glow-sm">
              <div class="aspect-[3/4] overflow-hidden p-4">
                <img src="https://images.unsplash.com/photo-1586282023358-08558ee63972?q=80&w=2070" alt="Creative Template" class="h-full w-full object-cover rounded-lg shadow-linear" />
              </div>
              <div class="p-4 border-t border-dark-800">
                <h3 class="text-lg font-semibold text-white">Creative</h3>
                <p class="mb-4 text-sm text-gray-400">Bold design for creatives and design professionals.</p>
                <button class="w-full rounded-lg bg-primary-500 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <button class="text-primary-500 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 mx-auto">
              <span>View All Templates</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Resume Builder Steps -->
        <div class="mb-16">
          <h2 class="mb-8 text-2xl font-bold text-center text-white">How It Works</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Step 1 -->
            <div class="rounded-xl bg-dark-900 p-6 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10">
                <span class="text-xl font-bold text-primary-500">1</span>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Choose a Template</h3>
              <p class="text-gray-400">Select from our professionally designed templates optimized for ATS systems.</p>
            </div>

            <!-- Step 2 -->
            <div class="rounded-xl bg-dark-900 p-6 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-500/10">
                <span class="text-xl font-bold text-secondary-500">2</span>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Add Your Content</h3>
              <p class="text-gray-400">Fill in your details or import from LinkedIn. Our AI will help optimize your content.</p>
            </div>

            <!-- Step 3 -->
            <div class="rounded-xl bg-dark-900 p-6 text-center">
              <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10">
                <span class="text-xl font-bold text-accent-green">3</span>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Download & Share</h3>
              <p class="text-gray-400">Export your resume as PDF, DOCX, or share directly with employers in our network.</p>
            </div>
          </div>
        </div>

        <!-- Resume Builder Demo -->
        <div class="mb-16 rounded-xl bg-dark-900 p-6 md:p-8 lg:p-10">
          <div class="grid gap-8 md:grid-cols-5">
            <!-- Form Side -->
            <div class="md:col-span-2 space-y-6">
              <h2 class="text-2xl font-bold text-white">Build Your Resume</h2>
              <p class="text-gray-400">Fill in your information below or upload your existing resume to get started.</p>
              
              <!-- Tabs -->
              <div class="flex border-b border-dark-700">
                <button class="px-4 py-2 font-medium text-primary-500 border-b-2 border-primary-500">Personal</button>
                <button class="px-4 py-2 font-medium text-gray-400 hover:text-white">Experience</button>
                <button class="px-4 py-2 font-medium text-gray-400 hover:text-white">Education</button>
                <button class="px-4 py-2 font-medium text-gray-400 hover:text-white">Skills</button>
              </div>
              
              <!-- Form -->
              <div class="space-y-4">
                <div>
                  <label for="full-name" class="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label for="job-title" class="block text-sm font-medium text-gray-300">Job Title</label>
                  <input
                    type="text"
                    id="job-title"
                    class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Senior Developer"
                  />
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-300">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="location" class="block text-sm font-medium text-gray-300">Location</label>
                  <input
                    type="text"
                    id="location"
                    class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="New York, NY"
                  />
                </div>
                
                <div>
                  <label for="summary" class="block text-sm font-medium text-gray-300">Professional Summary</label>
                  <textarea
                    id="summary"
                    rows="4"
                    class="mt-1 w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Brief summary of your professional background and key strengths..."
                  ></textarea>
                </div>
                
                <div class="flex justify-between">
                  <button class="rounded-lg bg-dark-800 px-5 py-2 text-sm font-medium text-white hover:bg-dark-700">Back</button>
                  <button class="rounded-lg bg-primary-500 px-5 py-2 text-sm font-medium text-white hover:bg-primary-600">Next: Experience</button>
                </div>
              </div>
              
              <div class="pt-4 border-t border-dark-700">
                <button class="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span>Import from LinkedIn</span>
                </button>
              </div>
            </div>
            
            <!-- Preview Side -->
            <div class="md:col-span-3 relative">
              <div class="aspect-[1/1.4] rounded-xl overflow-hidden shadow-glow-sm">
                <img src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070" alt="Resume Preview" class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-dark-950/40 flex items-center justify-center">
                  <div class="text-center p-6 bg-dark-900/90 rounded-xl max-w-md">
                    <h3 class="text-xl font-bold text-white mb-3">Live Preview</h3>
                    <p class="text-gray-300 mb-4">As you fill in your information, you'll see your resume update in real-time.</p>
                    <button class="rounded-lg bg-primary-500 px-6 py-2 text-sm font-medium text-white hover:bg-primary-600">Preview Resume</button>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-4 right-4 flex gap-2">
                <button class="rounded-full bg-dark-900/80 p-3 text-white hover:bg-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button class="rounded-full bg-dark-900/80 p-3 text-white hover:bg-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Features Section -->
        <div class="mb-16">
          <div class="text-center mb-10">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              AI-Powered Resume Optimization
            </h2>
            <p class="mx-auto max-w-2xl text-gray-400">
              Our AI analyzes job descriptions and optimizes your resume to increase interview chances.
            </p>
          </div>
          
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Feature 1 -->
            <div class="rounded-xl bg-dark-900 p-6">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Keyword Optimization</h3>
              <p class="text-gray-400">Automatically identifies and incorporates industry-relevant keywords to help your resume pass ATS screening.</p>
            </div>
            
            <!-- Feature 2 -->
            <div class="rounded-xl bg-dark-900 p-6">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Content Suggestions</h3>
              <p class="text-gray-400">Get AI-powered suggestions to improve your bullet points, highlight achievements, and quantify your impact.</p>
            </div>
            
            <!-- Feature 3 -->
            <div class="rounded-xl bg-dark-900 p-6">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-green/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">ATS Compatibility Check</h3>
              <p class="text-gray-400">Analyzes your resume format and content to ensure it's optimized for Applicant Tracking Systems.</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-8 text-center md:p-12">
          <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
            Ready to Build Your Professional Resume?
          </h2>
          <p class="mx-auto mb-6 max-w-2xl text-gray-400">
            Join thousands of job seekers who have created ATS-friendly resumes that get noticed by recruiters.
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button class="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 font-medium text-white shadow-glow-sm hover:shadow-glow">
              Get Started for Free
            </button>
            <button class="rounded-lg border border-dark-700 bg-dark-800/50 px-6 py-3 font-medium text-white hover:bg-dark-800">
              View Resume Examples
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'Resume Builder - Vortexify',
  meta: [
    { name: 'description', content: 'Create a professional, ATS-friendly resume with our AI-powered resume builder. Choose from expert templates and get hired faster.' }
  ]
});
</script> 