import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from '../constants/favoritesConstants'

export const favoritesReducer = (
  state = {
    favoritesItems: [],
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FAVORITE_ADD_ITEM:
      return {
        ...state,
        favoritesItems: [...state.favoritesItems, payload],
      }
    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoritesItems: state.favoritesItems.filter(
          (item) => item.cityName !== payload
        ),
      }
    default:
      return state
  }
}
