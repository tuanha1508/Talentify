<template>
  <div class="min-h-screen flex flex-col bg-dark-950/60 backdrop-blur-sm">
    <Transition
      appear
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div class="w-full max-w-md mx-auto px-4 mt-12">
        <div class="mx-auto">
          <div class="mb-4 text-center">
            <h1 class="mb-1 font-display text-2xl font-medium text-white">Complete Your Profile</h1>
            <p class="text-sm text-gray-400">Tell us about your company and hiring needs</p>
          </div>
          
          <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
            
            <div class="mb-3 flex items-center">
              <div class="h-8 w-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-white font-medium text-sm">Recruiter Profile</p>
                <p class="text-gray-400 text-xs">Step 2 of 2</p>
              </div>
            </div>
            
            <form @submit.prevent="handleSubmit" class="mt-5 grid gap-4">
              <!-- Company Information -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Company Name</label>
                <input 
                  type="text" 
                  v-model="companyName" 
                  placeholder="Enter your company name"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Company Website</label>
                <input 
                  type="url" 
                  v-model="companyWebsite" 
                  placeholder="https://yourcompany.com"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Company Size</label>
                <select 
                  v-model="companySize" 
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                >
                  <option value="" disabled selected>Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1001-5000">1001-5000 employees</option>
                  <option value="5001+">5001+ employees</option>
                </select>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Industry</label>
                <select 
                  v-model="industry" 
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                >
                  <option value="" disabled selected>Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="media">Media & Entertainment</option>
                  <option value="transportation">Transportation</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <!-- Company Logo -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Company Logo (Optional)</label>
                <div class="mt-1 flex items-center justify-center border-2 border-dashed border-primary-700/30 rounded-lg py-5 px-4 bg-dark-800/40 hover:bg-dark-800/60 transition-colors cursor-pointer" @click="triggerFileUpload">
                  <input 
                    type="file" 
                    ref="fileInput" 
                    class="hidden" 
                    accept="image/*" 
                    @change="handleFileChange"
                  />
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div v-if="!selectedLogo" class="flex flex-col text-sm text-gray-400">
                      <p>Drag and drop your logo, or <span class="text-primary-400">browse</span></p>
                      <p class="text-xs text-gray-500">PNG, JPG, SVG (Max 2MB)</p>
                    </div>
                    <p v-else class="text-sm text-primary-400">{{ selectedLogo.name }}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Company Location</label>
                <input 
                  type="text" 
                  v-model="companyLocation" 
                  placeholder="e.g., San Francisco, CA"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                />
              </div>
              
              <!-- Recruiter Details -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Your Job Title</label>
                <input 
                  type="text" 
                  v-model="jobTitle" 
                  placeholder="e.g., HR Manager, Technical Recruiter"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Phone Number</label>
                <input 
                  type="tel" 
                  v-model="phoneNumber" 
                  placeholder="Business phone number"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Hiring Needs</label>
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="role in hiringRoles" :key="role.value" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :id="role.value" 
                      :value="role.value" 
                      v-model="selectedHiringRoles"
                      class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500"
                    />
                    <label :for="role.value" class="ml-2 text-sm text-gray-300">{{ role.label }}</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">About Your Company</label>
                <textarea 
                  v-model="companyDescription"
                  rows="3"
                  placeholder="Tell candidates about your company, culture, and what makes it a great place to work..."
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                ></textarea>
              </div>
              
              <!-- Subscription Options -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Estimated Monthly Hires</label>
                <select 
                  v-model="monthlyHires" 
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                >
                  <option value="1-2">1-2 hires per month</option>
                  <option value="3-5">3-5 hires per month</option>
                  <option value="6-10">6-10 hires per month</option>
                  <option value="11+">11+ hires per month</option>
                </select>
              </div>
              
              <!-- Marketing Opt-in -->
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input 
                    id="marketingOptIn" 
                    v-model="marketingOptIn" 
                    type="checkbox" 
                    class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500"
                  />
                </div>
                <label for="marketingOptIn" class="ml-2 text-xs text-gray-400">
                  I'd like to receive resources, best practices, and industry insights by email
                </label>
              </div>
              
              <button 
                type="submit" 
                class="w-full flex justify-center py-2 px-4 bg-accent-green hover:bg-accent-green/90 text-white rounded-md text-sm font-medium shadow transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-green/20 mt-2"
                :disabled="isLoading"
              >
                <svg v-if="isLoading" class="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isLoading ? 'Creating Profile...' : 'Complete Registration' }}
              </button>
            </form>
          </div>
          
          <div class="mt-6 text-center">
            <button @click="goBack" class="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to previous step
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Get router
const router = useRouter();

// Form state
const fileInput = ref(null);
const selectedLogo = ref(null);
const companyName = ref('');
const companyWebsite = ref('');
const companySize = ref('');
const industry = ref('');
const companyLocation = ref('');
const jobTitle = ref('');
const phoneNumber = ref('');
const selectedHiringRoles = ref([]);
const companyDescription = ref('');
const monthlyHires = ref('1-2');
const marketingOptIn = ref(true);
const isLoading = ref(false);
const userData = ref(null);

// Hiring roles
const hiringRoles = [
  { value: 'software-dev', label: 'Software Development' },
  { value: 'data-science', label: 'Data Science/AI' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'product', label: 'Product Management' },
  { value: 'operations', label: 'Operations' },
  { value: 'customer-support', label: 'Customer Support' },
];

// Initialize
onMounted(() => {
  // Retrieve user data from storage
  const storedData = localStorage.getItem('registrationData');
  if (storedData) {
    userData.value = JSON.parse(storedData);
  } else {
    // If no data, redirect back to sign-up page
    router.push('/sign-up');
  }
});

// File upload related methods
const triggerFileUpload = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Validate file size (max 2MB) and type
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should not exceed 2MB');
      return;
    }
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed');
      return;
    }
    
    selectedLogo.value = file;
  }
};

// Handle form submission
const handleSubmit = async () => {
  isLoading.value = true;
  
  try {
    // Prepare data for submission
    const recruiterData = {
      ...userData.value,
      companyName: companyName.value,
      companyWebsite: companyWebsite.value,
      companySize: companySize.value,
      industry: industry.value,
      companyLocation: companyLocation.value,
      jobTitle: jobTitle.value,
      phoneNumber: phoneNumber.value,
      hiringRoles: selectedHiringRoles.value,
      companyDescription: companyDescription.value,
      monthlyHires: monthlyHires.value,
      marketingOptIn: marketingOptIn.value,
      // Logo would be uploaded separately in a real app
      hasLogo: selectedLogo.value !== null
    };
    
    // Simulate API call to create profile
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Recruiter profile created:', recruiterData);
    
    // Clear registration data from storage
    localStorage.removeItem('registrationData');
    
    // Redirect to subscription plans page or dashboard
    router.push('/pricing');
    
  } catch (error) {
    console.error('Error creating profile:', error);
  } finally {
    isLoading.value = false;
  }
};

// Go back to previous step
const goBack = () => {
  router.push('/sign-up');
};
</script> 