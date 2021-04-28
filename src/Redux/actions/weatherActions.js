import axios from 'axios'
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  FIVE_DAYS_WEATHER_REQUEST,
  FIVE_DAYS_WEATHER_SUCCESS,
  FIVE_DAYS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from '../constants/weatherConstants'
import { getCityByName } from '../helper/getCityByName'

let accuWeatherKey
let defaultLocation
let defaultCityName

if (process.env.NODE_ENV !== 'production') {
  accuWeatherKey = process.env.REACT_APP_ACCUWEATHER_KEY
  defaultLocation = process.env.REACT_APP_DEFAULT_LOCATION
  defaultCityName = process.env.REACT_APP_DEFAULT_CITY_NAME
} else {
  accuWeatherKey = process.env.ACCUWEATHER_KEY
  defaultLocation = process.env.DEFAULT_LOCATION
  defaultCityName = process.env.DEFAULT_CITY_NAME
}

export const getCurrentWeather = (
  location = defaultLocation,
  cityName = defaultCityName
) => async (dispatch) => {
  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST })
    debugger
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${accuWeatherKey}`
    )

    dispatch({
      type: CURRENT_WEATHER_SUCCESS,
      payload: { data: data[0], cityName },
    })
  } catch (error) {
    dispatch({
      type: CURRENT_WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getFiveDaysWeather = (location = defaultLocation) => async (
  dispatch
) => {
  try {
    dispatch({ type: FIVE_DAYS_WEATHER_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${accuWeatherKey}&metric=true`
    )

    dispatch({
      type: FIVE_DAYS_WEATHER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FIVE_DAYS_WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getFavoritesWeather = () => async (dispatch, getState) => {
  dispatch({ type: FAVORITE_ITEMS_WEATHER_RESET })

  const favorites = getState().favorites.favoritesItems

  if (!favorites || favorites.length === 0)
    throw new Error('There are no favorites')

  favorites.forEach(async (favorite) => {
    try {
      dispatch({ type: FAVORITE_ITEMS_WEATHER_REQUEST })

      const key = await getCityByName(favorite.cityName)

      const { data } = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${accuWeatherKey}`
      )

      dispatch({
        type: FAVORITE_ITEMS_WEATHER_SUCCESS,
        payload: { cityName: favorite.cityName, weather: data[0], key },
      })
    } catch (error) {
      dispatch({
        type: FAVORITE_ITEMS_WEATHER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  })
}
