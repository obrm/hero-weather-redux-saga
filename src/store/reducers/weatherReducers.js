import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  WEATHER_RESET,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from '../constants/weatherConstants'

export const weatherReducer = (
  state = {
    currentWeather: null,
    currentWeatherCityName: null,
    fiveDaysForecast: null,
  },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case WEATHER_REQUEST:
      return { ...state, loading: true }
    case WEATHER_SUCCESS:
      return {
        loading: false,
        currentWeather: payload.currentWeatherData,
        currentWeatherCityName: payload.currentWeatherCityName,
        fiveDaysForecast: payload.fiveDaysForecast,
      }
    case WEATHER_FAIL:
      return { loading: false, error: payload }
    case WEATHER_RESET:
      return {
        currentWeather: null,
        currentWeatherCityName: null,
        fiveDaysForecast: null,
      }
    default:
      return state
  }
}

export const favoritesWeatherReducer = (
  state = { favoritesItemsWeather: [] },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FAVORITE_ITEMS_WEATHER_REQUEST:
      return { ...state, loading: true }
    case FAVORITE_ITEMS_WEATHER_SUCCESS:
      return {
        loading: false,
        favoritesItemsWeather: [...state.favoritesItemsWeather, payload],
      }
    case FAVORITE_ITEMS_WEATHER_FAIL:
      return { loading: false, error: payload }
    case FAVORITE_ITEMS_WEATHER_RESET:
      return { ...state, favoritesItemsWeather: [] }
    default:
      return state
  }
}
