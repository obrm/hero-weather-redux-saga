import { axiosGet } from '../helper/axios'
import { CURRENT_WEATHER_URL } from '../weather/weatherConstants'

export const getFavoritesWeather = (key) =>
  axiosGet(
    `${CURRENT_WEATHER_URL}${key}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
  )
