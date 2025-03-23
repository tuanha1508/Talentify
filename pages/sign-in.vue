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
            <h1 class="mb-1 font-display text-2xl font-medium text-white">Welcome Back</h1>
            <p class="text-sm text-gray-400">Log in to access your account</p>
          </div>
          
          <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
            
            <form @submit.prevent="handleSignIn" class="grid gap-5 relative">
              <div class="grid gap-5">
                <div key="email-field" class="transition-all duration-300 ease-out animate-fadeSlideUp">
                  <label for="email" class="mb-1.5 block text-xs font-medium text-gray-300">Email Address</label>
                  <input 
                    id="email" 
                    v-model="email" 
                    type="email" 
                    class="linear-input w-full py-1.5 text-sm focus:ring-1 focus:ring-primary-500/50 transition-all duration-200" 
                    placeholder="your@email.com"
                    required
                  />
                  <p v-if="emailError" class="mt-0.5 text-xs text-accent-red">{{ emailError }}</p>
                </div>
                
                <div key="password-field" class="transition-all duration-300 ease-out animate-fadeSlideUp delay-100">
                  <label for="password" class="mb-1.5 block text-xs font-medium text-gray-300">Password</label>
                  <input 
                    id="password" 
                    v-model="password" 
                    type="password" 
                    class="linear-input w-full py-1.5 text-sm focus:ring-1 focus:ring-primary-500/50 transition-all duration-200" 
                    placeholder="••••••••"
                    required
                  />
                  <p v-if="passwordError" class="mt-0.5 text-xs text-accent-red">{{ passwordError }}</p>
                </div>
                
                <div key="options-row" class="flex items-center justify-between transition-all duration-300 ease-out animate-fadeSlideUp delay-200">
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
                  class="btn-primary w-full justify-center py-2 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm transition-all duration-300 ease-out animate-fadeSlideUp delay-300"
                  :disabled="isLoading"
                >
                  <svg v-if="isLoading" class="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isLoading ? 'Signing In...' : 'Sign In' }}
                </button>
              
                <div key="signup-link" class="text-center transition-all duration-300 ease-out animate-fadeSlideUp delay-400">
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
    
    // Redirect after successful login
    router.push('/dashboard');
    
  } catch (error) {
    console.error('Sign in error:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.fade-slide-y-enter-active,
.fade-slide-y-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: calc(var(--i, 0) * 0.1s);
}

.fade-slide-y-enter-from,
.fade-slide-y-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.shadow-xl {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}
</style> 