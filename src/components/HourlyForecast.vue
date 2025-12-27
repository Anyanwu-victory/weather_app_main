<script setup>
import { computed, ref } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import { getWeatherIcon } from '@/utils/weatherIcons'

const weatherStore = useWeatherStore()

const isDayOpen = ref(false)
const selectedDay = ref(null)

/**
 * Convert date string → weekday (Monday, Tuesday, etc.)
 */
const getDayName = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
  })
}

/**
 * Group hourly forecast by day
 */
const hourlyByDay = computed(() => {
  const hourly = weatherStore.hourlyWeather
  if (!hourly) return {}

  const grouped = {}

  hourly.time.forEach((time, index) => {
    const dateObj = new Date(time)
    const hour = dateObj.getHours() // 0–23

    // ✅ Only allow 5 AM – 10 PM
    if (hour < 14 || hour > 22) return

    const date = time.split('T')[0]
    const dayName = getDayName(date)

    if (!grouped[dayName]) {
      grouped[dayName] = []
    }

    grouped[dayName].push({
      time: dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
      temperature: Math.round(hourly.temperature_2m[index]),
      icon: getWeatherIcon(hourly.weathercode[index]),
    })
  })

  return grouped
})

/**
 * Available days for dropdown
 */
const days = computed(() => Object.keys(hourlyByDay.value))

/**
 * Default to today
 */
if (!selectedDay.value && days.value.length) {
  selectedDay.value = days.value[0]
}

/**
 * Hours for selected day
 */
const hourlyForecast = computed(() => {
  return hourlyByDay.value[selectedDay.value] || []
})

const selectDay = (day) => {
  selectedDay.value = day
  isDayOpen.value = false
}
</script>
<template>
  <div class="rounded-2xl bg-neutral-800 p-4 space-y-4">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h3 class="font-semibold">Hourly Forecast</h3>

      <!-- Day dropdown -->
      <div class="relative">
        <button
          @click="isDayOpen = !isDayOpen"
          class="flex items-center gap-2 bg-neutral-700 rounded-lg px-3 py-2 text-sm"
        >
          {{ selectedDay }}
          <svg
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': isDayOpen }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 9-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown -->
        <div
          v-if="isDayOpen"
          class="absolute right-0 mt-2 w-44 rounded-xl
                 bg-neutral-800 border border-neutral-700
                 shadow-xl z-50"
        >
          <ul class="py-1 text-sm">
            <li v-for="day in days" :key="day">
              <button
                @click="selectDay(day)"
                class="flex w-full justify-between items-center
                       px-4 py-2 hover:bg-neutral-700 rounded-lg"
              >
                {{ day }}
                <span v-if="selectedDay === day">✔</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Hourly list -->
    <div class="space-y-3">
      <div
        v-for="hour in hourlyForecast"
        :key="hour.time"
        class="flex justify-between items-center
               bg-neutral-700/40 rounded-xl px-4 py-2"
      >
        <div class="flex items-center space-x-2">
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
