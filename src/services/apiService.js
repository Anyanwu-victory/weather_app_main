import { useUnitsStore } from "@/stores/useUnitsStore";

export async function fetchWeather(lat, lon) {
  const unitsStore = useUnitsStore();

  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current_weather: true,
    hourly: "temperature_2m,weathercode,windspeed_10m,relativehumidity_2m",
    daily: "temperature_2m_max,temperature_2m_min,weathercode",
    temperature_unit:
      unitsStore.unitSystem === "metric" ? "celsius" : "fahrenheit",
    windspeed_unit:
      unitsStore.unitSystem === "metric" ? "kmh" : "mph",
    precipitation_unit:
      unitsStore.unitSystem === "metric" ? "mm" : "inch",
    timezone: "auto",
  });

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`
  );

  if (!res.ok) throw new Error("Weather fetch failed");

  return await res.json();
}
