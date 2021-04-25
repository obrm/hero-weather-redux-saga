import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  FIVE_DAYS_WEATHER_REQUEST,
  FIVE_DAYS_WEATHER_SUCCESS,
  FIVE_DAYS_WEATHER_FAIL,
} from '../constants/weatherConstants'

export const currentWeatherReducer = (state = { weather: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case CURRENT_WEATHER_REQUEST:
      return { ...state, loading: true }
    case CURRENT_WEATHER_SUCCESS:
      return { loading: false, weather: payload }
    case CURRENT_WEATHER_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}

export const fiveDaysWeatherReducer = (state = { forecast: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case FIVE_DAYS_WEATHER_REQUEST:
      return { ...state, loading: true }
    case FIVE_DAYS_WEATHER_SUCCESS:
      return { loading: false, forecast: payload }
    case FIVE_DAYS_WEATHER_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}
