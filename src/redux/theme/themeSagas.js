import { call, all } from 'redux-saga/effects'

import { darkModeToggle } from './themeActions'

export function* toggleTheme(theme) {
  yield darkModeToggle()
}

export function* toggleThemeStart() {
  while (true) {
    yield call(toggleTheme)
  }
}

export function* themeSagas() {
  yield all([call(toggleThemeStart)])
}
