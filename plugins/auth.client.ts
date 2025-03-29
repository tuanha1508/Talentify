import { defineNuxtPlugin } from 'nuxt/app'
import { useUserStore } from '~/stores/user'

export default defineNuxtPlugin({
  name: 'auth-plugin',
  setup() {
    const userStore = useUserStore()
    
    // Auth state change handler
    const handleAuthStateChange = () => {
      // Sync auth state with store
      const userData = localStorage.getItem('vortexify_user')
      
      if (userData && !userStore.isAuthenticated) {
        // User data exists in localStorage but not in store
        try {
          const user = JSON.parse(userData)
          userStore.$patch({
            currentUser: user,
            isAuthenticated: true
          })
        } catch (error) {
          console.error('Error parsing user data from localStorage:', error)
          // If there's an error, clear the invalid data
          localStorage.removeItem('vortexify_user')
        }
      } else if (!userData && userStore.isAuthenticated) {
        // User logged out but store still has data
        userStore.$patch({
          currentUser: null,
          isAuthenticated: false
        })
      }
    }
    
    // Initialize auth state on app load
    handleAuthStateChange()
    
    // Listen for storage events (e.g., login in another tab)
    window.addEventListener('storage', (event) => {
      if (event.key === 'vortexify_user') {
        handleAuthStateChange()
      }
    })
    
    return {
      provide: {
        refreshAuthState: handleAuthStateChange
      }
    }
  }
}) 