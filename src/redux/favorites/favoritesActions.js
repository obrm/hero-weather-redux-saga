import axios from 'axios'
import {
  FAVORITE_ADD_ITEM_START,
  FAVORITE_ADD_ITEM_SUCCESS,
  FAVORITE_REMOVE_ITEM_START,
  FAVORITE_REMOVE_ITEM_SUCCESS,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from './favoritesConstants'
import { CURRENT_WEATHER_URL } from '../weather/weatherConstants'
import { getCityByName } from '../helper/getCityByName'
import { errorHandler } from '../helper/errorHandler'

export const addItemToFavoritesStart = (favoriteCityName) => ({
  type: FAVORITE_ADD_ITEM_START,
  payload: favoriteCityName,
})

export const addItemToFavoritesSuccess = (favoriteCityName) => ({
  type: FAVORITE_ADD_ITEM_SUCCESS,
  payload: favoriteCityName,
})

export const removeItemFromFavoritesStart = (favoriteCityName) => ({
  type: FAVORITE_REMOVE_ITEM_START,
  payload: favoriteCityName,
})

export const removeItemFromFavoritesSuccess = (favoriteCityName) => ({
  type: FAVORITE_REMOVE_ITEM_SUCCESS,
  payload: favoriteCityName,
})

export const getFavoritesWeather = () => async (dispatch, getState) => {
  dispatch({ type: FAVORITE_ITEMS_WEATHER_RESET })

  const favorites = getState().favorites.favoritesWeatherItems

  favorites.forEach(async (favorite) => {
    try {
      dispatch({ type: FAVORITE_ITEMS_WEATHER_REQUEST })

      const key = await getCityByName(favorite.favoriteCityName)

      const { data } = await axios.get(
        `${CURRENT_WEATHER_URL}${key}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
      )

      dispatch({
        type: FAVORITE_ITEMS_WEATHER_SUCCESS,
        payload: {
          favoriteCityName: favorite.favoriteCityName,
          weather: data[0],
          key,
        },
      })
    } catch (error) {
      dispatch({
        type: FAVORITE_ITEMS_WEATHER_FAIL,
        payload: errorHandler(error),
      })
    }
  })
}
