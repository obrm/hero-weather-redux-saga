import { takeLatest, call, put, all, select } from 'redux-saga/effects'

import {
  FAVORITE_ADD_ITEM_START,
  FAVORITE_REMOVE_ITEM_START,
  FAVORITE_ITEMS_WEATHER_START,
} from './favoritesConstants'
import { getCityByName } from '../helper/getCityByName'
import { getFavoritesWeather } from './favoritesAPI'
import {
  addItemToFavoritesSuccess,
  removeItemFromFavoritesSuccess,
  getFavoritesWeatherReset,
  getFavoritesWeatherRequest,
  getFavoritesWeatherSuccess,
  getFavoritesWeatherError,
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

export function* getFavoritesItemsWeather() {
  yield put(getFavoritesWeatherReset())

  const favorites = yield select(getFavoritesWeatherItems)

  for (const favorite of favorites) {
    try {
      yield put(getFavoritesWeatherRequest())

      const key = yield call(getCityByName, favorite.favoriteCityName)

      const { data } = yield call(getFavoritesWeather, key)

      yield put(
        getFavoritesWeatherSuccess({
          favoriteCityName: favorite.favoriteCityName,
          weather: data[0],
          key,
        })
      )
    } catch (error) {
      put(getFavoritesWeatherError(error))
    }
  }
}

export function* addToFavoritesStart() {
  yield takeLatest(FAVORITE_ADD_ITEM_START, addToFavorites)
}

export function* removeFromFavoritesStart() {
  yield takeLatest(FAVORITE_REMOVE_ITEM_START, removeFromFavorites)
}

export function* getFavoritesItemsWeatherStart() {
  yield takeLatest(FAVORITE_ITEMS_WEATHER_START, getFavoritesItemsWeather)
}

export function* favoritesSagas() {
  yield all([
    call(addToFavoritesStart),
    call(removeFromFavoritesStart),
    call(getFavoritesItemsWeatherStart),
  ])
}
