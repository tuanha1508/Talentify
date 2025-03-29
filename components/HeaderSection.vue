<template>
  <header
    ref="header"
    :class="[
      'fixed left-0 right-0 top-0 z-50 w-full backdrop-blur-md transition-all duration-300',
      { 'translate-y-0 opacity-100 shadow-md': visible, 'pointer-events-none -translate-y-full opacity-0': !visible }
    ]"
  >
    <div class="container mx-auto flex h-12 items-center justify-between px-4 md:px-8 bg-transparent">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center group cursor-pointer">
        <div class="mr-1 h-10 w-10 flex items-center relative group">
          <img src="/images/logo.svg" alt="Vortexify Logo" class="h-full w-full relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <div class="absolute inset-0 bg-secondary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h1 class="text-lg font-semibold text-white tracking-wide font-display flex items-center bg-gradient-to-r from-white via-secondary-300 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">Vortexify</h1>
      </NuxtLink>

      <!-- Main Navigation -->
      <nav class="hidden items-center md:flex">
        <ul class="flex items-center font-display">
          <li>
            <NuxtLink to="/" :class="[
              'text-sm font-medium transition-all duration-200 relative group',
              route.path === '/' ? 'text-white active-link' : 'text-gray-400 hover:text-white'
            ]">
              Home
              <span :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/30 to-white transition-all duration-300 rounded-full w-0 group-hover:w-full'
              ]"></span>
            </NuxtLink>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li class="relative group">
            <div :class="[
              'flex items-center text-sm font-medium transition-all duration-200 cursor-pointer relative',
              route.path.startsWith('/features') ? 'text-white active-link' : 'text-gray-400 hover:text-white'
            ]">
              Features
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <span :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/30 to-white transition-all duration-300 rounded-full w-0 group-hover:w-full'
              ]"></span>
            </div>
            <!-- Dropdown menu -->
            <div class="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
              <div class="p-2 bg-dark-800/95 backdrop-blur-md rounded-xl shadow-xl border border-dark-700/50">
                <NuxtLink to="/features" :class="[
                  'block px-4 py-2 text-sm hover:bg-dark-700/50 rounded-lg transition duration-200',
                  route.path === '/features' ? 'text-white bg-dark-700/30' : 'text-gray-300 hover:text-white'
                ]">
                  All Features
                </NuxtLink>
                <NuxtLink to="/features/smart-job-matching" :class="[
                  'block px-4 py-2 text-sm hover:bg-dark-700/50 rounded-lg transition duration-200',
                  route.path === '/features/smart-job-matching' ? 'text-white bg-dark-700/30' : 'text-gray-300 hover:text-white'
                ]">
                  Smart Job Matching
                </NuxtLink>
                <NuxtLink to="/features/secure-hiring-process" :class="[
                  'block px-4 py-2 text-sm hover:bg-dark-700/50 rounded-lg transition duration-200',
                  route.path === '/features/secure-hiring-process' ? 'text-white bg-dark-700/30' : 'text-gray-300 hover:text-white'
                ]">
                  Secure Hiring Process
                </NuxtLink>
                <NuxtLink to="/features/advanced-analytics" :class="[
                  'block px-4 py-2 text-sm hover:bg-dark-700/50 rounded-lg transition duration-200',
                  route.path === '/features/advanced-analytics' ? 'text-white bg-dark-700/30' : 'text-gray-300 hover:text-white'
                ]">
                  Advanced Analytics
                </NuxtLink>
              </div>
            </div>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <NuxtLink to="/pricing" :class="[
              'text-sm font-medium transition-all duration-200 relative group',
              route.path === '/pricing' ? 'text-white active-link' : 'text-gray-400 hover:text-white'
            ]">
              Pricing
              <span :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/30 to-white transition-all duration-300 rounded-full w-0 group-hover:w-full'
              ]"></span>
            </NuxtLink>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <NuxtLink to="/about" :class="[
              'text-sm font-medium transition-all duration-200 relative group',
              route.path === '/about' ? 'text-white active-link' : 'text-gray-400 hover:text-white'
            ]">
              About
              <span :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/30 to-white transition-all duration-300 rounded-full w-0 group-hover:w-full'
              ]"></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Authenticated User Status -->
        <div v-if="userStore.isAuthenticated">
          <UserStatus />
        </div>
        
        <!-- Sign In Button -->
        <NuxtLink v-else to="/sign-in" :class="[
          'mr-2 hidden text-sm font-medium transition-all duration-200 relative group md:block',
          route.path === '/sign-in' ? 'text-white active-link' : 'text-gray-300 hover:text-white'
        ]">
          Sign In
          <span :class="[
            'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white/30 to-white transition-all duration-300 rounded-full w-0 group-hover:w-full'
          ]"></span>
        </NuxtLink>

        <!-- Sign Up Button -->
        <NuxtLink v-if="!userStore.isAuthenticated" to="/sign-up" :class="[
          'nav-button-no-float relative overflow-hidden rounded-xl',
          route.path === '/sign-up' ? 'pulse-button-active' : 'pulse-button'
        ]">
          <span class="relative z-10 flex items-center shimmer-text">
            Sign Up
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 ml-1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span class="absolute inset-0 bg-[#111]"></span>
          <span :class="[
            'absolute inset-0 rounded-xl border border-white',
            route.path === '/sign-up' ? 'pulse-border-active slide-border-active' : 'pulse-border slide-border'
          ]"></span>
        </NuxtLink>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="ml-2 rounded-full p-1.5 text-gray-400 transition-all duration-300 hover:bg-dark-800/70 hover:text-white md:hidden relative overflow-hidden group"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <svg 
            v-if="!isMobileMenuOpen" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="h-6 w-6 relative z-10"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
          <svg 
            v-else 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="h-6 w-6 relative z-10"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen" 
      class="border-dark-800/30 bg-transparent backdrop-blur-xl md:hidden animate-fadeSlideUp"
    >
      <div class="container mx-auto px-4 py-4">
        <ul class="space-y-4">
          <li>
            <NuxtLink to="/" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/' ? 'text-white border-white pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/features" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/features' ? 'text-white border-white pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">Features</NuxtLink>
          </li>
          <li class="ml-4">
            <NuxtLink to="/features/smart-job-matching" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/features/smart-job-matching' ? 'text-white border-primary-400 pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">
              <span class="text-primary-400">•</span> Smart Job Matching
            </NuxtLink>
          </li>
          <li class="ml-4">
            <NuxtLink to="/features/secure-hiring-process" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/features/secure-hiring-process' ? 'text-white border-secondary-400 pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">
              <span class="text-secondary-400">•</span> Secure Hiring Process
            </NuxtLink>
          </li>
          <li class="ml-4">
            <NuxtLink to="/features/advanced-analytics" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/features/advanced-analytics' ? 'text-white border-accent-purple pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">
              <span class="text-accent-purple">•</span> Advanced Analytics
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pricing" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/pricing' ? 'text-white border-white pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">Pricing</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50',
              route.path === '/about' ? 'text-white border-white pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">About</NuxtLink>
          </li>
          <li class="border-t border-dark-800/30 pt-4">
            <div v-if="userStore.isAuthenticated" class="flex items-center justify-between">
              <div class="p-2">
                <UserStatus />
              </div>
            </div>
            <NuxtLink v-else to="/sign-in" @click="handleNavClick" :class="[
              'block text-sm transition-all duration-200 pl-2 border-l-2 rounded-r-md hover:pl-3 hover:bg-dark-800/50 no-underline',
              route.path === '/sign-in' ? 'text-white border-white pl-3 bg-dark-800/30' : 'text-gray-400 hover:text-white border-transparent hover:border-white'
            ]">Sign In</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'nuxt/app';
