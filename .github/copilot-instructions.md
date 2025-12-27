# Copilot Instructions for Weather App

## Architecture Overview
- **Components**: API client for weather data, UI components (weather card, forecast list, error page), location handler.
- **Data Flow**: User location search → Geocode via Nominatim API → Fetch weather from Open-Meteo API → Parse and display data or show error page on failure.
- **State Management**: Pinia stores for weather data (`useWeatherStore`) and units (`useUnitsStore`).
- **Error Handling**: Use reactive state (`hasError`, `errorMessage`) to conditionally render ErrorPage component or "Search not found" in WeatherContent.

## Critical Workflows
- **Build**: Run `npm run build` to compile and bundle the app.
- **Tests**: Execute `npm test` to run unit tests with Jest.
- **Debugging**: Use browser dev tools for UI issues; console.log for API responses.

## Project Conventions
- **File Structure**: `src/components/` for UI, `src/services/` for API calls, `src/stores/` for Pinia state management, `src/utils/` for helpers.
- **Naming**: PascalCase for components (e.g., `WeatherCard.vue`), kebab-case for files (e.g., `weather-card.vue`).
- **State Management**: Use Vue Composition API with Pinia stores for global state; `ref()` for local component state.
- **Error Handling**: Use try/catch in async functions, emit events for user actions like retry.
- **Search**: Allow free-form city search using Nominatim geocoding API; show "Search in progress..." with spinner during search; display city suggestions as user types.
- **Date Format**: Use shortened format "Wednesday, Dec 24, 2025" for current date display.
- **Location Display**: Show city with country (e.g., "Abuja, Nigeria") in weather content.

## Integration Points
- **Weather API**: Open-Meteo API with parameters for current weather, hourly (temperature, weathercode, windspeed, humidity), and daily forecasts.
- **Geocoding API**: Nominatim (OpenStreetMap) for converting city names to coordinates and suggestions.
- **Location**: Free-form search allowing any city worldwide; coordinates stored in weather store; suggestions shown as user types.
- **Units**: Metric/Imperial toggle via `useUnitsStore` affecting temperature, wind, and precipitation units in all components.
- **Weather Icons**: Map WMO weather codes to appropriate icons in DailyForecast.
- **Stats Cards**: Display real weather data (temperature, humidity, wind speed, precipitation) with dynamic units.
- **Example API Calls**:
  ```javascript
  // Geocoding with suggestions
  const geocodeResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}&limit=5&addressdetails=1`)

  // Weather with humidity
  const params = { hourly: "temperature_2m,weathercode,windspeed_10m,relativehumidity_2m" }
  const data = await fetchWeather(lat, lon);
  ```

## Best Practices
- Handle API errors gracefully with ErrorPage component showing retry button.
- Show "Search not found" error directly in WeatherContent when geocoding fails.
- Display "Search in progress..." with spinner in dropdown during search.
- Show city suggestions with debounced input (300ms) as user types.
- Format dates using `toLocaleDateString` with short month format.
- Display location as "City, Country" format.
- Use real weather data in all components with proper unit conversion.
- Map weather codes to appropriate icons for visual weather representation.
- Cache weather data for 10 minutes to reduce API calls.
- Ensure responsive design for mobile weather viewing.
- Use Vue's `v-if`/`v-else-if`/`v-else` for conditional rendering based on loading/error/data states.