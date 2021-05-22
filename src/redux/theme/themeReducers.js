import { THEME_TOGGLE } from './themeConstants'

export const themeReducer = (state = { theme: false }, action) => {
  const { type, payload } = action

  switch (type) {
    case THEME_TOGGLE:
      return { theme: payload }
    default:
      return state
  }
}
