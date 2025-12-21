<script setup>

</script>

<template>
 <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
  <!-- Left section -->
  <div class="lg:col-span-2 space-y-6">
    <!-- Main weather card -->
     <div class="rounded-2xl  p-6 flex justify-between items-center card-today">
  <div>
    <h2 class="text-2xl font-semibold">Berlin, Germany</h2>
    <p class="text-sm opacity-80">Tuesday, Aug 5</p>
  </div>

  <div class="text-7xl font-bold">20°</div>
</div>

    <!-- Stats cards -->
    <!-- Daily forecast -->
  </div>

  <!-- Right section -->
  <div class="lg:col-span-1">
    <!-- Hourly forecast -->
  </div>
</div>

</template>

<style scoped>
  .card-today {
    background-image: url('../assets/images/bg-today-large.svg');
    background-size: cover;
    background-position: center;
    line-height: 32px;
    height: 250px;
  }
  .text-italic {
    font-family: "DmSans", sans-serif;
  }
</style>
