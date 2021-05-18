import { takeLatest, delay, call, put, all } from 'redux-saga/effects'

import { AUTO_COMPLETE_REQUEST } from './autoCompleteConstants.js'
import { getAutoCompleteResultsFromAPI } from './autoCompleteAPI'
import {
  getAutoCompleteResultsSuccess,
  getAutoCompleteResultsFail,
} from './autoCompleteActions'

export function* getAutoCompleteResults({ payload: query }) {
  yield delay(1000)

  try {
    const { data } = yield call(getAutoCompleteResultsFromAPI, query)

    yield put(getAutoCompleteResultsSuccess(data))
  } catch (error) {
    yield put(getAutoCompleteResultsFail(error))
  }
}

export function* getAutoCompleteResultsRequest() {
  yield takeLatest(AUTO_COMPLETE_REQUEST, getAutoCompleteResults)
}

export function* autoCompleteSagas() {
  yield all([call(getAutoCompleteResultsRequest)])
}
