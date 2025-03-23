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
          <div class="mb-3 text-center">
            <h1 class="mb-1 font-display text-2xl font-medium text-white">Create Account</h1>
            <p class="text-sm text-gray-400">Join our platform and start your journey</p>
          </div>
          
          <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
            
            <form @submit.prevent="handleSignUp" class="grid gap-4 relative">
              <div class="grid gap-4">
                <div key="names-row" class="grid grid-cols-2 gap-3 transition-all duration-300 ease-out animate-fadeSlideUp">
                  <div>
                    <label for="firstName" class="mb-1.5 block text-xs font-medium text-gray-300">First Name</label>
                    <input 
                      id="firstName" 
                      v-model="firstName" 
                      type="text" 
                      class="linear-input w-full py-1.5 text-sm focus:ring-1 focus:ring-primary-500/50 transition-all duration-200" 
                      placeholder="John"
                      required
                    />
                    <p v-if="firstNameError" class="mt-0.5 text-xs text-accent-red">{{ firstNameError }}</p>
                  </div>
                  
                  <div>
                    <label for="lastName" class="mb-1.5 block text-xs font-medium text-gray-300">Last Name</label>
                    <input 
                      id="lastName" 
                      v-model="lastName" 
                      type="text" 
                      class="linear-input w-full py-1.5 text-sm focus:ring-1 focus:ring-primary-500/50 transition-all duration-200" 
                      placeholder="Doe"
                      required
                    />
                    <p v-if="lastNameError" class="mt-0.5 text-xs text-accent-red">{{ lastNameError }}</p>
                  </div>
                </div>
                
                <div key="email-field" class="transition-all duration-300 ease-out animate-fadeSlideUp delay-100">
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
                
                <div key="passwords-row" class="grid grid-cols-2 gap-3 transition-all duration-300 ease-out animate-fadeSlideUp delay-200">
                  <div>
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
                  
                  <div>
                    <label for="confirmPassword" class="mb-1.5 block text-xs font-medium text-gray-300">Confirm Password</label>
                    <input 
                      id="confirmPassword" 
                      v-model="confirmPassword" 
                      type="password" 
                      class="linear-input w-full py-1.5 text-sm focus:ring-1 focus:ring-primary-500/50 transition-all duration-200" 
                      placeholder="••••••••"
                      required
                    />
                    <p v-if="confirmPasswordError" class="mt-0.5 text-xs text-accent-red">{{ confirmPasswordError }}</p>
                  </div>
                </div>
                
                <p key="password-hint" class="text-xs text-gray-500 transition-all duration-300 ease-out animate-fadeSlideUp delay-300">
                  <span class="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline-block mr-1 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Password must have 8+ characters with uppercase, lowercase, numbers and symbols
                  </span>
                </p>
                
                <div key="terms-field" class="flex items-start transition-all duration-300 ease-out animate-fadeSlideUp delay-400">
                  <div class="flex h-5 items-center">
                    <input 
                      id="terms" 
                      v-model="termsAccepted" 
                      type="checkbox" 
                      class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500 cursor-pointer"
                      required
                    />
                  </div>
                  <label for="terms" class="ml-2 text-xs text-gray-400 cursor-pointer select-none">
                    I agree to the <a href="#" class="text-primary-400 hover:text-primary-300 no-underline">Terms</a> and 
                    <a href="#" class="text-primary-400 hover:text-primary-300 no-underline">Privacy Policy</a>
                  </label>
                </div>
                
                <button 
                  key="submit-button"
                  type="submit" 
                  class="btn-primary w-full justify-center py-2 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm transition-all duration-300 ease-out animate-fadeSlideUp delay-500"
                  :disabled="isLoading"
                >
                  <svg v-if="isLoading" class="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
                </button>
              
                <div key="signin-link" class="text-center transition-all duration-300 ease-out animate-fadeSlideUp delay-600">
                  <p class="text-sm text-gray-400">
                    Already have an account?
                    <NuxtLink to="/sign-in" class="text-primary-400 hover:text-primary-300 no-underline inline-block transition-colors duration-200 hover:translate-x-0.5 transform">Sign In</NuxtLink>
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
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const termsAccepted = ref(false);
const isLoading = ref(false);

// Form errors
const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

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
  
  // Validate names
  if (!firstName.value.trim()) {
    firstNameError.value = 'First name is required';
    isValid = false;
  } else {
    firstNameError.value = '';
  }
  
  if (!lastName.value.trim()) {
    lastNameError.value = 'Last name is required';
    isValid = false;
  } else {
    lastNameError.value = '';
  }
  
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
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.value) {
    passwordError.value = 'Password is required';
    isValid = false;
  } else if (!passwordRegex.test(password.value)) {
    passwordError.value = 'Password must meet requirements';
    isValid = false;
  } else {
    passwordError.value = '';
  }
  
  // Validate password confirmation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match';
    isValid = false;
  } else {
    confirmPasswordError.value = '';
  }
  
  return isValid;
};

// Handle sign up
const handleSignUp = async () => {
  if (!validateForm()) return;
  
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, you would call your auth service here
    // const response = await authService.signUp(firstName.value, lastName.value, email.value, password.value);
    
    console.log('User signed up:', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    });
    
    // Redirect after successful registration
    router.push('/sign-in');
    
  } catch (error) {
    console.error('Sign up error:', error);
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