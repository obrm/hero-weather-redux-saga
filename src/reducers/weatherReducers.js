import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
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
