import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  CURRENT_WEATHER_RESET,
  FIVE_DAYS_WEATHER_REQUEST,
  FIVE_DAYS_WEATHER_SUCCESS,
  FIVE_DAYS_WEATHER_FAIL,
  FIVE_DAYS_WEATHER_RESET,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from '../constants/weatherConstants'

export const currentWeatherReducer = (
  state = { weather: null, currentWeatherCityName: null },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case CURRENT_WEATHER_REQUEST:
      return { ...state, loading: true }
    case CURRENT_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: payload.data,
        currentWeatherCityName: payload.currentWeatherCityName,
      }
    case CURRENT_WEATHER_FAIL:
      return { loading: false, error: payload }
    case CURRENT_WEATHER_RESET:
      return { ...state, weather: null, currentWeatherCityName: null }
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
    case FIVE_DAYS_WEATHER_RESET:
      return { forecast: null }
    default:
      return state
  }
}

export const favoritesWeatherReducer = (
  state = { favoritesWeatherItems: [] },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FAVORITE_ITEMS_WEATHER_REQUEST:
      return { ...state, loading: true }
    case FAVORITE_ITEMS_WEATHER_SUCCESS:
      return {
        loading: false,
        favoritesWeatherItems: [...state.favoritesWeatherItems, payload],
      }
    case FAVORITE_ITEMS_WEATHER_FAIL:
      return { loading: false, error: payload }
    case FAVORITE_ITEMS_WEATHER_RESET:
      return { ...state, favoritesWeatherItems: [] }
    default:
      return state
  }
}
