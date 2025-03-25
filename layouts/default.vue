<template>
  <div class="min-h-screen flex flex-col bg-dark-900">
    <!-- Header is now in app.vue -->
    <main class="flex-grow pt-16">
      <slot />
    </main>
    <!-- Footer is now included in index.vue as FooterSection -->
  </div>
</template>

<script setup lang="ts">
// Layout components
</script> 