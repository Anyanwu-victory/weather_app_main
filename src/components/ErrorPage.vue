<template>
  <div class="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
    <!-- Error Icon -->
    <div class="mb-6">
      <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
      </svg>
    </div>

    <!-- Error Title -->
    <h2 class="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>

    <!-- Error Message -->
    <p class="text-gray-300 mb-6 max-w-md">
      {{ errorMessage || "We couldn't fetch the weather data right now. Please check your connection and try again." }}
    </p>

    <!-- Retry Button -->
    <button
      @click="$emit('retry')"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
      <span>Try Again</span>
    </button>
  </div>
</template>

<script setup>
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