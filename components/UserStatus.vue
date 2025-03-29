<template>
  <div class="flex items-center space-x-4">
    <div class="flex items-center space-x-2">
      <img
        v-if="userStore.currentUser?.avatar"
        :src="userStore.currentUser.avatar"
        class="h-8 w-8 rounded-full border border-primary-700/50"
        alt="User avatar"
      />
      <div v-else class="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-medium">
        {{ userInitials }}
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-medium text-white">{{ userStore.userFullName }}</span>
        <span class="text-xs text-gray-400">{{ userType }}</span>
      </div>
    </div>
    <button
      @click="logout"
      class="px-3 py-1 text-xs text-red-400 hover:text-red-300 transition-colors duration-200"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const router = useRouter()

const userInitials = computed(() => {
  if (!userStore.currentUser?.name) return '?'
  
  return userStore.currentUser.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
})

const userType = computed(() => {
  if (userStore.isJobSeeker) return 'Job Seeker'
  if (userStore.isEmployer) return 'Employer'
  if (userStore.isAdmin) return 'Admin'
  return 'User'
})

const logout = () => {
  userStore.logout()
  router.push('/')
}
</script> 