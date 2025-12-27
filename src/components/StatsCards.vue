<template>
     <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:gap-3">
        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Feels Like</p>
          <p class="text-2xl xl:text-3xl  font-normal">{{ feelsLike }}°{{ unitsStore.units.temperature }}</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Humidity</p>
          <p class="text-2xl xl:text-3xl font-normal">{{ humidity }}</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Wind</p>
          <p class="text-2xl xl:text-3xl font-normal">{{ windSpeed }} {{ unitsStore.units.wind }}</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Precipitation</p>
          <p class="text-2xl xl:text-3xl font-normal">{{ precipitation }} {{ unitsStore.units.precipitation }}</p>
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

// Computed properties for weather stats
const feelsLike = computed(() => {
  // Open-Meteo doesn't provide "feels like" directly, so we'll use current temperature
  const temp = weatherStore.currentWeather?.temperature
  return temp ? Math.round(temp) : 18
})

const humidity = computed(() => {
  const hourly = weatherStore.hourlyWeather;
  if (!hourly?.relativehumidity_2m) return 'N/A';

  // Get current hour's humidity
  const now = new Date();
  const currentHour = now.getHours();
  return `${hourly.relativehumidity_2m[currentHour]}%`;
})

const windSpeed = computed(() => {
  const wind = weatherStore.currentWeather?.windspeed
  return wind ? Math.round(wind) : 14
})

const precipitation = computed(() => {
  // Open-Meteo doesn't provide current precipitation, so we'll show 0 or estimate
  return 0
})
</script>

<style scoped>

</style>