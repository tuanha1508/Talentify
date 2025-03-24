<template>
  <section id="contact" class="relative py-24">
    <div class="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900/95 to-dark-900"></div>
    
    <div class="container relative z-10 mx-auto px-4 md:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <span class="linear-badge-blue mb-4 inline-block">Ready to Get Started?</span>
        <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Take Your <span class="text-primary-400">HR Process</span> to the Next Level
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-gray-400">
          Join thousands of companies and professionals already using our platform to streamline 
          their hiring process and discover the perfect talent match.
        </p>
        
        <div class="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <button class="modern-cta-button min-w-[180px] text-center flex items-center justify-center group">
            Create Account
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <button class="btn-outline min-w-[180px] text-center flex items-center justify-center group">
            Schedule Demo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform duration-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </button>
        </div>
        
        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Email Contact -->
          <div class="group rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-6 text-center backdrop-blur transition-all duration-300 hover:bg-dark-800/95 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 border border-transparent hover:border-cyan-500/20">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/30 group-hover:shadow-md group-hover:shadow-cyan-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white">Email Us</h3>
            <p class="text-gray-400">support@hrmanagement.com</p>
            <a href="mailto:support@hrmanagement.com" class="mt-4 inline-block text-sm text-cyan-400 hover:text-cyan-300 relative group">
              <div class="flex items-center gap-1">
                <span>Send an email</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400/60 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </div>
          
          <!-- Phone Contact -->
          <div class="group rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-6 text-center backdrop-blur transition-all duration-300 hover:bg-dark-800/95 hover:shadow-lg hover:shadow-fuchsia-500/10 hover:-translate-y-1 border border-transparent hover:border-fuchsia-500/20">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-fuchsia-500/30 group-hover:shadow-md group-hover:shadow-fuchsia-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white">Call Us</h3>
            <p class="text-gray-400">+1 (555) 123-4567</p>
            <a href="tel:+15551234567" class="mt-4 inline-block text-sm text-fuchsia-400 hover:text-fuchsia-300 relative group">
              <div class="flex items-center gap-1">
                <span>Call now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400/60 to-fuchsia-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </div>
          
          <!-- Schedule Demo -->
          <div class="group rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 p-6 text-center backdrop-blur transition-all duration-300 hover:bg-dark-800/95 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-1 border border-transparent hover:border-teal-500/20">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500/30 group-hover:shadow-md group-hover:shadow-teal-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white">Schedule a Demo</h3>
            <p class="text-gray-400">Book time that works for you</p>
            <a href="#" class="mt-4 inline-block text-sm text-teal-400 hover:text-teal-300 relative group">
              <div class="flex items-center gap-1">
                <span>Book now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400/60 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
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