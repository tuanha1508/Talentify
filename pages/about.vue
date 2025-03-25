<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-dark-950 py-20 lg:py-28">
      <div class="container">
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-secondary-400 to-accent-purple bg-clip-text text-transparent animate-text-shimmer">
            About Vortexify
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Revolutionizing HR management and job seeking through cutting-edge technology and human-centered design.
          </p>
          <div class="w-32 h-1 bg-secondary-500 mx-auto rounded-full mb-12"></div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div class="absolute top-20 left-20 w-64 h-64 bg-secondary-500 rounded-full filter blur-[100px]"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-accent-purple rounded-full filter blur-[100px]"></div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-surface">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-accent-purple rounded-lg blur opacity-25"></div>
              <div class="relative bg-surface-raised p-8 rounded-lg border border-dark-700">
                <h2 class="text-3xl font-display font-bold mb-6 text-white">Our Mission</h2>
                <p class="text-gray-300 mb-6">
                  At Vortexify, we're committed to bridging the gap between exceptional talent and innovative companies. We believe that the right match can transform both careers and businesses.
                </p>
                <p class="text-gray-300">
                  Our platform leverages advanced AI and machine learning to create meaningful connections, while maintaining a deeply human approach to recruitment and career development.
                </p>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-25"></div>
              <div class="relative bg-surface-raised p-8 rounded-lg border border-dark-700">
                <h2 class="text-3xl font-display font-bold mb-6 text-white">Our Vision</h2>
                <p class="text-gray-300 mb-6">
                  We envision a world where finding the perfect job or the ideal candidate is intuitive, efficient, and even enjoyable. A future where technology enhances human potential rather than replacing it.
                </p>
                <p class="text-gray-300">
                  Vortexify aims to be at the forefront of this transformation, creating a new paradigm for how people and companies connect in the professional landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-dark-950">
      <div class="container">
        <h2 class="text-4xl font-display font-bold text-center mb-12 text-white">Our Leadership Team</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member Card -->
          <div class="bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-glow-sm">
            <div class="h-64 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-surface opacity-70"></div>
              <div class="absolute bottom-0 left-0 w-full p-4">
                <h3 class="text-xl font-bold text-white">Alexandra Chen</h3>
                <p class="text-secondary-400">Chief Executive Officer</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-300">
                With over 15 years of experience in HR technology, Alexandra leads our vision to transform how companies and talent connect.
              </p>
            </div>
          </div>
          
          <!-- Team Member Card -->
          <div class="bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-glow-sm">
            <div class="h-64 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-surface opacity-70"></div>
              <div class="absolute bottom-0 left-0 w-full p-4">
                <h3 class="text-xl font-bold text-white">Marcus Blackwell</h3>
                <p class="text-secondary-400">Chief Technology Officer</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-300">
                Marcus brings expertise in AI and machine learning to create intelligent systems that power our matching algorithms.
              </p>
            </div>
          </div>
          
          <!-- Team Member Card -->
          <div class="bg-surface rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-glow-sm">
            <div class="h-64 bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-surface opacity-70"></div>
              <div class="absolute bottom-0 left-0 w-full p-4">
                <h3 class="text-xl font-bold text-white">Sophia Rodriguez</h3>
                <p class="text-secondary-400">Head of User Experience</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-300">
                Sophia ensures our platform delivers an intuitive and seamless experience for both job seekers and employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-surface">
      <div class="container">
        <h2 class="text-4xl font-display font-bold text-center mb-12 text-white">Our Core Values</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">✨</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Innovation</h3>
            <p class="text-gray-300">
              We constantly push the boundaries of what's possible in HR technology, seeking new solutions to age-old problems.
            </p>
          </div>
          
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">🤝</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Human Connection</h3>
            <p class="text-gray-300">
              Despite our technological focus, we never lose sight of the human element in the recruitment process.
            </p>
          </div>
          
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">🔒</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Trust & Security</h3>
            <p class="text-gray-300">
              We maintain the highest standards of data protection and privacy, ensuring a secure environment for all users.
            </p>
          </div>
          
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">🌍</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Diversity</h3>
            <p class="text-gray-300">
              We celebrate diversity and work to create inclusive hiring practices that give everyone a fair opportunity.
            </p>
          </div>
          
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">🚀</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Excellence</h3>
            <p class="text-gray-300">
              We're committed to delivering excellence in every aspect of our platform and service.
            </p>
          </div>
          
          <!-- Value Card -->
          <div class="bg-surface-raised p-8 rounded-lg border border-dark-700 transition-all duration-300 hover:shadow-glow-sm">
            <div class="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl text-secondary-400">♻️</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">Sustainability</h3>
            <p class="text-gray-300">
              We're building for the long term, with sustainable practices that benefit our users, team, and planet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-dark-950">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-display font-bold mb-8 text-white">Join Our Journey</h2>
          <p class="text-xl text-gray-300 mb-10">
            We're always looking for talented individuals to join our team. Explore our career opportunities or reach out to learn more about Vortexify.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/careers" class="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium">
              View Careers
            </NuxtLink>
            <NuxtLink to="/contact" class="bg-surface hover:bg-surface-hover text-white border border-dark-700 px-8 py-3 rounded-lg transition-all duration-300 font-medium">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Use ClientOnly component for footer to avoid hydration issues -->
    <ClientOnly>
      <FooterSection />
      <template #fallback>
        <div class="h-20 bg-dark-950"></div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { onMounted, nextTick } from 'vue';
import FooterSection from '~/components/FooterSection.vue';

// Set page metadata
useHead({
  title: 'About Us | Vortexify',
  meta: [
    { name: 'description', content: 'Learn about Vortexify, our mission, team, and values.' }
  ]
});

// @ts-ignore: Nuxt 3 macro
// Eager load and define critical components to prevent lazy loading issues
definePageMeta({
  // Preload key resources
  keepalive: true,
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});

// Ensure sections are visible on page load
onMounted(async () => {
  // Wait for next tick to ensure DOM is fully updated
  await nextTick();
  
  // Force sections to be visible
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-visible');
  });
});
</script>

<style scoped>
/* Additional custom styles can be added here */
</style> 