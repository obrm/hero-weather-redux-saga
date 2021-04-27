import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from '../constants/favoritesConstants'

export const addToFavorites = (cityName) => async (dispatch, getState) => {
  dispatch({
    type: FAVORITE_ADD_ITEM,
    payload: { cityName },
  })

  localStorage.setItem(
    'favorites',
    JSON.stringify(getState().favorites.favoritesItems)
  )
}

export const removeFromFavorites = (cityName) => (dispatch, getState) => {
  dispatch({
    type: FAVORITE_REMOVE_ITEM,
    payload: cityName,
  })

  localStorage.setItem(
    'favorites',
    JSON.stringify(getState().favorites.favoritesItems)
  )
}
