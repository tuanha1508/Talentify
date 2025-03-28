<template>
  <div class="relative min-h-screen flex flex-col">
    <BackgroundVideo />
    <HeaderSection />
    <main class="flex-grow">
      <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
import BackgroundVideo from '~/components/BackgroundVideo.vue';
import HeaderSection from '~/components/HeaderSection.vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { useHead, useRoute } from 'nuxt/app';

// Get route
const route = useRoute();

// Add Google Fonts
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap',
    }
  ]
});

// Setup and cleanup event listeners
const setupEventListeners = (): void => {
  // Smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      const element = e.currentTarget as HTMLAnchorElement;
      handleAnchorClick(e, element);
    });
  });

  // Apply entrance animations to sections when they become visible
  initSectionObserver();
};

// Handle anchor clicks
const handleAnchorClick = (e: Event, element: HTMLAnchorElement): void => {
  e.preventDefault();
  const targetId = element.getAttribute('href');
  if (!targetId || targetId === '#') return;
  
  const targetElement = document.querySelector(targetId) as HTMLElement;
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Offset for header
      behavior: 'smooth'
    });
    
    // Add entrance animation class to the target section
    targetElement.classList.add('section-animate');
    setTimeout(() => {
      targetElement.classList.remove('section-animate');
    }, 1000);
  }
};

// Initialize IntersectionObserver for sections
const initSectionObserver = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
};

// Ensure animations are initialized
onMounted(() => {
  setupEventListeners();
});

// Cleanup
onBeforeUnmount(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.removeEventListener('click', (e: Event) => {
      const element = e.currentTarget as HTMLAnchorElement;
      handleAnchorClick(e, element);
    });
  });
});
</script>

<style>
html, body {
  @apply bg-dark-950 text-white antialiased;
  scroll-behavior: smooth;
}

.dark {
  @apply bg-dark-950 text-white;
}

*:focus {
  @apply outline-primary-500 outline-2;
}

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 translate-y-5;
}

/* Custom container class already defined with Tailwind */
.container {
  @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
}

/* Section animations */
section {
  @apply opacity-0 translate-y-8 transition-all duration-500 ease-out;
}

section.section-visible {
  @apply opacity-100 translate-y-0;
}

.section-animate {
  animation: sectionFocus 1s ease;
}

@keyframes sectionFocus {
  0% { @apply scale-100; }
  50% { @apply scale-[1.02]; }
  100% { @apply scale-100; }
}
</style>
