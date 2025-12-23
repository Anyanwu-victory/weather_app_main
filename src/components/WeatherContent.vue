<script setup>
import Sunny from '@/assets/images/icon-sunny.webp';
import StatsCards from './StatsCards.vue';
import DailyForecast from './DailyForecast.vue';
import HourlyForecast from './HourlyForecast.vue';

</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 mb-20">
    <!-- Left section -->
    <div class="lg:col-span-2 space-y-6">
      <!-- Main weather card -->
      <div class="rounded-2xl  p-6 flex justify-between items-center card-today">
        <div>
          <h2 class="text-2xl font-semibold">Berlin, Germany</h2>
          <p class="text-[16px] opacity-80 mt-2">Tuesday, Aug 5</p>
        </div>

        <div class="text-7xl font-bold text-italic flex space-x-6 justify-center items-center">
          <img :src="Sunny" alt="weather condition image" class="w-24" />
          20°
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
</style>
