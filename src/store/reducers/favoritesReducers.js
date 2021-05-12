import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
  FAVORITE_RESET_ITEM,
  FAVORITE_SHOW_ITEM,
} from '../constants/favoritesConstants'

export const favoritesReducer = (
  state = {
    favoritesWeatherItems: [],
    showCityFromFavorites: false,
    favoriteCityName: null,
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FAVORITE_ADD_ITEM:
      return {
        ...state,
        favoritesWeatherItems: [...state.favoritesWeatherItems, payload],
      }
    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoritesWeatherItems: state.favoritesWeatherItems.filter(
          (item) => item.favoriteCityName !== payload
        ),
      }
    case FAVORITE_SHOW_ITEM:
      return {
        ...state,
        showCityFromFavorites: true,
        favoriteCityName: payload,
      }
    case FAVORITE_RESET_ITEM:
      return {
        ...state,
        showCityFromFavorites: false,
        favoriteCityName: null,
      }
    default:
      return state
  }
}
