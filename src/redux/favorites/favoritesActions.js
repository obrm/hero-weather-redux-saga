import {
  FAVORITE_ADD_ITEM_START,
  FAVORITE_ADD_ITEM_SUCCESS,
  FAVORITE_REMOVE_ITEM_START,
  FAVORITE_REMOVE_ITEM_SUCCESS,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
  FAVORITE_ITEMS_WEATHER_START,
} from './favoritesConstants'

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

export const removeItemFromFavoritesSuccess = ({
  payload: favoriteCityName,
}) => ({
  type: FAVORITE_REMOVE_ITEM_SUCCESS,
  payload: favoriteCityName,
})

export const getFavoritesWeatherReset = () => ({
  type: FAVORITE_ITEMS_WEATHER_RESET,
})

export const getFavoritesWeatherStart = () => ({
  type: FAVORITE_ITEMS_WEATHER_START,
})

export const getFavoritesWeatherRequest = () => ({
  type: FAVORITE_ITEMS_WEATHER_REQUEST,
})

export const getFavoritesWeatherSuccess = (cityWeatherData) => ({
  type: FAVORITE_ITEMS_WEATHER_SUCCESS,
  payload: cityWeatherData,
})

export const getFavoritesWeatherError = (error) => ({
  type: FAVORITE_ITEMS_WEATHER_FAIL,
  payload: errorHandler(error),
})
