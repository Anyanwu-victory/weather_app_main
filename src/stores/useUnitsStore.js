import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUnitsStore = defineStore("units", () => {
  const unitSystem = ref("metric"); // metric | imperial

  const units = computed(() => {
    if (unitSystem.value === "metric") {
      return {
        temperature: "C",
        wind: "kmh",
        precipitation: "mm",
      };
    }

    return {
      temperature: "F",
      wind: "mph",
      precipitation: "in",
    };
  });

  const toggleUnitSystem = () => {
    unitSystem.value =
      unitSystem.value === "metric" ? "imperial" : "metric";
  };

  return {
    unitSystem,
    units,
    toggleUnitSystem,
  };
});
