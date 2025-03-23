<template>
  <section class="relative min-h-screen overflow-hidden pt-8">
    <!-- Main hero content and draggable elements -->
    <div class="container relative z-10 flex min-h-screen flex-col items-center px-4 py-16 text-center md:px-8" style="padding-top: 5rem;">
      <span class="linear-badge-blue mb-2 inline-block animate-fadeSlideUp opacity-0" style="animation-delay: 0.1s;">Future-Ready HR Platform</span>
      <h1 class="mb-5 max-w-4xl bg-gradient-to-r from-white via-secondary-300 to-gray-400 bg-clip-text bg-[length:200%_auto] animate-gradient-shift text-transparent">
        Streamline Your <span class="text-primary-400 relative inline-block animate-float">Talent Acquisition</span> Process
      </h1>
      <p class="mb-6 max-w-xl text-gray-400 animate-fadeSlideUp opacity-0" style="animation-delay: 0.3s;">
        Our AI-powered platform connects the right talent with the right opportunities, making hiring simpler and more effective.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fadeSlideUp opacity-0" style="animation-delay: 0.5s;">
        <NuxtLink to="/sign-up" class="cta-button btn-primary btn-lg no-underline group relative overflow-hidden">
          <span class="relative z-10">Get Started</span>
          <span class="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-500 group-hover:scale-105 transition-transform duration-300"></span>
          <span class="absolute -inset-x-full bottom-0 h-px w-[200%] bg-gradient-to-r from-transparent via-secondary-300 to-transparent opacity-50 group-hover:animate-shine"></span>
        </NuxtLink>
      </div>
      
      <!-- Floating transparent elements -->
      <!-- User card floating element -->
      <div 
        ref="userCardElement" 
        class="glass draggable cursor-move absolute w-64 max-w-xs rounded-xl p-4 md:block shadow-linear-lg backdrop-blur-xl border border-white/10 animate-float"
        style="animation-delay: 0.2s;"
        :style="{ top: userCardPosition.y + 'px', left: userCardPosition.x + 'px' }"
        @mousedown="(e) => startDrag(e, 'userCard')"
        @touchstart="(e) => startDrag(e, 'userCard')"
      >
        <div class="flex items-center gap-3">
          <div class="relative h-10 w-10 overflow-hidden rounded-full bg-primary-500/30 ring-2 ring-secondary-500/40 ring-offset-2 ring-offset-dark-900/50">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" class="h-full w-full object-cover" />
          </div>
          <div class="text-left">
            <p class="text-sm font-medium text-white">Emma Johnson</p>
            <p class="text-xs text-gray-400">UX Designer</p>
          </div>
        </div>
        <div class="mt-3 flex">
          <div class="mr-6">
            <p class="text-xs text-gray-400">Match Score</p>
            <p class="text-sm font-medium text-white">95%</p>
          </div>
          <div>
            <p class="text-xs text-gray-400">Experience</p>
            <p class="text-sm font-medium text-white">4 years</p>
          </div>
        </div>
        <div class="mt-3 flex items-center justify-between rounded-lg bg-dark-800/50 p-2 backdrop-blur-md">
          <span class="flex items-center gap-1 text-xs text-white">
            <span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span> Active now
          </span>
          <button class="text-xs text-primary-400 hover:text-primary-300 transition-colors duration-300">View Profile</button>
        </div>
      </div>
      
      <!-- Job recommendations floating element -->
      <div 
        ref="jobRecsElement" 
        class="glass draggable cursor-move absolute w-60 max-w-xs rounded-xl p-4 md:block shadow-linear-lg backdrop-blur-xl border border-white/10 animate-float"
        style="animation-delay: 0.5s;"
        :style="{ top: jobRecsPosition.y + 'px', left: jobRecsPosition.x + 'px' }"
        @mousedown="(e) => startDrag(e, 'jobRecs')"
        @touchstart="(e) => startDrag(e, 'jobRecs')"
      >
        <div class="mb-2 flex items-center justify-between">
          <h3 class="text-sm font-medium text-white">Job Recommendations</h3>
          <span class="rounded-full bg-primary-500/20 px-2 py-0.5 text-xs text-primary-400 animate-pulse-slow">3 new</span>
        </div>
        <div class="space-y-3">
          <div class="rounded-lg bg-dark-800/60 p-2 hover:bg-dark-800/80 transition-colors duration-300 border border-white/5">
            <p class="text-xs font-medium text-white">Senior Developer</p>
            <p class="text-xs text-gray-400">TechCorp Inc • Remote</p>
            <div class="mt-1 flex items-center justify-between">
              <span class="text-xs text-gray-500">$120-150k</span>
              <span class="text-xs text-accent-green">98% match</span>
            </div>
          </div>
          <div class="rounded-lg bg-dark-800/60 p-2 hover:bg-dark-800/80 transition-colors duration-300 border border-white/5">
            <p class="text-xs font-medium text-white">Product Manager</p>
            <p class="text-xs text-gray-400">Innovate Co • Hybrid</p>
            <div class="mt-1 flex items-center justify-between">
              <span class="text-xs text-gray-500">$110-140k</span>
              <span class="text-xs text-accent-purple">92% match</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats floating card -->
      <div 
        ref="statsElement" 
        class="glass draggable cursor-move absolute w-64 rounded-xl p-4 md:block shadow-linear-lg backdrop-blur-xl border border-white/10 animate-float"
        style="animation-delay: 0.8s;"
        :style="{ top: statsPosition.y + 'px', left: statsPosition.x + 'px' }"
        @mousedown="(e) => startDrag(e, 'stats')"
        @touchstart="(e) => startDrag(e, 'stats')"
      >
        <div class="flex items-center justify-between">
          <div class="text-center">
            <p class="text-xs text-gray-400">Users</p>
            <p class="text-sm font-medium text-white">10k+</p>
          </div>
          <div class="h-8 w-px bg-dark-700"></div>
          <div class="text-center">
            <p class="text-xs text-gray-400">Companies</p>
            <p class="text-sm font-medium text-white">500+</p>
          </div>
          <div class="h-8 w-px bg-dark-700"></div>
          <div class="text-center">
            <p class="text-xs text-gray-400">Jobs</p>
            <p class="text-sm font-medium text-white">5k+</p>
          </div>
        </div>
        <div class="mt-3 flex items-center justify-center gap-1 rounded-lg bg-dark-800/60 p-2 backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-accent-green animate-pulse-slow">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-xs text-white">Secure & Verified Platform</span>
        </div>
      </div>
      
      <!-- Draggable notification floating element (bottom right) -->
      <div 
        ref="notificationElement" 
        class="glass draggable cursor-move absolute rounded-xl p-3 lg:block shadow-linear-lg backdrop-blur-xl border border-white/10 animate-float"
        style="animation-delay: 1s;"
        :style="{ top: notificationPosition.y + 'px', left: notificationPosition.x + 'px' }"
        @mousedown="(e) => startDrag(e, 'notification')"
        @touchstart="(e) => startDrag(e, 'notification')"
      >
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-500/20 text-secondary-400 animate-pulse-slow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-medium text-white">New job alert</p>
            <p class="text-xs text-gray-400">5 minutes ago</p>
          </div>
        </div>
      </div>
      
      <!-- Background elements -->
      <div class="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      <div class="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-secondary-500/10 filter blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-accent-purple/10 filter blur-3xl animate-pulse-slow" style="animation-delay: 1.5s;"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Elements refs
