import { DARK_MODE_TOGGLE } from './darkModeConstants'

export const darkModeToggle = (theme) => ({
  type: DARK_MODE_TOGGLE,
  payload: theme,
})
