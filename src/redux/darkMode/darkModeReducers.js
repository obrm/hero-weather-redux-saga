import { DARK_MODE_TOGGLE } from './darkModeConstants'

export const darkModeReducer = (state = { theme: false }, action) => {
  const { type, payload } = action

  switch (type) {
    case DARK_MODE_TOGGLE:
      return { theme: payload }
    default:
      return state
  }
}
