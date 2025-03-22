<template>
  <footer id="footer" class="relative border-t border-dark-800/50 py-16">
    <div class="absolute inset-0 bg-gradient-to-t from-dark-950 to-dark-900/90 opacity-80"></div>
    
    <div class="container relative z-10 mx-auto px-4 md:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Company Info -->
        <div>
          <div class="flex items-center">
            <div class="mr-3 h-8 w-8 rounded-lg bg-primary-500/20 p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-full w-full text-primary-400">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">NexusHR</h3>
          </div>
          <p class="mt-4 text-gray-400">Our AI-powered platform connects the right talent with the right opportunities, making hiring simpler and more effective.</p>
          <div class="mt-6 flex space-x-4">
            <a href="#" class="rounded-full bg-dark-800 p-2 text-gray-400 transition-colors hover:bg-dark-700 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="rounded-full bg-dark-800 p-2 text-gray-400 transition-colors hover:bg-dark-700 hover:text-white">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="rounded-full bg-dark-800 p-2 text-gray-400 transition-colors hover:bg-dark-700 hover:text-white">
              <span class="sr-only">GitHub</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Product Links -->
        <div>
          <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h3>
          <ul class="space-y-3">
            <li>
              <a href="#features" class="text-gray-300 transition-colors hover:text-primary-400">Features</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Pricing</a>
            </li>
            <li>
              <a href="#job-seekers" class="text-gray-300 transition-colors hover:text-primary-400">For Job Seekers</a>
            </li>
            <li>
              <a href="#employers" class="text-gray-300 transition-colors hover:text-primary-400">For Employers</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Success Stories</a>
            </li>
          </ul>
        </div>
        
        <!-- Resources Links -->
        <div>
          <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">Resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Blog</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Documentation</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Help Center</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">API Reference</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Community</a>
            </li>
          </ul>
        </div>
        
        <!-- Company Links -->
        <div>
          <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Careers</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-300 transition-colors hover:text-primary-400">Contact</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 transition-colors hover:text-primary-400">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-12 border-t border-dark-800 pt-8 text-center">
        <p class="text-sm text-gray-500">© 2025 NexusHR. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Additional component styling */
</style> 