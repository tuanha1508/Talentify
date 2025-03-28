<template>
  <div class="min-h-screen bg-dark-950">
    <div class="pt-32 pb-20">
      <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Career <span class="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p class="mx-auto max-w-2xl text-lg text-gray-400">
            Expert guidance, tools, and insights to help you advance your career and land your dream job.
          </p>
        </div>

        <!-- Resource Categories -->
        <div class="mb-16">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button class="flex flex-col items-center rounded-xl bg-dark-900 p-6 transition-all hover:bg-dark-800 hover:shadow-glow-sm">
              <div class="mb-3 rounded-full bg-primary-500/10 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-white">Resume Tips</span>
            </button>
            <button class="flex flex-col items-center rounded-xl bg-dark-900 p-6 transition-all hover:bg-dark-800 hover:shadow-glow-sm">
              <div class="mb-3 rounded-full bg-secondary-500/10 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-white">Interview Prep</span>
            </button>
            <button class="flex flex-col items-center rounded-xl bg-dark-900 p-6 transition-all hover:bg-dark-800 hover:shadow-glow-sm">
              <div class="mb-3 rounded-full bg-accent-green/10 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span class="text-white">Career Growth</span>
            </button>
            <button class="flex flex-col items-center rounded-xl bg-dark-900 p-6 transition-all hover:bg-dark-800 hover:shadow-glow-sm">
              <div class="mb-3 rounded-full bg-accent-purple/10 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span class="text-white">Skill Building</span>
            </button>
          </div>
        </div>

        <!-- Featured Articles Section -->
        <div class="mb-16">
          <div class="mb-8 flex items-center justify-between">
            <h2 class="text-2xl font-bold text-white">Featured Articles</h2>
            <a href="#" class="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400">
              <span>View All Articles</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Article Card 1 -->
            <div class="group overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" alt="How to Write a Resume That Gets You Hired" class="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div class="p-6">
                <div class="mb-2 flex items-center gap-2">
                  <span class="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-500">Resume</span>
                  <span class="text-xs text-gray-500">5 min read</span>
                </div>
                <h3 class="mb-2 text-xl font-semibold text-white">How to Write a Resume That Gets You Hired</h3>
                <p class="mb-4 text-gray-400">Learn the key elements of a standout resume that captures recruiters' attention and showcases your value.</p>
                <a href="#" class="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400">
                  <span>Read Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Article Card 2 -->
            <div class="group overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" alt="Mastering the Virtual Interview" class="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div class="p-6">
                <div class="mb-2 flex items-center gap-2">
                  <span class="rounded-full bg-secondary-500/10 px-3 py-1 text-xs font-medium text-secondary-500">Interview</span>
                  <span class="text-xs text-gray-500">7 min read</span>
                </div>
                <h3 class="mb-2 text-xl font-semibold text-white">Mastering the Virtual Interview</h3>
                <p class="mb-4 text-gray-400">Tips and strategies for making a strong impression in remote interviews, from tech setup to body language.</p>
                <a href="#" class="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400">
                  <span>Read Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Article Card 3 -->
            <div class="group overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Negotiating Your Salary With Confidence" class="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div class="p-6">
                <div class="mb-2 flex items-center gap-2">
                  <span class="rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">Career Growth</span>
                  <span class="text-xs text-gray-500">6 min read</span>
                </div>
                <h3 class="mb-2 text-xl font-semibold text-white">Negotiating Your Salary With Confidence</h3>
                <p class="mb-4 text-gray-400">How to research, prepare, and confidently negotiate for the compensation you deserve.</p>
                <a href="#" class="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-400">
                  <span>Read Article</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Resources Section -->
        <div class="mb-16">
          <div class="mb-8 flex items-center justify-between">
            <h2 class="text-2xl font-bold text-white">Video Resources</h2>
            <a href="#" class="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400">
              <span>View All Videos</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Video Card 1 -->
            <div class="overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="group relative aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071" alt="Interview Question Master Class" class="h-full w-full object-cover" />
                <div class="absolute inset-0 flex items-center justify-center bg-dark-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/80 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-xl font-semibold text-white">Interview Question Master Class</h3>
                <p class="mb-4 text-gray-400">Learn how to answer the 20 most common interview questions with confidence and authenticity.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">24:15</span>
                  <div class="flex items-center gap-3">
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Video Card 2 -->
            <div class="overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="group relative aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070" alt="LinkedIn Profile Optimization" class="h-full w-full object-cover" />
                <div class="absolute inset-0 flex items-center justify-center bg-dark-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/80 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-xl font-semibold text-white">LinkedIn Profile Optimization</h3>
                <p class="mb-4 text-gray-400">Maximize your visibility to recruiters by optimizing your LinkedIn profile with expert techniques.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">18:42</span>
                  <div class="flex items-center gap-3">
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Video Card 3 -->
            <div class="overflow-hidden rounded-xl bg-dark-900 shadow-linear transition-all hover:shadow-glow-sm">
              <div class="group relative aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Networking for Career Success" class="h-full w-full object-cover" />
                <div class="absolute inset-0 flex items-center justify-center bg-dark-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/80 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-xl font-semibold text-white">Networking for Career Success</h3>
                <p class="mb-4 text-gray-400">How to build genuine professional relationships that can help you discover opportunities and advance your career.</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">22:37</span>
                  <div class="flex items-center gap-3">
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- E-books and Templates Section -->
        <div class="mb-16 rounded-xl bg-gradient-to-br from-dark-900 to-dark-800 p-8 md:p-12">
          <div class="text-center">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              Free E-books & Templates
            </h2>
            <p class="mx-auto mb-8 max-w-2xl text-gray-400">
              Download our professionally crafted resources to boost your job search and career development.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Resource Card 1 -->
            <div class="rounded-xl bg-dark-900/50 p-6 backdrop-blur-sm transition-all hover:bg-dark-800/70">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Ultimate Resume Templates</h3>
              <p class="mb-4 text-sm text-gray-400">10 ATS-friendly resume templates designed for different industries and career levels.</p>
              <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-800 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500/20 hover:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Now</span>
              </button>
            </div>

            <!-- Resource Card 2 -->
            <div class="rounded-xl bg-dark-900/50 p-6 backdrop-blur-sm transition-all hover:bg-dark-800/70">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Interview Preparation Guide</h3>
              <p class="mb-4 text-sm text-gray-400">Comprehensive guide with 100+ interview questions, sample answers, and preparation strategies.</p>
              <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-800 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-500/20 hover:text-secondary-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Now</span>
              </button>
            </div>

            <!-- Resource Card 3 -->
            <div class="rounded-xl bg-dark-900/50 p-6 backdrop-blur-sm transition-all hover:bg-dark-800/70">
              <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-green/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="mb-2 text-lg font-semibold text-white">Salary Negotiation Toolkit</h3>
              <p class="mb-4 text-sm text-gray-400">Scripts, worksheets, and strategies to help you negotiate your compensation with confidence.</p>
              <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-800 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-green/20 hover:text-accent-green">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Now</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Newsletter Sign-up -->
        <div class="rounded-xl bg-dark-900 p-8 text-center md:p-12">
          <div class="mx-auto max-w-2xl">
            <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">
              Get Career Insights Delivered
            </h2>
            <p class="mb-6 text-gray-400">
              Subscribe to our newsletter for expert career advice, industry trends, and job search tips delivered straight to your inbox.
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
  title: 'Career Resources - Vortexify',
  meta: [
    { name: 'description', content: 'Access expert career guidance, tools, and resources to help you advance your career and land your dream job.' }
  ]
});
</script> 