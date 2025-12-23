<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue';
import TheWelcomeTitle from './components/TheWelcomeTitle.vue';
import ErrorPage from './components/ErrorPage.vue';

// Error handling state
const hasError = ref(false);
const errorMessage = ref('')

// Simulate API call (replace with actual weather API call)
const fetchWeatherData = async () => {
  try {
    hasError.value = false
    // Simulate API call - replace with actual weather API
    // const response = await fetch('your-weather-api-endpoint')
    // if (!response.ok) throw new Error('Failed to fetch weather data')

    // For now, simulate a successful call
    console.log('Weather data fetched successfully')
  } catch (error) {
    hasError.value = true
    errorMessage.value = error.message || 'Unable to fetch weather data'
  }
}

// Handle retry from error page
const handleRetry = () => {
  fetchWeatherData()
}

// Initialize weather data on component mount
fetchWeatherData()
</script>

<template>
  <main class="justify-center px-[20px] items-center md:px-8 text-white lg:px-30 xl:px-40 overflow-y">

    <Navbar/>


    <!-- Conditionally render content based on error state -->
    <ErrorPage
      v-if="hasError"
      :error-message="errorMessage"
      @retry="handleRetry"
    />
    <TheWelcomeTitle v-else />

  </main>


</template>

<style scoped>

</style>
