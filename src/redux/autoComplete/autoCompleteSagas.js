import { call, put, all, throttle } from 'redux-saga/effects'

import { AUTO_COMPLETE_REQUEST } from './autoCompleteConstants.js'
import { getAutoCompleteResultsFromAPI } from './autoCompleteAPI'
import {
  getAutoCompleteResultsSuccess,
  getAutoCompleteResultsFail,
} from './autoCompleteActions'

export function* getAutoCompleteResults({ payload: query }) {
  try {
    const { data } = yield call(getAutoCompleteResultsFromAPI, query)

    yield put(getAutoCompleteResultsSuccess(data))
  } catch (error) {
    yield put(getAutoCompleteResultsFail(error))
  }
}

export function* getAutoCompleteResultsRequest() {
  yield throttle('1000', AUTO_COMPLETE_REQUEST, getAutoCompleteResults)
}

export function* autoCompleteSagas() {
  yield all([call(getAutoCompleteResultsRequest)])
}
