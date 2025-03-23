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
        <div class="mr-3 h-8 w-8 rounded-lg bg-primary-500/30 p-1.5 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-full w-full text-primary-300">
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
        </div>
        <h1 class="text-lg font-semibold text-white tracking-wide font-display">NexusHR</h1>
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
        <!-- Theme Toggler -->
        <button 
          @click="toggleDarkMode" 
          class="mr-1 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-dark-800/70 hover:text-white"
        >
          <svg 
            v-if="isDarkMode" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="h-5 w-5"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" 
            />
          </svg>
          <svg 
            v-else 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="h-5 w-5"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
            />
          </svg>
        </button>

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

// Dark mode state (you may want to use a store for this in a real app)
const isDarkMode = ref(true);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  // You would update your app's theme here
  document.documentElement.classList.toggle('light');
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

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