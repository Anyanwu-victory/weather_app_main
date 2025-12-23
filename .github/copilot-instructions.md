# Copilot Instructions for Weather App

## Architecture Overview
- **Components**: API client for weather data, UI components (weather card, forecast list, error page), location handler.
- **Data Flow**: User location → Geocode → Fetch weather from API → Parse and display data or show error page on failure.
- **Error Handling**: Use reactive state (`hasError`, `errorMessage`) to conditionally render ErrorPage component.

## Critical Workflows
- **Build**: Run `npm run build` to compile and bundle the app.
- **Tests**: Execute `npm test` to run unit tests with Jest.
- **Debugging**: Use browser dev tools for UI issues; console.log for API responses.

## Project Conventions
- **File Structure**: `src/components/` for UI, `src/services/` for API calls, `src/utils/` for helpers.
- **Naming**: PascalCase for components (e.g., `WeatherCard.vue`), kebab-case for files (e.g., `weather-card.vue`).
- **State Management**: Use Vue Composition API with `ref()` for local state; consider Pinia for global weather data.
- **Error Handling**: Use try/catch in async functions, emit events for user actions like retry.

## Integration Points
- **Weather API**: Integrate with OpenWeatherMap (API key in `.env` as `VITE_WEATHER_API_KEY`).
- **Location**: Use `navigator.geolocation` for user position; fallback to IP-based geolocation.
- **Example API Call**:
  ```javascript
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    if (!response.ok) throw new Error('Failed to fetch weather data')
    const data = await response.json()
    // handle success
  } catch (error) {
    hasError.value = true
    errorMessage.value = error.message
  }
  ```

## Best Practices
- Handle API errors gracefully with ErrorPage component showing retry button.
- Cache weather data for 10 minutes to reduce API calls.
- Ensure responsive design for mobile weather viewing.
- Use Vue's `v-if`/`v-else` for conditional rendering based on error state.