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
const hasError = computed(() => !!weatherStore.error)
const errorMessage = computed(() => weatherStore.error)
const hasWeatherData = computed(() => !!weatherStore.weatherData)

// Handle retry from error page
const handleRetry = () => {
  weatherStore.initializeWeather()
}

// Initialize weather data on component mount
weatherStore.initializeWeather()
</script>

<template>
  <main class="justify-center px-[20px] items-center md:px-8 text-white lg:px-30 xl:px-36 overflow-y">

    <Navbar/>

    <TheWelcomeTitle/>

    <!-- Conditionally render content based on state -->
    <ErrorPage
      v-if="hasError && hasWeatherData"
      :error-message="errorMessage"
      @retry="handleRetry"
    />
    <WeatherContent v-else-if="hasWeatherData" />

  </main>


</template>

<style scoped>

</style>
