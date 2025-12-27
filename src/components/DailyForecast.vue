<script setup>
import { computed } from 'vue';
import { useWeatherStore } from '@/stores/useWeatherStore';
import { getWeatherIcon } from '@/utils/weatherIcons';
import BaseCard from './ui/BaseCard.vue';

const weatherStore = useWeatherStore()

const getDayName = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'short' })
}

const dailyForecast = computed(() => {
  const daily = weatherStore.dailyWeather
  if (!daily) return []

  return daily.time.slice(0, 7).map((date, index) => ({
    name: getDayName(date),
    high: Math.round(daily.temperature_2m_max[index]),
    low: Math.round(daily.temperature_2m_min[index]),
    icon: getWeatherIcon(daily.weathercode[index]),
  }))
})
</script>


<template>
  <div class="mt-5 mb-4">
    <!-- Daily forecast -->
    <h1 class="font-bold">Daily Forecast</h1>

    <div class="grid grid-cols-3 sm:grid-cols-7 gap-4 text-center mt-3">
      <BaseCard v-for="day in dailyForecast" :key="day.name" class="px-0">
        <p class="text-sm">{{ day.name }}</p>
        <img :src="day.icon" class="mx-auto w-12 md:w-14" />
        <div class="text-sm flex  justify-around align-bottom px-0">
          <p>{{ day.high }}°</p>
          <p>{{ day.low }}°</p>
        </div>
      </BaseCard>
    </div>

  </div>
</template>

<style scoped></style>