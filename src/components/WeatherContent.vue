<script setup>
import Sunny from '@/assets/images/icon-sunny.webp';
import StatsCards from './StatsCards.vue';
import DailyForecast from './DailyForecast.vue';
import HourlyForecast from './HourlyForecast.vue';

</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 mb-20">
    <!-- Left section -->
    <div class="lg:col-span-2 space-y-6">
      <!-- Main weather card -->
      <div class="rounded-2xl  p-6 flex flex-col justify-between items-center card-today md:flex-row text-center">
        <div class="pt-3">
          <h2 class="text-2xl font-semibold">Berlin, Germany</h2>
          <p class="text-[16px] opacity-80 mt-2 md:pl-[2px] text-start">Tuesday, Aug 5, 2025</p>
        </div>

        <div class="text-7xl font-bold text-italic flex space-x-8 justify-center items-center">
          <img :src="Sunny" alt="weather condition image" class="w-[99px] md:w-24" loading="lazy" />
          <span> 20° </span>
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
