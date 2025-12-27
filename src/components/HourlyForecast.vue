
<script setup>
import { computed, ref } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import { getWeatherIcon } from '@/utils/weatherIcons'

const weatherStore = useWeatherStore()

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const isDayOpen = ref(false)
const selectedDay = ref('Today')

const hourlyForecast = computed(() => {
  const hourly = weatherStore.hourlyWeather
  if (!hourly) return []

  return hourly.time.slice(0, 8).map((time, index) => ({
    time: new Date(time).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }),
    temperature: Math.round(hourly.temperature_2m[index]),
    icon: getWeatherIcon(hourly.weathercode[index]),
  }))
})
</script>

<template>


    <!-- Right section -->

    <!-- Hourly forecast -->
    <div class="rounded-2xl bg-neutral-800 p-4 space-y-4">
        <div class="flex justify-between items-center">
            <h3 class="font-semibold">Hourly forecast</h3>

            <div class="relative">
                <!-- Trigger -->
                <button @click="isDayOpen = !isDayOpen"
                    class="flex items-center gap-2 bg-neutral-700 rounded-lg px-3 py-2 text-sm">
                    {{ selectedDay }}
                    <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isDayOpen }"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                    </svg>
                </button>

                <!-- Dropdown -->
                <div v-if="isDayOpen" class="absolute right-0 mt-2 w-40 rounded-xl
           bg-neutral-800 border border-neutral-700
           shadow-xl z-50">
                    <ul class="py-1 text-sm">
                        <li v-for="day in days" :key="day">
                            <button @click="selectDay(day)" class="flex w-full justify-between items-center
                 px-4 py-2 hover:bg-neutral-700 rounded-lg">
                                {{ day }}
                                <span v-if="selectedDay === day">✔</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="space-y-3">
            <div v-for="hour in hourlyForecast" :key="hour.time"
                class="flex justify-between items-center bg-neutral-700/40 rounded-xl px-4 py-2">
                <div class="flex justify-between items-center space-x-2">
                    <img :src="hour.icon" class="w-10" />
                    <span>{{ hour.time }}</span>
                </div>

                <span>{{ hour.temperature }}°</span>
            </div>
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
</style>
