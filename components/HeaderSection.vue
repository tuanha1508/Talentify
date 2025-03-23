<template>
  <header
    ref="header"
    :class="[
      'fixed left-0 right-0 top-0 z-50 w-full border-b border-dark-800/40 backdrop-blur-md transition-all duration-300',
      { 'translate-y-0 opacity-100 shadow-md': visible, 'pointer-events-none -translate-y-full opacity-0': !visible }
    ]"
  >
    <div class="container mx-auto flex h-12 items-center justify-between px-4 md:px-8 bg-gradient-to-r from-dark-950/90 via-dark-900/90 to-dark-950/90">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="flex items-center justify-center h-8 w-8 mr-2"> <!-- Adjusted height/width and added centering -->
          <img src="/images/logo.svg" alt="Talentify Logo" class="h-full w-full" />
        </div>
        <h1 class="text-lg font-semibold text-white tracking-wide font-display">Talentify</h1> <!-- Removed flex items-center -->
      </div>

      <!-- Main Navigation -->
      <nav class="hidden items-center md:flex">
        <ul class="flex space-x-8 font-display">
          <li>
            <a href="#" @click="handleNavClick" class="text-sm font-medium text-white hover:text-primary-300 transition-all duration-200">Home</a>
          </li>
          <li>
            <a href="#features" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white">Features</a>
          </li>
          <li>
            <a href="#job-seekers" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white">Find Jobs</a>
          </li>
          <li>
            <a href="#employers" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white">For Recruiters</a>
          </li>
          <li>
            <a href="#contact" @click="handleNavClick" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-white">About</a>
          </li>
        </ul>
      </nav>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Sign In Button -->
        <NuxtLink to="/sign-in" class="mr-2 hidden text-sm font-medium text-gray-300 transition-all duration-200 hover:text-white md:block">Sign In</NuxtLink>

        <!-- Sign Up Button -->
        <NuxtLink to="/sign-up" class="btn-primary btn-xs shadow-glow-sm hover:shadow-glow-md transition-all duration-300 no-underline">Sign Up</NuxtLink>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="ml-2 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-dark-800/70 hover:text-white md:hidden"
        >
          <svg 
            v-if="!isMobileMenuOpen" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="h-6 w-6"
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
            class="h-6 w-6"
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
      class="border-t border-dark-800/30 bg-dark-900/95 backdrop-blur md:hidden"
    >
      <div class="container mx-auto px-4 py-4">
        <ul class="space-y-4">
          <li>
            <a href="#" @click="handleNavClick" class="block text-sm text-white hover:text-primary-400">Home</a>
          </li>
          <li>
            <a href="#features" @click="handleNavClick" class="block text-sm text-gray-400 transition-colors hover:text-white">Features</a>
          </li>
          <li>
            <a href="#job-seekers" @click="handleNavClick" class="block text-sm text-gray-400 transition-colors hover:text-white">Find Jobs</a>
          </li>
          <li>
            <a href="#employers" @click="handleNavClick" class="block text-sm text-gray-400 transition-colors hover:text-white">For Recruiters</a>
          </li>
          <li>
            <a href="#contact" @click="handleNavClick" class="block text-sm text-gray-400 transition-colors hover:text-white">About</a>
          </li>
          <li class="border-t border-dark-800/30 pt-4">
            <NuxtLink to="/sign-in" class="block text-sm text-gray-400 transition-colors hover:text-white no-underline">Sign In</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Header state
const header = ref(null);
const visible = ref(true);
const lastScrollPosition = ref(0);
const scrollThreshold = 10;

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Close mobile menu when an item is clicked
const handleNavClick = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

// Handle scroll events to show/hide header
const handleScroll = () => {
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
    
    // Close mobile menu when hiding header
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
    }
  }
  
  // Update the last scroll position
  lastScrollPosition.value = currentScrollPosition;
};

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.btn-primary {
  @apply bg-primary-500 text-white hover:bg-primary-400;
}

.btn-sm {
  @apply rounded-lg px-4 py-1.5 text-sm font-medium;
}

.btn-xs {
  @apply rounded-lg px-3 py-1 text-xs font-medium;
}

/* Enhanced hover effect for navigation links */
a:not(.no-underline) {
  position: relative;
}

a:not(.no-underline)::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
  opacity: 0.7;
  transition: width 0.3s ease, opacity 0.3s ease;
  border-radius: 4px;
}

a:not(.no-underline):hover::after {
  width: 100%;
  opacity: 1;
}

.no-underline::after {
  display: none;
}

.shadow-glow-sm {
  box-shadow: 0 0 8px 0 rgba(110, 231, 183, 0.3);
}

.shadow-glow-md {
  box-shadow: 0 0 12px 0 rgba(110, 231, 183, 0.4);
}
</style>