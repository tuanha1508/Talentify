<template>
    <div class="min-h-screen flex flex-col bg-dark-950/60 backdrop-blur-sm">
      <Transition
        appear
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
      >
        <div class="w-full max-w-md mx-auto px-4 mt-8">
          <div class="mx-auto">
            <div class="mb-3 text-center">
              <h1 class="mb-1 font-display text-2xl font-medium text-white">Create Your Account</h1>
              <p class="text-sm text-gray-400">Join our community of developers and recruiters</p>
            </div>
            
            <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
              
              <div key="user-type-selection" class="mb-2 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                <h2 class="text-center text-sm font-medium text-white mb-1.5">I am a...</h2>
                <div class="grid grid-cols-2 gap-2">
                  <button 
                    @click="selectUserType('job-seeker')" 
                    class="p-1.5 rounded-lg border transition-all duration-200 flex flex-col items-center gap-0"
                    :class="[userType === 'job-seeker' ? 'border-primary-500 bg-primary-500/10' : 'border-dark-800 bg-dark-800/40 hover:bg-dark-800/60']"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="[userType === 'job-seeker' ? 'text-primary-400' : 'text-gray-400']">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span :class="[userType === 'job-seeker' ? 'text-white' : 'text-gray-300']" class="text-xs">Job Seeker</span>
                  </button>
                  
                  <button 
                    @click="selectUserType('recruiter')" 
                    class="p-1.5 rounded-lg border transition-all duration-200 flex flex-col items-center gap-0"
                    :class="[userType === 'recruiter' ? 'border-primary-500 bg-primary-500/10' : 'border-dark-800 bg-dark-800/40 hover:bg-dark-800/60']"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="[userType === 'recruiter' ? 'text-primary-400' : 'text-gray-400']">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span :class="[userType === 'recruiter' ? 'text-white' : 'text-gray-300']" class="text-xs">Recruiter</span>
                  </button>
                </div>
              </div>
              
              <div key="social-signup" class="mb-3 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                <div class="flex justify-center items-center space-x-6 my-2">
                  <button 
                    type="button" 
                    @click="handleSocialSignUp('google')"
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
                    <span class="sr-only">Sign up with Google</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignUp('github')"
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
                    <span class="sr-only">Sign up with Github</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignUp('facebook')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'facebook'"
                  >
                    <svg v-if="socialLoading === 'facebook'" class="h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <svg v-else class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span class="sr-only">Sign up with Facebook</span>
                  </button>
                  
                  <button 
                    type="button" 
                    @click="handleSocialSignUp('linkedin')"
                    class="text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                    :disabled="socialLoading === 'linkedin'"
                  >
                  <svg v-if="socialLoading === 'linkedin'" class="h-9 w-9 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="10" cy="12" r="12" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="20" fill="#0A66C2"/>
                        <path d="M13.33 31.67h-5v-18.33h5v18.33z" fill="white"/>
                        <path d="M10.83 11.22c-1.61 0-2.92-1.32-2.92-2.94s1.31-2.94 2.92-2.94 2.92 1.32 2.92 2.94-1.31 2.94-2.92 2.94z" fill="white"/>
                        <path d="M33.33 31.67h-5v-9.34c0-5.61-6.67-5.19-6.67 0v9.34h-5v-18.33h5v2.94c2.33-4.31 11.67-4.63 11.67 4.13v11.26z" fill="white"/>
                      </svg>
                    <span class="sr-only">Sign up with LinkedIn</span>
                  </button>
                </div>
              </div>
              
              <div key="divider" class="flex items-center my-4 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                <div class="flex-grow h-px bg-primary-800/30"></div>
                <span class="px-3 text-xs text-gray-500">OR SIGN UP WITH EMAIL</span>
                <div class="flex-grow h-px bg-primary-800/30"></div>
              </div>
              
              <form @submit.prevent="handleSignUp" class="grid gap-4 relative">
                <div class="grid gap-4">
                  <div key="names-row" class="grid grid-cols-2 gap-3 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                    <div>
                      <label for="firstName" class="mb-1.5 block text-xs font-medium text-gray-300">First Name</label>
                      <input 
                        id="firstName" 
                        v-model="firstName" 
                        type="text" 
                        class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200" 
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
                        class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200" 
                        placeholder="Doe"
                        required
                      />
                      <p v-if="lastNameError" class="mt-0.5 text-xs text-accent-red">{{ lastNameError }}</p>
                    </div>
                  </div>
                  
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
                  
                  <div key="passwords-row" class="grid grid-cols-2 gap-3 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                    <div>
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
                    
                    <div>
                      <label for="confirmPassword" class="mb-1.5 block text-xs font-medium text-gray-300">Confirm Password</label>
                      <input 
                        id="confirmPassword" 
                        v-model="confirmPassword" 
                        type="password" 
                        class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200" 
                        placeholder="••••••••"
                        required
                      />
                      <p v-if="confirmPasswordError" class="mt-0.5 text-xs text-accent-red">{{ confirmPasswordError }}</p>
                    </div>
                  </div>
                  
                  <p key="password-hint" class="text-xs text-gray-500 transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                    <span class="inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline-block mr-1 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Password must have 8+ characters with uppercase, lowercase, numbers and symbols
                    </span>
                  </p>
                  
                  <div key="terms-field" class="flex items-start transition-all duration-300 ease-out opacity-100 transform translate-y-0">
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
                    class="w-full flex justify-center py-2 px-4 bg-accent-green hover:bg-accent-green/90 text-white rounded-md text-sm font-medium shadow transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-green/20"
                    :disabled="isLoading || !userType"
                  >
                    <svg v-if="isLoading" class="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isLoading ? 'Creating Account...' : 'Continue' }}
                  </button>
                
                  <div key="signin-link" class="text-center transition-all duration-300 ease-out opacity-100 transform translate-y-0">
                    <p class="text-sm text-gray-400">
                      Already have an account?
                      <NuxtLink to="/sign-in" class="text-accent-purple hover:text-accent-purple/80 no-underline inline-block transition-colors duration-200 hover:translate-x-0.5 transform">Sign In</NuxtLink>
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
  const socialLoading = ref('');
  const userType = ref('');
  
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
  
  // Select user type
  const selectUserType = (type) => {
    userType.value = type;
  };
  
  // Validate form
  const validateForm = () => {
    let isValid = true;
    
    // Validate user type selection
    if (!userType.value) {
      isValid = false;
      return isValid;
    }
    
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a user data object with all the form data
      const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        userType: userType.value
      };
      
      // Store user data to be accessed by the specific registration pages
      localStorage.setItem('registrationData', JSON.stringify(userData));
      
      // Redirect to the appropriate registration page based on user type
      if (userType.value === 'job-seeker') {
        router.push('/sign-up/job-seeker');
      } else if (userType.value === 'recruiter') {
        router.push('/sign-up/recruiter');
      }
      
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      isLoading.value = false;
    }
  };
  
  // Handle social sign up
  const handleSocialSignUp = async (provider) => {
    if (socialLoading.value || !userType.value) return;
    
    socialLoading.value = provider;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would call your auth service here
      // const response = await authService.socialSignUp(provider);
      
      console.log('Social sign up with:', provider, 'as', userType.value);
      
      // Redirect based on user type
      if (userType.value === 'job-seeker') {
        router.push('/sign-up/job-seeker');
      } else if (userType.value === 'recruiter') {
        router.push('/sign-up/recruiter');
      }
    } catch (error) {
      console.error(`${provider} sign up error:`, error);
    } finally {
      socialLoading.value = '';
    }
  };
  </script>