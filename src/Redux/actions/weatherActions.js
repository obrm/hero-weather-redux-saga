import axios from 'axios'
import KEY from '../../key'
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

export const getCurrentWeather = (
  location = '215854',
  cityName = 'Tel Aviv'
) => async (dispatch) => {
  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${KEY}`
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

export const getFiveDaysWeather = (location = '215854') => async (dispatch) => {
  try {
    dispatch({ type: FIVE_DAYS_WEATHER_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${KEY}&metric=true`
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
        `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${KEY}`
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
