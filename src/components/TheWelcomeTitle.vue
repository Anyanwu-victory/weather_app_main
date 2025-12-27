<script setup>
import { ref, computed } from "vue";
import { useWeatherStore } from "@/stores/useWeatherStore";

const weatherStore = useWeatherStore();
const search = ref("");
const isOpen = ref(false);
const suggestions = ref([]);
const isLoadingSuggestions = ref(false);

const filteredSuggestions = computed(() => {
  if (!search.value || search.value.length < 2) return [];
  return suggestions.value.slice(0, 5); // Limit to 5 suggestions
});

// Fetch city suggestions from Nominatim
const fetchSuggestions = async (query) => {
  if (query.length < 2) {
    suggestions.value = [];
    return;
  }

  try {
    isLoadingSuggestions.value = true;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
    );

    if (response.ok) {
      const data = await response.json();
      suggestions.value = data.map(item => ({
        name: item.display_name,
        shortName: item.display_name.split(',')[0],
        lat: item.lat,
        lon: item.lon
      }));
    }
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    suggestions.value = [];
  } finally {
    isLoadingSuggestions.value = false;
  }
};

// Debounced search suggestions
let searchTimeout;
const handleInput = () => {
  isOpen.value = true;
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    fetchSuggestions(search.value);
  }, 300); // 300ms debounce
};

const selectLocation = (city) => {
  search.value = city.shortName;
  isOpen.value = false;
  suggestions.value = [];
};

const handleSearch = async () => {
  if (search.value.trim()) {
    isOpen.value = true; // Show dropdown with loading state
    await weatherStore.searchLocation(search.value.trim());
    isOpen.value = false; // Close dropdown after search
    suggestions.value = [];
  }
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
      <input v-model="search" @input="handleInput" class="input" type="search" placeholder="Search for a place..." @focus="isOpen = true" />

      <!-- Dropdown -->
      <div v-if="isOpen" class="absolute top-full mt-2 w-full
         bg-neutral-800 border border-neutral-700
         rounded-xl shadow-xl z-50">
        <!-- Loading state -->
        <div v-if="weatherStore.isLoading" class="px-4 py-3 text-white flex items-center space-x-2">
          <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Search in progress...</span>
        </div>

        <!-- Suggestions -->
        <div v-else-if="filteredSuggestions.length > 0">
          <ul>
            <li v-for="suggestion in filteredSuggestions" :key="suggestion.name">
              <button @click="selectLocation(suggestion)" class="w-full text-left px-4 py-2
                 hover:bg-neutral-700 text-white text-sm">
                <div class="font-medium">{{ suggestion.shortName }}</div>
                <div class="text-gray-400 text-xs truncate">{{ suggestion.name }}</div>
              </button>
            </li>
          </ul>
        </div>

        <!-- No suggestions -->
        <div v-else-if="search.length >= 2 && !isLoadingSuggestions" class="px-4 py-3 text-gray-400 text-sm">
          No cities found
        </div>
      </div>
    </div>

   
    <button
  @click="handleSearch"
  class="w-full md:w-auto
         px-6 rounded-xl bg-blue-500
         font-semibold hover:text-blue-500
         hover:bg-white btn"
  :disabled="weatherStore.isLoading"
>
  Search
</button>

   
  </div>


</template>

<style scoped>
/* From Uiverse.io by LightAndy1 */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  /* max-width: 420px; */
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
