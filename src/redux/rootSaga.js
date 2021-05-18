import { all, call } from 'redux-saga/effects'

import { weatherSagas } from './weather/weatherSagas'
import { favoritesSagas } from './favorites/favoritesSagas'

export default function* rootSaga() {
  yield all([call(weatherSagas), call(favoritesSagas)])
}
