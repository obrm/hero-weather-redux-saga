import { call, all, take } from 'redux-saga/effects'

import { THEME_TOGGLE } from './themeConstants'
import { darkModeToggle } from './themeActions'

export function* toggleTheme(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
  yield darkModeToggle(theme)
}

export function* toggleThemeStart() {
  while (true) {
    const { payload } = yield take(THEME_TOGGLE)
    yield call(toggleTheme, payload)
  }
}

export function* themeSagas() {
  yield all([call(toggleThemeStart)])
}
