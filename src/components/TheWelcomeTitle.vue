<script setup>
import { ref, computed } from "vue";
import WeatherContent from "./WeatherContent.vue";

const search = ref("");
const isOpen = ref(false);

const locations = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Benin City",
  "Enugu",
  "Onitsha",
  "Owerri",
  "Asaba",
  "Aba",
];

const filteredLocations = computed(() => {
  if (!search.value) return [];
  return locations.filter((city) =>
    city.toLowerCase().includes(search.value.toLowerCase())
  );
});

const selectLocation = (city) => {
  search.value = city;
  isOpen.value = false;
};
</script>

<template>
  <!-- Welcome text -->
  <div class="justify-center flex items-center">
    <span>
      <h1 class="text-[55px] font-bold py-9 md:text-[50px] text-center">How's the sky looking today?</h1>
    </span>
  </div>
  <!-- Welcome text -->

  <!-- Search input -->
  <div class="flex flex-col md:flex-row justify-center items-center
            gap-4 md:gap-6 mt-4 w-full max-w-2xl mx-auto">

    <!-- From Uiverse.io by LightAndy1 -->
    <div class="group bg-neutral-800">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
          </path>
        </g>
      </svg>
      <!-- Inpput field with dropdown -->
      <input v-model="search" class="input" type="search" placeholder="Search for a place..." @focus="isOpen = true"
        @input="isOpen = true" />

      <!-- Dropdown -->
      <div v-if="isOpen && filteredLocations.length" class="absolute top-full mt-2 w-full
         bg-neutral-800 border border-neutral-700
         rounded-xl shadow-xl z-50">
        <ul>
          <li v-for="city in filteredLocations" :key="city">
            <button @click="selectLocation(city)" class="w-full text-left px-4 py-2
               hover:bg-neutral-700 text-white">
              {{ city }}
            </button>
          </li>
        </ul>
      </div>
    </div>

   
    <button
  class="w-full md:w-auto
         px-6 rounded-xl bg-blue-500
         font-semibold hover:text-blue-500
         hover:bg-white btn"
>
  Search
</button>

   
  </div>


  <WeatherContent />

</template>

<style scoped>
/* From Uiverse.io by LightAndy1 */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 420px;
  width: 100%;
  border-radius: 12px;
}

.input {
  width: 100%;
  height: 50px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  outline: none;
  background-color: rgb(39, 37, 65);
  color: #ffffff;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #807c7c;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 226, 183, 0.4);
  box-shadow: 0 0 0 4px rgb(234 226 183 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 21px;
  height: 21px;
}

.btn {
  cursor: pointer;
  height: 50px;
  text-align: center;
}

h1 {
  line-height: 70px;
}
</style>
