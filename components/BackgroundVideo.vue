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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

// Define props for the component
interface Props {
  videoSrc?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<Props>(), {
  videoSrc: '/videos/dark_theme_video.mp4'
})

const videoElement = ref<HTMLVideoElement | null>(null);

// Log when component mounts to debug
onMounted(() => {
  console.log('BackgroundVideo mounted, src:', props.videoSrc);
});

// Event handlers for video element
const handleVideoError = (error: Event) => {
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