<template>
  <button 
    @click="toggleTheme" 
    class="relative flex items-center justify-center p-1 rounded-full hover:bg-surface-hover transition-all duration-200 hover-glow"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-3.5 w-3.5 text-gray-400 absolute transform transition-all duration-300"
      :class="isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'"
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
    </svg>
    
    <!-- Moon icon -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="h-3.5 w-3.5 text-gray-400 absolute transform transition-all duration-300"
      :class="isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'"
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    
    <span 
      class="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 bg-gradient-to-r from-secondary-600/20 to-secondary-400/20"
      :class="{ 'opacity-100': isHovered }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)
const isHovered = ref(false)

// Function to toggle theme
const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

// Function to update theme classes and store preference
const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Save preference to localStorage
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// On component mount, check for saved preference
onMounted(() => {
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // If no saved preference, check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Initial theme application
  updateTheme()
})
</script> 