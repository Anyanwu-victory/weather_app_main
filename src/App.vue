<script setup>
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import Navbar from './components/Navbar.vue';
import TheWelcomeTitle from './components/TheWelcomeTitle.vue';
import WeatherContent from './components/WeatherContent.vue';
import ErrorPage from './components/ErrorPage.vue';

// Weather store
const weatherStore = useWeatherStore()

// Computed properties for error handling
const errorMessage = computed(() => weatherStore.error)
const hasError = computed(() => weatherStore.error !== null)
const hasWeatherData = computed(() => weatherStore.weatherData !== null)

// Handle retry from error page
const handleRetry = () => {
  weatherStore.initializeWeather()
}

// Initialize weather data on component mount
weatherStore.initializeWeather()
</script>

<template>
  <main class="justify-center px-[20px] items-center md:px-8 text-white lg:px-30 xl:px-36">

    <!-- Navbar should ALWAYS show -->
    <Navbar />

    <!-- Error state -->
    <ErrorPage
      v-if="hasError"
      :error-message="errorMessage"
      @retry="handleRetry"
    />

    <!-- Normal content (only when NO error and data exists) -->
    <template v-else-if="hasWeatherData">
      <TheWelcomeTitle />
      <WeatherContent />
    </template>

  </main>
</template>


<style scoped>

</style>
