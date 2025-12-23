<template>
     <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:gap-3">
        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Feels Like</p>
          <p class="text-2xl xl:text-3xl  font-normal">18°</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Humidity</p>
          <p class="text-2xl xl:text-3xl font-normal">46%</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Wind</p>
          <p class="text-2xl xl:text-3xl font-normal">14 km/h</p>
        </BaseCard>

        <BaseCard class="md:px-6 space-y-4">
          <p class=" text-neutral-300">Precipitation</p>
          <p class="text-2xl xl:text-3xl font-normal">0 mm</p>
        </BaseCard>
      </div>

</template>

<script setup>
    import BaseCard from './ui/BaseCard.vue';
</script>

<style scoped>

</style>