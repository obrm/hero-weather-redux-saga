import { takeLatest, call, put, all } from 'redux-saga/effects'

import {
  WEATHER_REQUEST,
  DEFAULT_LOCATION,
  DEFAULT_CITY_NAME,
} from './weatherConstants'
import { getCityByCoords } from '../helper/getCityByCoords'
import { getCurrentWeather, getFiveDaysForecast } from './weatherAPI'
import { getWeatherSuccess, getWeatherFailure } from './weatherActions'

export function* getWeather({ payload: weatherParams }) {
  try {
    let { latitude, longitude, location, cityName } = weatherParams

    let cityNameFromGeolocation = ''

    if (latitude && longitude) {
      const data = yield getCityByCoords(latitude, longitude)
      location = data.Key
      cityNameFromGeolocation = data.EnglishName
    }

    if (!location) {
      location = DEFAULT_LOCATION
    }

    if (!cityName) {
      cityName = DEFAULT_CITY_NAME
    }

    const { currentWeather, fiveDaysForecast } = yield all({
      currentWeather: call(getCurrentWeather, location),
      fiveDaysForecast: call(getFiveDaysForecast, location),
    })

    yield put(
      getWeatherSuccess({
        currentWeather: currentWeather.data[0],
        currentWeatherCityName: cityNameFromGeolocation
          ? cityNameFromGeolocation
          : cityName,
        fiveDaysForecast: fiveDaysForecast.data.DailyForecasts,
      })
    )
  } catch (error) {
    yield put(getWeatherFailure(error))
  }
}

export function* getWeatherRequest() {
  yield takeLatest(WEATHER_REQUEST, getWeather)
}

export function* weatherSagas() {
  yield all([call(getWeatherRequest)])
}
