import { takeLatest, call, put, all, select } from 'redux-saga/effects'

// import axios from 'axios'
import {
  FAVORITE_ADD_ITEM_START,
  FAVORITE_REMOVE_ITEM_START,
  // FAVORITE_ITEMS_WEATHER_REQUEST,
  // FAVORITE_ITEMS_WEATHER_SUCCESS,
  // FAVORITE_ITEMS_WEATHER_FAIL,
  // FAVORITE_ITEMS_WEATHER_RESET,
} from './favoritesConstants'
// import { CURRENT_WEATHER_URL } from '../weather/weatherConstants'
// import { getCityByName } from '../helper/getCityByName'
// import { errorHandler } from '../helper/errorHandler'
import {
  addItemToFavoritesSuccess,
  removeItemFromFavoritesSuccess,
} from './favoritesActions'

const getFavoritesWeatherItems = (state) => {
  return state.favorites.favoritesWeatherItems
}

function* addToFavorites({ payload: favoriteCityName }) {
  yield put(addItemToFavoritesSuccess({ favoriteCityName }))

  const favoritesWeatherItems = yield select(getFavoritesWeatherItems)

  localStorage.setItem('favorites', JSON.stringify(favoritesWeatherItems))
}

export function* removeFromFavorites(favoriteCityName) {
  yield put(removeItemFromFavoritesSuccess(favoriteCityName))

  const favoritesWeatherItems = yield select(getFavoritesWeatherItems)

  localStorage.setItem('favorites', JSON.stringify(favoritesWeatherItems))
}

export function* addToFavoritesStart() {
  yield takeLatest(FAVORITE_ADD_ITEM_START, addToFavorites)
}

export function* removeFromFavoritesStart() {
  yield takeLatest(FAVORITE_REMOVE_ITEM_START, removeFromFavorites)
}

export function* favoritesSagas() {
  yield all([call(addToFavoritesStart), call(removeFromFavoritesStart)])
}
