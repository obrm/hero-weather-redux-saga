import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
} from './weatherConstants'
import { errorHandler } from '../helper/errorHandler'

export const getWeatherRequest = (weatherParams) => ({
  type: WEATHER_REQUEST,
  payload: weatherParams,
})
export const getWeatherSuccess = (weather) => ({
  type: WEATHER_SUCCESS,
  payload: weather,
})
export const getWeatherFailure = (error) => ({
  type: WEATHER_FAIL,
  payload: errorHandler(error),
})
