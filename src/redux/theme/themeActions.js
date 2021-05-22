import { THEME_TOGGLE } from './themeConstants'

export const darkModeToggle = (theme) => ({
  type: THEME_TOGGLE,
  payload: theme,
})