import UserStatus from '~/components/UserStatus.vue';
import { useUserStore } from '~/stores/user';

// Get current route and user store
const route = useRoute();
const userStore = useUserStore();

// Header state
const header = ref<HTMLElement | null>(null);
const visible = ref<boolean>(true);
const lastScrollPosition = ref<number>(0);
const scrollThreshold = 10;

// Mobile menu state
const isMobileMenuOpen = ref<boolean>(false);

// Close mobile menu when an item is clicked
const handleNavClick = (): void => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

// Handle scroll events to show/hide header
const handleScroll = (): void => {
  const currentScrollPosition = window.scrollY;
  
  // Always show the header when at the top of the page
  if (currentScrollPosition <= 0) {
    visible.value = true;
    lastScrollPosition.value = currentScrollPosition;
    return;
  }
  
  // Calculate the scroll distance
  const scrollDistance = currentScrollPosition - lastScrollPosition.value;
  
  // Update visibility based on scroll direction and threshold
  if (scrollDistance < -scrollThreshold) {
    // Scrolling up - show header
    visible.value = true;
  } else if (scrollDistance > scrollThreshold) {
    // Scrolling down - hide header
    visible.value = false;
    
    // Close mobile menu when scrolling down
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  }
  
  // Update the last scroll position
  lastScrollPosition.value = currentScrollPosition;
};

// Setup and cleanup scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.btn-primary {
  @apply bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-400 text-white;
}

.btn-sm {
  @apply rounded-lg px-4 py-1.5 text-sm font-medium;
}

.btn-xs {
  @apply rounded-lg px-3 py-1 text-xs font-medium;
}

.active-link {
  @apply text-white relative;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

.pulse-button-active {
  @apply bg-primary-900/80;
  animation: pulse-shadow 2s infinite;
}

.pulse-border-active {
  @apply border-primary-400;
  animation: pulse-border 2s infinite;
}

.slide-border-active {
  animation: slide-border 2s infinite;
}

@keyframes pulse-shadow {
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
}

/* All modern-nav-button styles have been moved to main.css */
</style>