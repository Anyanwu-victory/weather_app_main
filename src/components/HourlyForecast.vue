<script setup>

const hours = [
  { time: "3 PM", temperature: 20,},
  { time: "4 PM", temperature: 21,},
  { time: "12 PM", temperature: 24, },
  { time: "11 AM", temperature: 25, },
  { time: "5 PM", temperature: 21,},
  { time: "6 PM", temperature: 25,},
  { time: "8 PM", temperature: 24,},
];
</script>

<template>
  
  
    <!-- Right section -->

      <!-- Hourly forecast -->
      <div class="rounded-2xl bg-neutral-800 p-4 space-y-4">
        <div class="flex justify-between items-center">
          <h3 class="font-semibold">Hourly forecast</h3>

          <select class="bg-neutral-700 rounded-lg px-2 py-2 text-sm">
            <option>Tuesday</option>
          </select>
        </div>

        <div class="space-y-3">
          <div v-for="hour in hours" :key="hour"
            class="flex justify-between items-center bg-neutral-700/40 rounded-xl px-4 py-3">
            <div class=""></div>
            <span>{{ hour.time }}</span>
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
