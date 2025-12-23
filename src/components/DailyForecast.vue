<script setup>
import Sunny from '@/assets/images/icon-sunny.webp';
import Rain from '@/assets/images/icon-rain.webp';
import Fog from '@/assets/images/icon-fog.webp';
import Overcast from '@/assets/images/icon-overcast.webp';
import Snow from '@/assets/images/icon-snow.webp';
import Storm from '@/assets/images/icon-storm.webp';
import Cloudy from '@/assets/images/icon-partly-cloudy.webp';
import BaseCard from './ui/BaseCard.vue';

const days = [
  { name: "Tue", high: 20, low: 14, icon: Rain},
  { name: "Wed", high: 21, low: 15, icon: Fog},
  { name: "Thu", high: 24, low: 14, icon: Cloudy },
  { name: "Fri", high: 25, low: 13, icon: Storm },
  { name: "Sat", high: 21, low: 15, icon: Overcast},
  { name: "Sun", high: 25, low: 16, icon: Snow},
  { name: "Mon", high: 24, low: 15, icon: Sunny},
];
</script>

<template>
<!-- Daily forecast -->
 <h1 class="font-bold">Daily Forecast</h1>

      <div class="grid grid-cols-4 sm:grid-cols-7 gap-4 text-center">
        <BaseCard v-for="day in days" :key="day.name" class="md:px-0">
          <p class="text-sm">{{ day.name }}</p>
          <img :src="day.icon" class="mx-auto w-6 md:w-14" />
          <div class="text-sm flex  justify-around align-bottom px-0">
            <p>{{ day.high }}°</p>  <p>{{ day.low }}°</p>
        </div>
        </BaseCard>
      </div>
</template>

<style scoped>

</style>