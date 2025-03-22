import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
  role: 'jobseeker' | 'employer' | 'admin'
  avatar?: string
}

interface UserState {
  currentUser: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  }),
  
  getters: {
    isJobSeeker: (state) => state.currentUser?.role === 'jobseeker',
    isEmployer: (state) => state.currentUser?.role === 'employer',
    isAdmin: (state) => state.currentUser?.role === 'admin',
    userFullName: (state) => state.currentUser?.name || 'Guest'
  },
  
  actions: {
    async login(email: string, password: string) {
      this.isLoading = true
      this.error = null
      
      try {
        // Mock API call - would be replaced with an actual API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock user data
        this.currentUser = {
          id: '1',
          name: 'John Doe',
          email: email,
          role: 'jobseeker',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
        
        this.isAuthenticated = true
      } catch (err) {
        this.error = 'Invalid credentials. Please try again.'
        console.error('Login error:', err)
      } finally {
        this.isLoading = false
      }
    },
    
    logout() {
      this.currentUser = null
      this.isAuthenticated = false
      // Additional cleanup logic would go here
    },
    
    async register(userData: Partial<User>, password: string) {
      this.isLoading = true
      this.error = null
      
      try {
        // Mock API call - would be replaced with an actual API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock user creation
        this.currentUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: userData.name || 'New User',
          email: userData.email || '',
          role: userData.role || 'jobseeker'
        }
        
        this.isAuthenticated = true
      } catch (err) {
        this.error = 'Registration failed. Please try again.'
        console.error('Registration error:', err)
      } finally {
        this.isLoading = false
      }
    }
  }
}) 