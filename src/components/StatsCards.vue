<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:gap-3">
    
    <BaseCard class="md:px-6 space-y-4">
      <p class="text-neutral-300">Feels Like</p>
      <p class="text-2xl xl:text-3xl font-normal">
        <span v-if="isLoading">---</span>
        <span v-else>{{ feelsLike }}°{{ unitsStore.units.temperature }}</span>
      </p>
    </BaseCard>

    <BaseCard class="md:px-6 space-y-4">
      <p class="text-neutral-300">Humidity</p>
      <p class="text-2xl xl:text-3xl font-normal">
        <span v-if="isLoading">---</span>
        <span v-else>{{ humidity }}</span>
      </p>
    </BaseCard>

    <BaseCard class="md:px-6 space-y-4">
      <p class="text-neutral-300">Wind</p>
      <p class="text-2xl xl:text-3xl font-normal">
        <span v-if="isLoading">---</span>
        <span v-else>{{ windSpeed }} {{ unitsStore.units.wind }}</span>
      </p>
    </BaseCard>

    <BaseCard class="md:px-6 space-y-4">
      <p class="text-neutral-300">Precipitation</p>
      <p class="text-2xl xl:text-3xl font-normal">
        <span v-if="isLoading">---</span>
        <span v-else>{{ precipitation }} {{ unitsStore.units.precipitation }}</span>
      </p>
    </BaseCard>

  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import { useUnitsStore } from '@/stores/useUnitsStore'
import BaseCard from './ui/BaseCard.vue'

// Stores
const weatherStore = useWeatherStore()
const unitsStore = useUnitsStore()
const isLoading = computed(() => {
  return weatherStore.isLoading || !weatherStore.weatherData
});

// Computed properties for weather stats
const feelsLike = computed(() => {
  if (isLoading.value) return null
  return Math.round(weatherStore.currentWeather?.temperature)
})


const humidity = computed(() => {
  if (isLoading.value) return null

  const hourly = weatherStore.hourlyWeather
  if (!hourly?.relativehumidity_2m) return 'N/A'

  const now = new Date()
  const currentHour = now.getHours()
  return `${hourly.relativehumidity_2m[currentHour]}%`
})

const windSpeed = computed(() => {
  if (isLoading.value) return null
  return Math.round(weatherStore.currentWeather?.windspeed)
})


const precipitation = computed(() => {
  // Open-Meteo doesn't provide current precipitation, so we'll show 0 or estimate
  return 0
})
</script>

<style scoped>

</style>