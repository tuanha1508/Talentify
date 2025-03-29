<template>
  <section class="relative min-h-screen overflow-hidden pt-0">
    <!-- Main hero content and draggable elements -->
    <div class="container relative z-10 flex min-h-screen flex-col items-center px-4 py-16 text-center md:px-8 pt-20">
      <span class="linear-badge-blue mb-2 inline-block animate-fadeSlideUp opacity-0 delay-100">Future-Ready HR Platform</span>
      <h1 class="mb-5 max-w-4xl bg-gradient-to-r from-white via-secondary-300 to-gray-400 bg-clip-text bg-[length:200%_auto] animate-gradient-shift text-transparent">
        Streamline Your <span class="text-primary-400 relative inline-block animate-float">Talent Acquisition</span> Process
      </h1>
      <p class="mb-6 max-w-xl text-gray-400 animate-fadeSlideUp opacity-0 delay-300">
        Unite talent with opportunity through our AI-powered platform. Revolutionize hiring with precision matching, data-driven insights, and seamless collaboration.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fadeSlideUp opacity-0 delay-500">
        <NuxtLink to="/sign-up" class="animated-border-button group relative overflow-hidden px-8 py-3.5 text-base rounded-2xl bg-dark-900/80 backdrop-blur-md flex items-center">
          <span class="relative z-10 font-medium flex items-center text-white">
            <div class="mr-2 w-5 h-5 flex items-center justify-center relative">
              <img src="/images/logo.svg" alt="Vortexify Logo" class="h-full w-full relative z-10" />
            </div>
            Get Started
          </span>
        </NuxtLink>
      </div>
      
      <!-- Floating transparent elements -->
      <!-- User card floating element -->
      <div 
        ref="userCardElement" 
        class="glass draggable cursor-move absolute w-64 max-w-xs rounded-xl p-4 md:block shadow-lg shadow-secondary-500/10 backdrop-blur-xl border border-white/10 animate-float bg-dark-900/40 delay-200"
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
        class="glass draggable cursor-move absolute w-64 max-w-xs rounded-xl p-4 md:block shadow-lg shadow-secondary-500/10 backdrop-blur-xl border border-white/10 animate-float bg-dark-900/40 delay-500"
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
        class="glass draggable cursor-move absolute w-64 max-w-xs rounded-xl p-4 md:block shadow-lg shadow-secondary-500/10 backdrop-blur-xl border border-white/10 animate-float bg-dark-900/40 delay-800"
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
        class="glass draggable cursor-move absolute w-64 max-w-xs rounded-xl p-4 md:block shadow-lg shadow-secondary-500/10 backdrop-blur-xl border border-white/10 animate-float bg-dark-900/40 delay-1000"
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
      <div class="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-accent-purple/10 filter blur-3xl animate-pulse-slow delay-1500"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Define types for the positions
interface Position {
  x: number;
  y: number;
}

// Elements refs
const notificationElement = ref<HTMLElement | null>(null);
const userCardElement = ref<HTMLElement | null>(null);
const jobRecsElement = ref<HTMLElement | null>(null);
const statsElement = ref<HTMLElement | null>(null);

// Define type for draggable elements
type DragTarget = 'notification' | 'userCard' | 'jobRecs' | 'stats' | null;

// Positions for all draggable elements
const notificationPosition = ref<Position>({ x: 0, y: 0 });
const userCardPosition = ref<Position>({ x: 0, y: 0 });
const jobRecsPosition = ref<Position>({ x: 0, y: 0 });
const statsPosition = ref<Position>({ x: 0, y: 0 });

// Dragging state
const isDragging = ref<boolean>(false);
const currentDragTarget = ref<DragTarget>(null);
const offset = ref<Position>({ x: 0, y: 0 });
const lastMousePosition = ref<Position>({ x: 0, y: 0 });
const animationFrameId = ref<number | null>(null);

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
const startDrag = (event: MouseEvent | TouchEvent, target: DragTarget) => {
  isDragging.value = true;
  currentDragTarget.value = target;
  
  const clientX = 'clientX' in event ? event.clientX : (event.touches && event.touches[0].clientX);
  const clientY = 'clientY' in event ? event.clientY : (event.touches && event.touches[0].clientY);
  
  let currentPosition: Position = { x: 0, y: 0 };
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
  
  // Add active class for better visual feedback during dragging
  let targetElement: HTMLElement | null = null;
  switch(target) {
    case 'notification':
      targetElement = notificationElement.value;
      break;
    case 'userCard':
      targetElement = userCardElement.value;
      break;
    case 'jobRecs':
      targetElement = jobRecsElement.value;
      break;
    case 'stats':
      targetElement = statsElement.value;
      break;
  }
  
  if (targetElement) {
    targetElement.classList.add('dragging');
  }
  
  event.preventDefault();
};

