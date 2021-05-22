import { call, all, take } from 'redux-saga/effects'

import { DARK_MODE_TOGGLE } from './darkModeConstants'
import { darkModeToggle } from './darkModeActions'

export function* toggleMode(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
  yield darkModeToggle(theme)
}

export function* toggleDarkMode() {
  while (true) {
    const { payload } = yield take(DARK_MODE_TOGGLE)
    yield call(toggleMode, payload)
  }
}

export function* darkModeSagas() {
  yield all([call(toggleDarkMode)])
}
