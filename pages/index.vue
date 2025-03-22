<template>
  <div>
    <!-- Hero Section with transparent background -->
    <HeroSection />
    
    <!-- Non-transparent sections below with solid background -->
    <div class="solid-bg">
      <FeaturesSection />
      <JobSeekersSection />
      <EmployersSection />
      <ContactSection />
      <FooterSection />
      </div>
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import JobSeekersSection from '~/components/JobSeekersSection.vue';
import EmployersSection from '~/components/EmployersSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import FooterSection from '~/components/FooterSection.vue';
</script> 

<style scoped>
.solid-bg {
  /* Ensure solid background with no transparency */
  position: relative;
  z-index: 20;
  background-color: var(--dark-950);
}

/* Add animation delays for sequential section animations */
:deep(section:nth-child(1)) { transition-delay: 0s; }
:deep(section:nth-child(2)) { transition-delay: 0.1s; }
:deep(section:nth-child(3)) { transition-delay: 0.2s; }
:deep(section:nth-child(4)) { transition-delay: 0.3s; }
:deep(section:nth-child(5)) { transition-delay: 0.4s; }
</style> 