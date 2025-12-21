<script setup>
import Navbar from './components/Navbar.vue';
import TheWelcomeTitle from './components/TheWelcomeTitle.vue';
import WeatherContent from './components/WeatherContent.vue';
</script>

<template>
  <main class="justify-center px-6 items-center md:px-10 text-white lg:px-40 overflow-y">

    <Navbar/>
    <TheWelcomeTitle/>

    <WeatherContent/>
  </main>


</template>

<style scoped>

</style>
