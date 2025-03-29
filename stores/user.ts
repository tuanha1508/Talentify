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

const USER_STORAGE_KEY = 'vortexify_user'

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    // Try to load user from localStorage on initialization
    const savedUser = process.client
      ? localStorage.getItem(USER_STORAGE_KEY)
      : null;
    
    return {
      currentUser: savedUser ? JSON.parse(savedUser) : null,
      isAuthenticated: !!savedUser,
      isLoading: false,
      error: null
    }
  },
  
  getters: {
    isJobSeeker: (state) => state.currentUser?.role === 'jobseeker',
    isEmployer: (state) => state.currentUser?.role === 'employer',
    isAdmin: (state) => state.currentUser?.role === 'admin',
    userFullName: (state) => state.currentUser?.name || 'Guest'
  },
  
  actions: {
    saveToLocalStorage() {
      if (process.client && this.currentUser) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser))
      } else if (process.client) {
        localStorage.removeItem(USER_STORAGE_KEY)
      }
    },
    
    async login(email: string, password: string, rememberMe: boolean = false) {
      this.isLoading = true
      this.error = null
      
      try {
        // Mock API call - would be replaced with an actual API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock user data - In a real app, this would come from an API
        this.currentUser = {
          id: '1',
          name: 'John Doe',
          email: email,
          role: 'jobseeker',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
        
        this.isAuthenticated = true
        
        // Save to localStorage if rememberMe is true
        if (rememberMe) {
          this.saveToLocalStorage()
        }
        
        return true
      } catch (err) {
        this.error = 'Invalid credentials. Please try again.'
        console.error('Login error:', err)
        return false
      } finally {
        this.isLoading = false
      }
    },
    
    logout() {
      this.currentUser = null
      this.isAuthenticated = false
      // Remove from localStorage
      if (process.client) {
        localStorage.removeItem(USER_STORAGE_KEY)
      }
    },
    
    async register(userData: Partial<User>, password: string) {
      this.isLoading = true
      this.error = null
      
      try {
        // Mock API call - would be replaced with an actual API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock user creation - In a real app, this would come from an API
        this.currentUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: userData.name || 'New User',
          email: userData.email || '',
          role: userData.role || 'jobseeker'
        }
        
        this.isAuthenticated = true
        
        // Save to localStorage
        this.saveToLocalStorage()
        
        return true
      } catch (err) {
        this.error = 'Registration failed. Please try again.'
        console.error('Registration error:', err)
        return false
      } finally {
        this.isLoading = false
      }
    },
    
    async socialLogin(provider: string) {
      this.isLoading = true
      this.error = null
      
      try {
        // Mock API call - would be replaced with actual OAuth flow
        await new Promise(resolve => setTimeout(resolve, 1200))
        
        // Mock user data for social login
        this.currentUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: `User from ${provider}`,
          email: `user_${Math.floor(Math.random() * 10000)}@${provider.toLowerCase()}.com`,
          role: 'jobseeker',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
        
        this.isAuthenticated = true
        
        // Always save social logins to localStorage for convenience
        this.saveToLocalStorage()
        
        return true
      } catch (err) {
        this.error = `${provider} login failed. Please try again.`
        console.error('Social login error:', err)
        return false
      } finally {
        this.isLoading = false
      }
    }
  }
}) 