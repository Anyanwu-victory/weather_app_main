import Sunny from '@/assets/images/icon-sunny.webp'
import Rain from '@/assets/images/icon-rain.webp'
import Fog from '@/assets/images/icon-fog.webp'
import Overcast from '@/assets/images/icon-overcast.webp'
import Snow from '@/assets/images/icon-snow.webp'
import Storm from '@/assets/images/icon-storm.webp'
import Cloudy from '@/assets/images/icon-partly-cloudy.webp'

export function getWeatherIcon(code) {
  if (code === 0) return Sunny

  if ([1].includes(code)) return Sunny
  if ([2].includes(code)) return Cloudy
  if ([3].includes(code)) return Overcast

  if ([45, 48].includes(code)) return Fog

  if ([51, 53, 55].includes(code)) return Rain
  if ([56, 57].includes(code)) return Snow

  if ([61, 63, 65].includes(code)) return Rain
  if ([66, 67].includes(code)) return Snow

  if ([71, 73, 75, 77].includes(code)) return Snow

  if ([80, 81, 82].includes(code)) return Rain
  if ([85, 86].includes(code)) return Snow

  if ([95, 96, 99].includes(code)) return Storm

  return Sunny
}
