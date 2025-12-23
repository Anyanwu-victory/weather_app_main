<template>
  <div class="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
    <!-- Error Icon -->
    <div class="mb-6">
      
      <img
      :src='ErrorMsg'
      class="w-[50px] h-[50px]"
      alt="error message icon"
      />
    </div>

    <!-- Error Title -->
    <h2 class="text-5xl font-bold text-white mb-4">Something went wrong</h2>

    <!-- Error Message -->
    <p class="text-gray-300 mb-6 max-w-md">
      {{ errorMessage || "We couldn't connect to the server(API error).Please try again in a few moments." }}
    </p>

    <!-- Retry Button -->
    <button
      @click="$emit('retry')"
      class="bg-neutral-100 bg-opacity-15 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
      <span>Retry</span>
    </button>
  </div>
</template>

<script setup>
import ErrorMsg from '@/assets/images/icon-error.svg';

defineProps({
  errorMessage: {
    type: String,
    default: null
  }
})

defineEmits(['retry'])
</script>

<style scoped>
/* Additional custom styles if needed */
</style>