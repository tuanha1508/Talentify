<template>
  <div class="fixed inset-0 z-0 overflow-hidden">
    <video 
      ref="videoElement"
      class="absolute min-h-screen min-w-full object-cover"
      autoplay 
      muted 
      loop 
      playsinline
      @error="handleVideoError"
      @loadeddata="handleVideoLoaded"
    >
      <source :src="videoSrc" type="video/mp4">
      <!-- Fallback text if video cannot be played -->
      Your browser does not support the video tag.
    </video>
    <!-- Dark overlay with gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/80 to-dark-950/95"></div>
    <!-- Additional ambient gradients for depth -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-secondary-500/5 to-transparent rounded-full"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-radial from-secondary-600/5 to-transparent rounded-full"></div>
      <div class="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-radial from-accent-purple/5 to-transparent rounded-full"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// Define props for the component
const props = defineProps({
  videoSrc: {
    type: String,
    default: '/videos/dark_theme_video.mp4'
  }
});

const videoElement = ref(null);

// Log when component mounts to debug
onMounted(() => {
  console.log('BackgroundVideo mounted, src:', props.videoSrc);
});

// Event handlers for video element
const handleVideoError = (error) => {
  console.error('Video loading error:', error);
  console.error('Attempted to load video from:', props.videoSrc);
};

const handleVideoLoaded = () => {
  console.log('Video loaded successfully!');
};

// Watch for changes in the video source
watch(() => props.videoSrc, (newSrc) => {
  console.log('Video source changed to:', newSrc);
});
</script> 