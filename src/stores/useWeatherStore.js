//useWeatherStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { fetchWeather } from "@/services/apiService";

export const useWeatherStore = defineStore("weather", () => {
  // State
  const weatherData = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const currentLocation = ref({
    name: "Berlin, Germany",
    lat: 52.52,
    lon: 13.41
  });

  // Getters
  const currentWeather = computed(() => weatherData.value?.current_weather);
  const hourlyWeather = computed(() => weatherData.value?.hourly);
  const dailyWeather = computed(() => weatherData.value?.daily);

  // Actions
  const fetchWeatherData = async (lat, lon, locationName = null) => {
    try {
      isLoading.value = true;
      error.value = null;

      const data = await fetchWeather(lat, lon);
      weatherData.value = data;

      if (locationName) {
        currentLocation.value = {
          name: locationName,
          lat,
          lon
        };
      }

    } catch (err) {
      error.value = err.message || "Failed to fetch weather data";
      console.error("Weather fetch error:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const searchLocation = async (locationName) => {
    try {
      isLoading.value = true;
      error.value = null;

      // Use Nominatim API for geocoding (OpenStreetMap)
      const geocodeResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&limit=1`
      );

      if (!geocodeResponse.ok) {
        throw new Error("Geocoding service unavailable");
      }

      const geocodeData = await geocodeResponse.json();

      if (geocodeData.length === 0) {
        throw new Error("Search not found");
      }

      const location = geocodeData[0];
      const lat = parseFloat(location.lat);
      const lon = parseFloat(location.lon);
      // Store the full location name including country
      const displayName = location.display_name;

      await fetchWeatherData(lat, lon, displayName);

    } catch (err) {
      error.value = err.message;
      console.error("Location search error:", err);
    } finally {
      isLoading.value = false;
    }
  };

  // Initialize with default location
  const initializeWeather = () => {
    fetchWeatherData(currentLocation.value.lat, currentLocation.value.lon);
  };

  return {
    // State
    weatherData,
    isLoading,
    error,
    currentLocation,

    // Getters
    currentWeather,
    hourlyWeather,
    dailyWeather,

    // Actions
    fetchWeatherData,
    searchLocation,
    initializeWeather
  };
});