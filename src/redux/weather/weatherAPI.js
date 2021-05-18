import axios from 'axios'

import { CURRENT_WEATHER_URL, FIVE_DAYS_URL } from './weatherConstants'

export const getCurrentWeather = (location) =>
  axios.get(
    `${CURRENT_WEATHER_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
  )

export const getFiveDaysForecast = (location) =>
  axios.get(
    `${FIVE_DAYS_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&metric=true`
  )
