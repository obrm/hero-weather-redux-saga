import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from '../constants/favoritesConstants'

export const addToFavorites =
  (favoriteCityName) => async (dispatch, getState) => {
    dispatch({
      type: FAVORITE_ADD_ITEM,
      payload: { favoriteCityName },
    })

    localStorage.setItem(
      'favorites',
      JSON.stringify(getState().favorites.favoritesItems)
    )
  }

export const removeFromFavorites =
  (favoriteCityName) => (dispatch, getState) => {
    dispatch({
      type: FAVORITE_REMOVE_ITEM,
      payload: favoriteCityName,
    })

    localStorage.setItem(
      'favorites',
      JSON.stringify(getState().favorites.favoritesItems)
    )
  }
