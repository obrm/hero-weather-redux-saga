import { setToStorage } from '../helper/localStorage'
import { THEME_TOGGLE } from './themeConstants'

export const themeReducer = (state = { theme: false }, action) => {
  const { type } = action

  switch (type) {
    case THEME_TOGGLE:
      setToStorage('theme', !state.theme)
      return { theme: !state.theme }
    default:
      return state
  }
}
