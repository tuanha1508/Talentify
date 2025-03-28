<template>
  <div class="relative min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12 pt-20">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-4">
          Choose Your Plan
        </h1>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Select the perfect package to accelerate your hiring process or find your dream job
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="flex items-center justify-center mb-12">
        <span :class="{ 'text-white font-medium': !isAnnual, 'text-gray-400': isAnnual }">Monthly</span>
        <button 
          @click="toggleBilling" 
          class="relative mx-4 rounded-full w-16 h-8 transition duration-200 ease-linear bg-dark-800 border-2 border-primary-500"
        >
          <div 
            :class="[isAnnual ? 'translate-x-8' : 'translate-x-0', 'absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transform transition-transform duration-200 ease-in-out m-0.5']"
          ></div>
        </button>
        <span :class="{ 'text-white font-medium': isAnnual, 'text-gray-400': !isAnnual }">Annual <span class="text-primary-500 text-xs font-medium ml-1">Save 20%</span></span>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Free Plan -->
        <div class="relative p-6 bg-dark-900 rounded-2xl border border-dark-700 shadow-lg overflow-hidden group hover:border-primary-500 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-primary-400 mb-2">Starter</h3>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold">$0</span>
              <span class="text-gray-400 ml-2">/ {{ isAnnual ? 'year' : 'month' }}</span>
            </div>
            <p class="text-gray-300 mb-6">Perfect for individuals just starting their job search</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Basic profile creation</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Browse job listings</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>5 job applications per month</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="text-gray-500">AI skill matching</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="text-gray-500">Premium job alerts</span>
              </li>
            </ul>
            <button class="w-full py-3 px-4 bg-dark-800 hover:bg-dark-700 rounded-xl text-white font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        <!-- Pro Plan -->
        <div class="relative p-6 bg-dark-900 rounded-2xl border border-primary-500 shadow-lg shadow-primary-500/20 overflow-hidden group hover:shadow-primary-500/30 transition-all duration-300">
          <div class="absolute -top-6 -right-6 bg-primary-500 text-white px-8 py-1 rotate-45 transform">
            Popular
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-primary-400 mb-2">Professional</h3>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold">${{ isAnnual ? '19' : '24' }}</span>
              <span class="text-gray-400 ml-2">/ {{ isAnnual ? 'year' : 'month' }}</span>
            </div>
            <p class="text-gray-300 mb-6">For serious job seekers and growing businesses</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Everything in Starter</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>AI-powered skill matching</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited job applications</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Priority application status</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Resume enhancement tool</span>
              </li>
            </ul>
            <button class="w-full py-3 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-colors duration-200">
              Choose Professional
            </button>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div class="relative p-6 bg-dark-900 rounded-2xl border border-dark-700 shadow-lg overflow-hidden group hover:border-primary-500 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-primary-400 mb-2">Enterprise</h3>
            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold">${{ isAnnual ? '79' : '99' }}</span>
              <span class="text-gray-400 ml-2">/ {{ isAnnual ? 'year' : 'month' }}</span>
            </div>
            <p class="text-gray-300 mb-6">For organizations with advanced hiring needs</p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Everything in Professional</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Bulk candidate management</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced analytics dashboard</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Custom branding options</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <button class="w-full py-3 px-4 border border-primary-500 hover:bg-primary-500/20 rounded-xl text-white font-medium transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-24">
        <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-dark-900 rounded-xl p-6 hover:border-primary-500 border border-dark-700 transition-all duration-200">
            <h3 class="text-xl font-semibold text-white mb-3">Can I upgrade or downgrade my plan?</h3>
            <p class="text-gray-300">Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          
          <div class="bg-dark-900 rounded-xl p-6 hover:border-primary-500 border border-dark-700 transition-all duration-200">
            <h3 class="text-xl font-semibold text-white mb-3">Do you offer a free trial?</h3>
            <p class="text-gray-300">We offer a 14-day free trial on all paid plans, giving you full access to explore our premium features.</p>
          </div>
          
          <div class="bg-dark-900 rounded-xl p-6 hover:border-primary-500 border border-dark-700 transition-all duration-200">
            <h3 class="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
            <p class="text-gray-300">We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange bank transfers.</p>
          </div>
          
          <div class="bg-dark-900 rounded-xl p-6 hover:border-primary-500 border border-dark-700 transition-all duration-200">
            <h3 class="text-xl font-semibold text-white mb-3">Is there a contract or commitment?</h3>
            <p class="text-gray-300">No long-term contracts! All plans are subscription-based and can be canceled anytime.</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-24 text-center">
        <div class="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 max-w-5xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-6">
            Still not sure which plan is right for you?
          </h2>
          <p class="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Our team is ready to help you find the perfect solution for your specific needs. Schedule a free consultation today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="py-3 px-8 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-colors duration-200">
              Schedule a Demo
            </button>
            <button class="py-3 px-8 border border-primary-500 hover:bg-primary-500/20 rounded-xl text-white font-medium transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FooterSection from '~/components/FooterSection.vue';

// Pricing toggle state
const isAnnual = ref(true);

// Toggle between monthly and annual billing
const toggleBilling = () => {
  isAnnual.value = !isAnnual.value;
};
</script>

<style scoped>
/* Add any page-specific styles here */
.bg-dark-950 {
  background-color: #0a0b0e;
}

.bg-dark-900 {
  background-color: #101119;
}

.bg-dark-800 {
  background-color: #1a1b25;
}

.bg-dark-700 {
  background-color: #2a2b3d;
}
</style> 