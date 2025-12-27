<script setup>
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import { useUnitsStore } from '@/stores/useUnitsStore'
import Sunny from '@/assets/images/icon-sunny.webp';
import StatsCards from './StatsCards.vue';
import DailyForecast from './DailyForecast.vue';
import HourlyForecast from './HourlyForecast.vue';

// Stores
const weatherStore = useWeatherStore()
const unitsStore = useUnitsStore()

// Computed properties
const currentWeather = computed(() => weatherStore.currentWeather)
const currentLocation = computed(() => {
  const location = weatherStore.currentLocation
  if (!location.name) return 'Berlin, Germany'

  // Format the location name to show city, country
  const parts = location.name.split(', ')
  if (parts.length >= 2) {
    return `${parts[0]}, ${parts[parts.length - 1]}`
  }
  return location.name
})
const isSearchNotFound = computed(() => weatherStore.error === "Search not found")
const temperature = computed(() => {
  if (!currentWeather.value?.temperature) return '20'
  return Math.round(currentWeather.value.temperature)
})

const currentDate = computed(() => {
  const now = new Date()
  return now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
})

// Weather icon mapping (simplified - you can expand this)
const getWeatherIcon = (weathercode) => {
  // For now, return sunny icon for all weather codes
  // You can implement proper weather code to icon mapping
  return Sunny
}
</script>

<template>
  <div v-if="isSearchNotFound" class="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
    <!-- Error Icon -->
    <div class="mb-6">
      <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>

    <!-- Error Message -->
    <h2 class="text-2xl font-bold text-white mb-4">Search not found</h2>
    <p class="text-gray-300 mb-6 max-w-md">
      We couldn't find the city you're looking for. Please try a different city name or check the spelling.
    </p>
  </div>

  <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 mb-20">
    <!-- Left section -->
    <div class="lg:col-span-2 space-y-6">
      <!-- Main weather card -->
      <div class="rounded-2xl  p-6 flex flex-col justify-between items-center card-today md:flex-row text-center">
        <div class="pt-3">
          <h2 class="text-2xl font-semibold">{{ currentLocation.name }}</h2>
          <p class="text-[16px] opacity-80 mt-2 md:pl-[2px] text-start">{{ currentDate }}</p>
        </div>

        <div class="text-7xl font-bold text-italic flex space-x-8 justify-center items-center font-sans">
          <img :src="getWeatherIcon(currentWeather?.weathercode)" alt="weather condition image" class="w-[99px] md:w-24" loading="lazy" />
          <span> {{ temperature }}° </span>
        </div>
      </div>

      <!-- Stats cards -->
      <StatsCards />

      <!-- Daily forecast -->
      <DailyForecast />
    </div>

    <!-- Right section -->
    <div class="lg:col-span-1">
      <!-- Hourly forecast -->
      <HourlyForecast />
    </div>
  </div>
</template>

<style scoped>
.card-today {
  background-image: url('../assets/images/bg-today-large.svg');
  background-size: cover;
  background-position: center;
  line-height: 32px;
  height: 270px;
}

.text-italic {
  font-family: "DmSans", sans-serif;
  font-style: italic;
}

@media (max-width: 768px) {
  .card-today {
    background-image: url('../assets/images/bg-today-small.svg');
  }
}
 
</style>
