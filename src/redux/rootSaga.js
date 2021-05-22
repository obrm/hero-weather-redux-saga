import { all, call } from 'redux-saga/effects'

import { weatherSagas } from './weather/weatherSagas'
import { favoritesSagas } from './favorites/favoritesSagas'
import { autoCompleteSagas } from './autoComplete/autoCompleteSagas'
import { themeSagas } from './theme/themeSagas'

export default function* rootSaga() {
  yield all([
    call(weatherSagas),
    call(favoritesSagas),
    call(autoCompleteSagas),
    call(themeSagas),
  ])
}