const notificationElement = ref(null);
const userCardElement = ref(null);
const jobRecsElement = ref(null);
const statsElement = ref(null);

// Positions for all draggable elements
const notificationPosition = ref({ x: 0, y: 0 });
const userCardPosition = ref({ x: 0, y: 0 });
const jobRecsPosition = ref({ x: 0, y: 0 });
const statsPosition = ref({ x: 0, y: 0 });

// Dragging state
const isDragging = ref(false);
const currentDragTarget = ref(null);
const offset = ref({ x: 0, y: 0 });

// Initialize element positions
onMounted(() => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Set initial positions
  notificationPosition.value = {
    x: windowWidth * 0.85 - 192,
    y: windowHeight * 0.8,
  };
  
  userCardPosition.value = {
    x: windowWidth * 0.10,
    y: windowHeight * 0.33,
  };
  
  jobRecsPosition.value = {
    x: windowWidth * 0.85 - 192,
    y: windowHeight * 0.25,
  };
  
  statsPosition.value = {
    x: windowWidth * 0.5 - 128,
    y: windowHeight * 0.75,
  };
  
  // Add global event listeners
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', onDrag);
  window.addEventListener('touchend', stopDrag);
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', onDrag);
  window.removeEventListener('touchend', stopDrag);
});

// Start dragging and calculate offset
const startDrag = (event, target) => {
  isDragging.value = true;
  currentDragTarget.value = target;
  
  const clientX = event.clientX || (event.touches && event.touches[0].clientX);
  const clientY = event.clientY || (event.touches && event.touches[0].clientY);
  
  let currentPosition;
  switch(target) {
    case 'notification':
      currentPosition = notificationPosition.value;
      break;
    case 'userCard':
      currentPosition = userCardPosition.value;
      break;
    case 'jobRecs':
      currentPosition = jobRecsPosition.value;
      break;
    case 'stats':
      currentPosition = statsPosition.value;
      break;
  }
  
  offset.value = {
    x: clientX - currentPosition.x,
    y: clientY - currentPosition.y
  };
  
  event.preventDefault();
};

// Handle drag movement
const onDrag = (event) => {
  if (!isDragging.value) return;
  
  const clientX = event.clientX || (event.touches && event.touches[0].clientX);
  const clientY = event.clientY || (event.touches && event.touches[0].clientY);
  
  const newPosition = {
    x: clientX - offset.value.x,
    y: clientY - offset.value.y
  };
  
  // Update the position of the current dragged element
  switch(currentDragTarget.value) {
    case 'notification':
      notificationPosition.value = newPosition;
      break;
    case 'userCard':
      userCardPosition.value = newPosition;
      break;
    case 'jobRecs':
      jobRecsPosition.value = newPosition;
      break;
    case 'stats':
      statsPosition.value = newPosition;
      break;
  }
};

// Stop dragging
const stopDrag = () => {
  isDragging.value = false;
  currentDragTarget.value = null;
};
</script>

<style scoped>
.draggable {
  user-select: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  z-index: 50;
}

.draggable:hover {
  box-shadow: 0 8px 25px rgba(94, 106, 210, 0.15);
  transform: translateY(-2px) scale(1.01);
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.cta-button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.025em;
  font-weight: 600;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(94, 106, 210, 0.25);
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

.animate-shine {
  animation: shine 3s infinite linear;
}

/* Avoid animation for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-pulse,
  .animate-pulse-slow,
  .animate-fadeSlideUp,
  .animate-gradient-shift,
  .animate-shine {
    animation: none !important;
  }
}

.btn-lg {
  @apply rounded-lg px-6 py-2.5 text-base font-medium;
}
</style> 