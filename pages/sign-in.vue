<template>
  <div class="fixed inset-0 flex flex-col overflow-hidden bg-dark-950/60 backdrop-blur-sm">
    <Transition
      appear
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div class="w-full max-w-md mx-auto px-4 mt-20">
        <div class="mx-auto">
          <div class="mb-5 text-center">
            <NuxtLink to="/" class="inline-flex items-center text-xs text-primary-400 hover:text-primary-300 transition-colors mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 h-3 w-3">
                <path d="M19 12H5M12 19l-7-7 7-7"></path>
              </svg>
              Back to Home
            </NuxtLink>
            <h1 class="mb-1 font-display text-2xl font-medium text-white">Welcome Back</h1>
            <p class="text-sm text-gray-400">Log in to access your account</p>
          </div>
          
          <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
            
            <form @submit.prevent="handleSignIn" class="grid gap-5 relative">
              <div class="grid gap-5">
                <div key="email-field" class="transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <label for="email" class="mb-1.5 block text-xs font-medium text-gray-300">Email Address</label>
                  <input 
                    id="email" 
                    v-model="email" 
                    type="email" 
                    class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200" 
                    placeholder="your@email.com"
                    required
                  />
                  <p v-if="emailError" class="mt-0.5 text-xs text-accent-red">{{ emailError }}</p>
                </div>
                
                <div key="password-field" class="transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <label for="password" class="mb-1.5 block text-xs font-medium text-gray-300">Password</label>
                  <input 
                    id="password" 
                    v-model="password" 
                    type="password" 
                    class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200" 
                    placeholder="••••••••"
                    required
                  />
                  <p v-if="passwordError" class="mt-0.5 text-xs text-accent-red">{{ passwordError }}</p>
                </div>
                
                <div key="options-row" class="flex items-center justify-between transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <div class="flex items-center">
                    <input 
                      id="remember-me" 
                      v-model="rememberMe" 
                      type="checkbox" 
                      class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500 cursor-pointer"
                    />
                    <label for="remember-me" class="ml-2 text-xs text-gray-400 cursor-pointer select-none">
                      Remember me
                    </label>
                  </div>
                  <a href="#" class="text-xs text-primary-400 hover:text-primary-300 no-underline transition-colors duration-200">Forgot password?</a>
                </div>
                
                <button 
                  key="submit-button"
                  type="submit" 
                  class="w-full flex justify-center py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md text-sm font-medium shadow transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/20"
                  :disabled="isLoading"
                >
                  <svg v-if="isLoading" class="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isLoading ? 'Signing In...' : 'Sign In' }}
                </button>
                
                <div key="divider" class="flex items-center my-1 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <div class="flex-grow h-px bg-primary-800/30"></div>
                  <span class="px-3 text-xs text-gray-500">OR CONTINUE WITH</span>
                  <div class="flex-grow h-px bg-primary-800/30"></div>
                </div>
                
                <div key="social-buttons" class="flex justify-center items-center space-x-6 my-2 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <button 
                    type="button" 
                    @click="handleSocialSignIn('google')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'google'"
                  >
                    <svg v-if="socialLoading === 'google'" class="h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span class="sr-only">Sign in with Google</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignIn('github')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'github'"
                  >
                    <svg v-if="socialLoading === 'github'" class="h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span class="sr-only">Sign in with Github</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignIn('facebook')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'facebook'"
                  >
                    <svg v-if="socialLoading === 'facebook'" class="h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span class="sr-only">Sign in with Facebook</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignIn('linkedin')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'linkedin'"
                  >
                    <svg v-if="socialLoading === 'linkedin'" class="h-9 w-9 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="10" cy="12" r="12" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40">
                      <!-- Circle background instead of rounded square -->
                      <circle cx="20" cy="20" r="20" fill="#0A66C2"/>
                      
                      <!-- The "i" character - scaled and repositioned for new viewBox -->
                      <path d="M13.33 31.67h-5v-18.33h5v18.33z" fill="white"/>
                      <!-- The dot above "i" -->
                      <path d="M10.83 11.22c-1.61 0-2.92-1.32-2.92-2.94s1.31-2.94 2.92-2.94 2.92 1.32 2.92 2.94-1.31 2.94-2.92 2.94z" fill="white"/>
                      
                      <!-- The "n" character - scaled and repositioned for new viewBox -->
                      <path d="M33.33 31.67h-5v-9.34c0-5.61-6.67-5.19-6.67 0v9.34h-5v-18.33h5v2.94c2.33-4.31 11.67-4.63 11.67 4.13v11.26z" fill="white"/>
                    </svg>
                    <span class="sr-only">Sign in with LinkedIn</span>
                  </button>
                </div>
              
                <div key="signup-link" class="text-center transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                  <p class="text-sm text-gray-400">
                    Don't have an account?
                    <NuxtLink to="/sign-up" class="text-primary-400 hover:text-primary-300 no-underline inline-block transition-colors duration-200 hover:translate-x-0.5 transform">Sign Up</NuxtLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Form state
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const socialLoading = ref('');

// Form errors
const emailError = ref('');
const passwordError = ref('');

// Animation state
const formReady = ref(false);

// Get router
const router = useRouter();

// Initialize form with animation
onMounted(() => {
  formReady.value = true;
});

// Validate form
const validateForm = () => {
  let isValid = true;
  
  // Validate email
  if (!email.value) {
    emailError.value = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.value = '';
  }
  
  // Validate password
  if (!password.value) {
    passwordError.value = 'Password is required';
    isValid = false;
  } else {
    passwordError.value = '';
  }
  
  return isValid;
};

// Handle sign in
const handleSignIn = async () => {
  if (!validateForm()) return;
  
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would call your auth service here
    // const response = await authService.signIn(email.value, password.value, rememberMe.value);
    
    console.log('User signed in:', {
      email: email.value,
      rememberMe: rememberMe.value
    });
    
    // Redirect after successful login (replace with your actual dashboard path)
    router.push('/');
    
  } catch (error) {
    console.error('Sign in error:', error);
  } finally {
    isLoading.value = false;
  }
};

// Handle social sign in
const handleSocialSignIn = async (provider) => {
  if (socialLoading.value) return;
  
  socialLoading.value = provider;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would call your auth service here
    // const response = await authService.socialSignIn(provider);
    
    console.log(`User signed in with ${provider}`);
    
    // Redirect after successful login
    router.push('/dashboard');
    
  } catch (error) {
    console.error(`${provider} sign in error:`, error);
  } finally {
    socialLoading.value = '';
  }
};

// Go back to home page
const goToHome = () => {
  router.push('/');
};
</script> 