// Handle drag movement
const onDrag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  
  const clientX = 'clientX' in event ? event.clientX : (event.touches && event.touches[0].clientX);
  const clientY = 'clientY' in event ? event.clientY : (event.touches && event.touches[0].clientY);
  
  // Store the mouse position for use in animation frame
  lastMousePosition.value = { x: clientX, y: clientY };
  
  // If we don't have an animation frame yet, request one
  if (!animationFrameId.value) {
    animationFrameId.value = requestAnimationFrame(updatePosition);
  }
};

// Update position in animation frame for smoother movement
const updatePosition = () => {
  animationFrameId.value = null;
  
  if (!isDragging.value || !currentDragTarget.value) return;
  
  const newPosition: Position = {
    x: lastMousePosition.value.x - offset.value.x,
    y: lastMousePosition.value.y - offset.value.y
  };
  
  let currentPosition: Position = { x: 0, y: 0 };
  switch(currentDragTarget.value) {
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
  
  // Apply smooth position update (linear interpolation)
  const smoothFactor = 0.98; // Increased for more direct response
  
  const smoothedPosition: Position = {
    x: currentPosition.x + (newPosition.x - currentPosition.x) * smoothFactor,
    y: currentPosition.y + (newPosition.y - currentPosition.y) * smoothFactor
  };
  
  // Update the position of the current dragged element
  switch(currentDragTarget.value) {
    case 'notification':
      notificationPosition.value = smoothedPosition;
      break;
    case 'userCard':
      userCardPosition.value = smoothedPosition;
      break;
    case 'jobRecs':
      jobRecsPosition.value = smoothedPosition;
      break;
    case 'stats':
      statsPosition.value = smoothedPosition;
      break;
  }
  
  // Request another frame if still dragging
  if (isDragging.value) {
    animationFrameId.value = requestAnimationFrame(updatePosition);
  }
};

// Stop dragging
const stopDrag = () => {
  if (!isDragging.value || !currentDragTarget.value) return;
  
  // Cancel any pending animation frame
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
    animationFrameId.value = null;
  }
  
  // Remove active class when dragging stops
  let targetElement: HTMLElement | null = null;
  switch(currentDragTarget.value) {
    case 'notification':
      targetElement = notificationElement.value;
      break;
    case 'userCard':
      targetElement = userCardElement.value;
      break;
    case 'jobRecs':
      targetElement = jobRecsElement.value;
      break;
    case 'stats':
      targetElement = statsElement.value;
      break;
  }
  
  if (targetElement) {
    targetElement.classList.remove('dragging');
  }
  
  isDragging.value = false;
  currentDragTarget.value = null;
};
</script>

<style scoped>
.draggable {
  @apply select-none z-50 cursor-grab active:cursor-grabbing;
  will-change: transform, box-shadow;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.draggable:hover {
  @apply shadow-lg shadow-cyan-500/15 transform -translate-y-1 scale-[1.01];
}

.draggable:active {
  @apply shadow-xl shadow-cyan-500/20 scale-[0.99] -translate-y-0.5;
  transition-duration: 100ms;
}

.dragging {
  @apply shadow-xl shadow-cyan-500/25 scale-[1.02] -translate-y-1 z-[60];
  transition: transform 60ms ease-out, box-shadow 150ms ease-out;
}

/* Animation delay utilities */
.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-800 {
  animation-delay: 0.8s;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-1500 {
  animation-delay: 1.5s;
}

/* All animation and button styles have been moved to main.css */
.btn-lg {
  @apply rounded-lg px-6 py-2.5 text-base font-medium;
}

.animated-border-button {
  @apply relative;
}

.animated-border-button::before {
  @apply content-[''] absolute inset-0 rounded-[inherit] p-[1px];
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: border-rotate 3s linear infinite;
  background-size: 300% 100%;
}

@keyframes border-rotate {
  0% {
    @apply bg-[position:0%_0];
  }
  100% {
    @apply bg-[position:300%_0];
  }
}
</style> 