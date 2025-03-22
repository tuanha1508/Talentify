import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'theme-plugin',
  enforce: 'pre', // This plugin should run before any other plugins
  setup() {
    // Makes sure this only runs client-side
    if (process.client) {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme')
      
      // Initialize the theme based on saved preference or system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = savedTheme 
        ? savedTheme === 'dark' 
        : prefersDark
      
      // Apply theme class to document
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Add CSS variable support for Linear-style theme
      const updateColorVariables = () => {
        const isCurrentlyDark = document.documentElement.classList.contains('dark')
        
        // Linear-style CSS variables
        if (isCurrentlyDark) {
          document.documentElement.style.setProperty('--surface-bg', '#1b1b1b')
          document.documentElement.style.setProperty('--surface-bg-hover', '#252525')
          document.documentElement.style.setProperty('--surface-bg-active', '#2a2a2a')
          document.documentElement.style.setProperty('--text-primary', 'rgba(255, 255, 255, 0.9)')
          document.documentElement.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.6)')
          document.documentElement.style.setProperty('--text-tertiary', 'rgba(255, 255, 255, 0.4)')
          document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)')
        } else {
          document.documentElement.style.setProperty('--surface-bg', '#ffffff')
          document.documentElement.style.setProperty('--surface-bg-hover', '#f5f5f5')
          document.documentElement.style.setProperty('--surface-bg-active', '#f0f0f0')
          document.documentElement.style.setProperty('--text-primary', 'rgba(0, 0, 0, 0.9)')
          document.documentElement.style.setProperty('--text-secondary', 'rgba(0, 0, 0, 0.6)')
          document.documentElement.style.setProperty('--text-tertiary', 'rgba(0, 0, 0, 0.4)')
          document.documentElement.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)')
        }
      }
      
      // Initialize color variables
      updateColorVariables()
      
      // Listen for theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === null) {
          if (e.matches) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          updateColorVariables()
        }
      })
    }
  }
}) 