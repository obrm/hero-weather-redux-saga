import { takeEvery, call, all } from 'redux-saga/effects'

import { darkModeToggle } from './themeActions'

export function* toggleTheme() {
  yield darkModeToggle()
}

export function* toggleThemeStart() {
  yield takeEvery(toggleTheme)
}

export function* themeSagas() {
  yield all([call(toggleThemeStart)])
}
