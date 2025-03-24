<template>
  <div>
    <!-- Hero Section with transparent background -->
    <HeroSection />
    
    <!-- Non-transparent sections below with solid background -->
    <div class="relative z-20 bg-dark-950">
      <FeaturesSection />
      <JobSeekersSection />
      <EmployersSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import HeroSection from '~/components/HeroSection.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import JobSeekersSection from '~/components/JobSeekersSection.vue';
import EmployersSection from '~/components/EmployersSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import FooterSection from '~/components/FooterSection.vue';

// When mounted, ensure sections are properly visible
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
/* All styles converted to Tailwind utility classes in the HTML markup */
</style> 