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
            <p class="text-sm text-gray-400">Tell us more about your career preferences</p>
          </div>
          
          <div class="rounded-lg border border-primary-800/40 bg-gradient-to-b from-surface/90 to-surface-raised/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-800/5 via-transparent to-secondary-500/5 pointer-events-none"></div>
            
            <div class="mb-3 flex items-center">
              <div class="h-8 w-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-white font-medium text-sm">Job Seeker Profile</p>
                <p class="text-gray-400 text-xs">Step 2 of 2</p>
              </div>
            </div>
            
            <form @submit.prevent="handleSubmit" class="mt-5 grid gap-4">
              <!-- Resume Upload -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Upload Resume (Optional)</label>
                <div class="mt-1 flex items-center justify-center border-2 border-dashed border-primary-700/30 rounded-lg py-5 px-4 bg-dark-800/40 hover:bg-dark-800/60 transition-colors cursor-pointer" @click="triggerFileUpload">
                  <input 
                    type="file" 
                    ref="fileInput" 
                    class="hidden" 
                    accept=".pdf,.doc,.docx" 
                    @change="handleFileChange"
                  />
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div v-if="!selectedFile" class="flex flex-col text-sm text-gray-400">
                      <p>Drag and drop your resume, or <span class="text-primary-400">browse</span></p>
                      <p class="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    <p v-else class="text-sm text-primary-400">{{ selectedFile.name }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Job Preferences -->
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Job Category</label>
                <select 
                  v-model="jobCategory" 
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                >
                  <option value="" disabled selected>Select job category</option>
                  <option value="software-development">Software Development</option>
                  <option value="ux-design">UX/UI Design</option>
                  <option value="data-science">Data Science</option>
                  <option value="product-management">Product Management</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="human-resources">Human Resources</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Employment Type</label>
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="type in employmentTypes" :key="type.value" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :id="type.value" 
                      :value="type.value" 
                      v-model="selectedEmploymentTypes"
                      class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500"
                    />
                    <label :for="type.value" class="ml-2 text-sm text-gray-300">{{ type.label }}</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Experience Level</label>
                <select 
                  v-model="experienceLevel" 
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  required
                >
                  <option value="" disabled selected>Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6-9 years)</option>
                  <option value="expert">Expert Level (10+ years)</option>
                </select>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Skills</label>
                <div class="relative">
                  <input 
                    type="text" 
                    v-model="skillInput" 
                    @keydown.enter.prevent="addSkill"
                    placeholder="Type a skill and press Enter"
                    class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                  />
                </div>
                <div v-if="skills.length > 0" class="mt-2 flex flex-wrap gap-2">
                  <div 
                    v-for="(skill, index) in skills" 
                    :key="index"
                    class="flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400"
                  >
                    <span>{{ skill }}</span>
                    <button 
                      type="button"
                      @click="removeSkill(index)" 
                      class="ml-1.5 h-4 w-4 rounded-full text-primary-400 hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Preferred Locations</label>
                <input 
                  type="text" 
                  v-model="location" 
                  placeholder="e.g., San Francisco, Remote"
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">Salary Expectation</label>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <select 
                      v-model="salaryCurrency" 
                      class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="CAD">CAD ($)</option>
                      <option value="AUD">AUD ($)</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="number" 
                      v-model="salaryExpectation" 
                      placeholder="Annual salary"
                      class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-300">About Me</label>
                <textarea 
                  v-model="bio"
                  rows="3"
                  placeholder="A brief introduction about yourself, your experience and career goals..."
                  class="w-full py-1.5 text-sm bg-dark-800/60 border border-primary-700/30 rounded-md px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-200"
                ></textarea>
              </div>
              
              <!-- Job Alerts -->
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input 
                    id="jobAlerts" 
                    v-model="jobAlerts" 
                    type="checkbox" 
                    class="h-4 w-4 rounded border-primary-700 bg-dark-900 text-primary-500"
                  />
                </div>
                <label for="jobAlerts" class="ml-2 text-xs text-gray-400">
                  Send me job alerts matching my profile and preferences
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
const selectedFile = ref(null);
const jobCategory = ref('');
const experienceLevel = ref('');
const selectedEmploymentTypes = ref([]);
const skillInput = ref('');
const skills = ref([]);
const location = ref('');
const salaryCurrency = ref('USD');
const salaryExpectation = ref('');
const bio = ref('');
const jobAlerts = ref(true);
const isLoading = ref(false);
const userData = ref(null);

// Employment types
const employmentTypes = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'freelance', label: 'Freelance' },
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
    // Validate file size (max 5MB) and type
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should not exceed 5MB');
      return;
    }
    
    // Check if file is PDF, DOC, or DOCX
    const fileType = file.type;
    if (
      fileType !== 'application/pdf' && 
      fileType !== 'application/msword' && 
      fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      alert('Only PDF, DOC, and DOCX files are allowed');
      return;
    }
    
    selectedFile.value = file;
  }
};

// Skill management
const addSkill = () => {
  const skill = skillInput.value.trim();
  if (skill && !skills.value.includes(skill)) {
    skills.value.push(skill);
    skillInput.value = '';
  }
};

const removeSkill = (index) => {
  skills.value.splice(index, 1);
};

// Handle form submission
const handleSubmit = async () => {
  isLoading.value = true;
  
  try {
    // Prepare data for submission
    const jobSeekerData = {
      ...userData.value,
      jobCategory: jobCategory.value,
      experienceLevel: experienceLevel.value,
      employmentTypes: selectedEmploymentTypes.value,
      skills: skills.value,
      location: location.value,
      salary: {
        currency: salaryCurrency.value,
        amount: salaryExpectation.value
      },
      bio: bio.value,
      jobAlerts: jobAlerts.value,
      // Resume would be uploaded separately in a real app
      hasResume: selectedFile.value !== null
    };
    
    // Simulate API call to create profile
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Job seeker profile created:', jobSeekerData);
    
    // Clear registration data from storage
    localStorage.removeItem('registrationData');
    
    // Redirect to success page or dashboard
    router.push('/');
    
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