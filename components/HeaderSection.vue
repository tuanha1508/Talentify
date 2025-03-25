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
            <NuxtLink to="/" class="text-sm font-medium text-white hover:text-primary-300 transition-all duration-200 relative group">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </NuxtLink>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <a href="#features" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group">
              Features
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <a href="#job-seekers" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group">
              Find Jobs
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <a href="#employers" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group">
              For Recruiters
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <NuxtLink to="/pricing" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group">
              Pricing
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </NuxtLink>
          </li>
          <li class="mx-2 text-gray-500">-</li>
          <li>
            <NuxtLink to="/about" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white relative group">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Sign In Button -->
        <NuxtLink to="/sign-in" class="mr-2 hidden text-sm font-medium text-gray-300 transition-all duration-200 hover:text-white relative group md:block">
          Sign In
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white/30 to-white group-hover:w-full transition-all duration-300 rounded-full"></span>
        </NuxtLink>

        <!-- Sign Up Button -->
        <NuxtLink to="/sign-up" class="nav-button-no-float relative overflow-hidden rounded-xl pulse-button">
          <span class="relative z-10 flex items-center shimmer-text">
            Sign Up
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 ml-1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span class="absolute inset-0 bg-[#111]"></span>
          <span class="absolute inset-0 rounded-xl border border-white pulse-border slide-border"></span>
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
            <NuxtLink to="/" @click="handleNavClick" class="block text-sm text-white hover:text-primary-400 transition-all duration-200 pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">Home</NuxtLink>
          </li>
          <li>
            <a href="#features" @click="handleNavClick" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">Features</a>
          </li>
          <li>
            <a href="#job-seekers" @click="handleNavClick" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">Find Jobs</a>
          </li>
          <li>
            <a href="#employers" @click="handleNavClick" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">For Recruiters</a>
          </li>
          <li>
            <NuxtLink to="/pricing" @click="handleNavClick" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">Pricing</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="handleNavClick" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">About</NuxtLink>
          </li>
          <li class="border-t border-dark-800/30 pt-4">
            <NuxtLink to="/sign-in" class="block text-sm text-gray-400 transition-all duration-200 hover:text-white no-underline pl-2 border-l-2 border-transparent hover:border-white hover:pl-3 rounded-r-md hover:bg-dark-800/50">Sign In</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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

/* All modern-nav-button styles have been moved to main.css */
</style>