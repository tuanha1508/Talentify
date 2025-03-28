<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Post a <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Job</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Reach thousands of qualified candidates and find the perfect talent for your team.
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid gap-10 lg:grid-cols-3">
          <!-- Form Column -->
          <div class="lg:col-span-2">
            <div class="rounded-xl bg-dark-900 p-6 md:p-8">
              <h2 class="mb-8 text-2xl font-bold text-white">Job Listing Details</h2>
              
              <div class="space-y-6">
                <!-- Company Information -->
                <div>
                  <h3 class="mb-4 text-lg font-semibold text-white">Company Information</h3>
                  
                  <div class="grid gap-4 md:grid-cols-2">
                    <div>
                      <label for="company-name" class="mb-2 block text-sm font-medium text-gray-300">Company Name*</label>
                      <input
                        type="text"
                        id="company-name"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="e.g. Acme Inc."
                        required
                      />
                    </div>
                    
                    <div>
                      <label for="company-website" class="mb-2 block text-sm font-medium text-gray-300">Company Website</label>
                      <input
                        type="url"
                        id="company-website"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="e.g. https://www.example.com"
                      />
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <label for="company-description" class="mb-2 block text-sm font-medium text-gray-300">Company Description*</label>
                    <textarea
                      id="company-description"
                      rows="3"
                      class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Brief description of your company and culture..."
                      required
                    ></textarea>
                  </div>
                  
                  <div class="mt-4">
                    <label for="company-logo" class="mb-2 block text-sm font-medium text-gray-300">Company Logo</label>
                    <div class="flex items-center justify-center w-full">
                      <label for="company-logo" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-dark-600 bg-dark-800 hover:bg-dark-700">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p class="mb-2 text-sm text-gray-400">Click to upload</p>
                          <p class="text-xs text-gray-500">SVG, PNG, JPG (MAX. 2MB)</p>
                        </div>
                        <input id="company-logo" type="file" class="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                </div>
                
                <!-- Job Details -->
                <div class="pt-6 border-t border-dark-700">
                  <h3 class="mb-4 text-lg font-semibold text-white">Job Details</h3>
                  
                  <div>
                    <label for="job-title" class="mb-2 block text-sm font-medium text-gray-300">Job Title*</label>
                    <input
                      type="text"
                      id="job-title"
                      class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="e.g. Senior Software Engineer"
                      required
                    />
                  </div>
                  
                  <div class="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label for="job-location" class="mb-2 block text-sm font-medium text-gray-300">Location*</label>
                      <input
                        type="text"
                        id="job-location"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="e.g. New York, NY"
                        required
                      />
                      
                      <div class="mt-2 flex items-center">
                        <input type="checkbox" id="remote-option" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                        <label for="remote-option" class="ml-2 text-sm text-gray-300">This position is remote-friendly</label>
                      </div>
                    </div>
                    
                    <div>
                      <label for="job-type" class="mb-2 block text-sm font-medium text-gray-300">Job Type*</label>
                      <select
                        id="job-type"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                        required
                      >
                        <option value="" disabled selected>Select job type</option>
                        <option value="full_time">Full-time</option>
                        <option value="part_time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label for="experience-level" class="mb-2 block text-sm font-medium text-gray-300">Experience Level*</label>
                      <select
                        id="experience-level"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                        required
                      >
                        <option value="" disabled selected>Select experience level</option>
                        <option value="internship">Internship</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                        <option value="executive">Executive</option>
                      </select>
                    </div>
                    
                    <div>
                      <label for="category" class="mb-2 block text-sm font-medium text-gray-300">Category*</label>
                      <select
                        id="category"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white focus:border-primary-500 focus:outline-none"
                        required
                      >
                        <option value="" disabled selected>Select category</option>
                        <option value="technology">Technology</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="customer_service">Customer Service</option>
                        <option value="finance">Finance</option>
                        <option value="hr">Human Resources</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <label for="salary-min" class="mb-2 block text-sm font-medium text-gray-300">Salary Range (Min)</label>
                      <input
                        type="number"
                        id="salary-min"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="e.g. 60000"
                      />
                    </div>
                    
                    <div>
                      <label for="salary-max" class="mb-2 block text-sm font-medium text-gray-300">Salary Range (Max)</label>
                      <input
                        type="number"
                        id="salary-max"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="e.g. 80000"
                      />
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <div class="flex items-center">
                      <input type="checkbox" id="hide-salary" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                      <label for="hide-salary" class="ml-2 text-sm text-gray-300">Hide salary range from job post</label>
                    </div>
                  </div>
                </div>
                
                <!-- Job Description -->
                <div class="pt-6 border-t border-dark-700">
                  <h3 class="mb-4 text-lg font-semibold text-white">Job Description</h3>
                  
                  <div>
                    <label for="job-description" class="mb-2 block text-sm font-medium text-gray-300">Description*</label>
                    <textarea
                      id="job-description"
                      rows="6"
                      class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Detailed description of the job role, responsibilities, and day-to-day activities..."
                      required
                    ></textarea>
                  </div>
                  
                  <div class="mt-4">
                    <label for="requirements" class="mb-2 block text-sm font-medium text-gray-300">Requirements*</label>
                    <textarea
                      id="requirements"
                      rows="6"
                      class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Skills, qualifications, and experience required for this role..."
                      required
                    ></textarea>
                  </div>
                  
                  <div class="mt-4">
                    <label for="benefits" class="mb-2 block text-sm font-medium text-gray-300">Benefits</label>
                    <textarea
                      id="benefits"
                      rows="4"
                      class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Benefits, perks, and other offerings for this position..."
                    ></textarea>
                  </div>
                </div>
                
                <!-- Application Settings -->
                <div class="pt-6 border-t border-dark-700">
                  <h3 class="mb-4 text-lg font-semibold text-white">Application Settings</h3>
                  
                  <div>
                    <label class="mb-2 block text-sm font-medium text-gray-300">How candidates should apply*</label>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input type="radio" id="apply-platform" name="apply-method" class="h-4 w-4 border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" checked />
                        <label for="apply-platform" class="ml-2 text-sm text-gray-300">Receive applications through Vortexify</label>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" id="apply-email" name="apply-method" class="h-4 w-4 border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                        <label for="apply-email" class="ml-2 text-sm text-gray-300">Receive applications via email</label>
                      </div>
                      <div class="flex items-center">
                        <input type="radio" id="apply-url" name="apply-method" class="h-4 w-4 border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                        <label for="apply-url" class="ml-2 text-sm text-gray-300">Direct applicants to an external website</label>
                      </div>
                    </div>
                    
                    <div id="email-input" class="mt-3 hidden">
                      <input
                        type="email"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="Enter email address"
                      />
                    </div>
                    
                    <div id="url-input" class="mt-3 hidden">
                      <input
                        type="url"
                        class="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
                        placeholder="Enter application URL"
                      />
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <label class="mb-2 block text-sm font-medium text-gray-300">Required Application Documents</label>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="flex items-center">
                        <input type="checkbox" id="require-resume" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" checked />
                        <label for="require-resume" class="ml-2 text-sm text-gray-300">Resume/CV</label>
                      </div>
                      <div class="flex items-center">
                        <input type="checkbox" id="require-cover" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                        <label for="require-cover" class="ml-2 text-sm text-gray-300">Cover Letter</label>
                      </div>
                      <div class="flex items-center">
                        <input type="checkbox" id="require-portfolio" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" />
                        <label for="require-portfolio" class="ml-2 text-sm text-gray-300">Portfolio</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Post Preview & Submission -->
                <div class="pt-6 border-t border-dark-700">
                  <div class="flex justify-between">
                    <button class="rounded-lg bg-dark-800 px-5 py-3 text-sm font-medium text-white hover:bg-dark-700">
                      Preview
                    </button>
                    <button class="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 font-medium text-white hover:shadow-glow-sm transition-shadow">
                      Post Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <!-- Pricing -->
            <div class="mb-6 rounded-xl bg-dark-900 p-6">
              <h2 class="mb-4 text-xl font-bold text-white">Job Posting Summary</h2>
              
              <div class="mb-4 rounded-lg bg-dark-800 p-4">
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm text-gray-400">Standard Job Posting</span>
                  <span class="text-sm font-medium text-white">$299</span>
                </div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm text-gray-400">Featured Boost (+14 days)</span>
                  <span class="text-sm font-medium text-white">$99</span>
                </div>
                <div class="h-px w-full bg-dark-700 my-2"></div>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-white">Total</span>
                  <span class="text-lg font-bold text-white">$398</span>
                </div>
              </div>
              
              <div class="mb-4">
                <div class="flex items-center">
                  <input type="checkbox" id="featured-boost" class="h-4 w-4 rounded border-dark-600 bg-dark-800 text-primary-500 focus:ring-primary-500" checked />
                  <label for="featured-boost" class="ml-2 text-sm text-white">Include Featured Boost</label>
                </div>
                <p class="mt-1 text-xs text-gray-500">Get 5x more visibility with featured placement in search results and email alerts.</p>
              </div>
              
              <div>
                <h3 class="mb-2 text-sm font-medium text-white">Your posting includes:</h3>
                <ul class="space-y-2 text-sm text-gray-400">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day listing</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered candidate matching</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Applicant tracking dashboard</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Resume screening tools</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Tips -->
            <div class="rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-6">
              <h2 class="mb-4 text-lg font-bold text-white">Tips for Attracting Top Talent</h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="mb-1 text-sm font-semibold text-primary-400">Be specific about requirements</h3>
                  <p class="text-xs text-gray-400">Clearly define must-have skills vs. nice-to-have to attract the right candidates.</p>
                </div>
                
                <div>
                  <h3 class="mb-1 text-sm font-semibold text-primary-400">Highlight company culture</h3>
                  <p class="text-xs text-gray-400">Describe your company values and work environment to attract culture fits.</p>
                </div>
                
                <div>
                  <h3 class="mb-1 text-sm font-semibold text-primary-400">Showcase growth opportunities</h3>
                  <p class="text-xs text-gray-400">Top candidates are looking for career advancement. Explain potential growth paths.</p>
                </div>
                
                <div>
                  <h3 class="mb-1 text-sm font-semibold text-primary-400">Include salary information</h3>
                  <p class="text-xs text-gray-400">Job posts with salary ranges get 30% more qualified applicants.</p>
                </div>
              </div>
              
              <div class="mt-4">
                <a href="#" class="text-xs font-medium text-primary-500 hover:text-primary-400">
                  View more recruiting tips →
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Need Help Section -->
        <div class="mt-16 rounded-xl bg-dark-900 p-8 text-center md:p-12">
          <div class="mx-auto max-w-2xl">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              Need Help With Recruiting?
            </h2>
            <p class="mb-6 text-gray-400">
              Our team of recruiting experts can help you craft the perfect job description, screen candidates, and find the ideal match for your team.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row justify-center">
              <a href="#" class="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-600 px-6 py-3 font-medium text-white hover:shadow-glow-sm transition-shadow">
                Schedule a Consultation
              </a>
              <a href="#" class="rounded-lg border border-dark-700 bg-dark-800 px-6 py-3 font-medium text-white hover:bg-dark-700">
                Learn About Recruiting Services
              </a>
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
  title: 'Post a Job - Vortexify',
  meta: [
    { name: 'description', content: 'Post a job on Vortexify and reach thousands of qualified candidates. Our AI-powered platform helps you find the perfect talent for your team.' }
  ]
});
</script> 