import axios from 'axios'

import { CURRENT_WEATHER_URL } from '../weather/weatherConstants'

export const getFavoritesWeather = (key) =>
  axios.get(
    `${CURRENT_WEATHER_URL}${key}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
  )
