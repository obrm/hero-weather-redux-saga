import { takeLatest, call, put, all, select, fork } from 'redux-saga/effects'

import {
  FAVORITE_ADD_ITEM_START,
  FAVORITE_ITEMS_WEATHER_START,
  FAVORITE_REMOVE_ITEM_START,
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
import { setToStorage } from '../helper/localStorage'

const getFavoritesWeatherItems = (state) =>
  state.favorites.favoritesWeatherItems

function* addToFavorites({ payload: favoriteCityName }) {
  yield put(addItemToFavoritesSuccess({ favoriteCityName }))

  const favoritesWeatherItems = yield select(getFavoritesWeatherItems)

  setToStorage('favorites', favoritesWeatherItems)
}

export function* removeFromFavorites(favoriteCityName) {
  yield put(removeItemFromFavoritesSuccess(favoriteCityName))

  const favoritesWeatherItems = yield select(getFavoritesWeatherItems)

  setToStorage('favorites', favoritesWeatherItems)
}

export function* getFavoritesItemWeather(favorite) {
  yield put(getFavoritesWeatherReset())

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
    yield put(getFavoritesWeatherError(error))
  }
}

export function* getFavoritesItemsWeather() {
  const favorites = yield select(getFavoritesWeatherItems)
  if (favorites.length > 0) {
    for (const favorite of favorites) {
      yield fork(getFavoritesItemWeather, favorite)
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
