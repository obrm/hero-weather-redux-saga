import { axiosGet } from '../helper/axios'
import { CURRENT_WEATHER_URL, FIVE_DAYS_URL } from './weatherConstants'

export const getCurrentWeather = (location) => {
  return axiosGet(
    `${CURRENT_WEATHER_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
  )
}

export const getFiveDaysForecast = (location) => {
  return axiosGet(
    `${FIVE_DAYS_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&metric=true`
  )
}
