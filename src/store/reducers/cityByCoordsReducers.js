import {
  GET_CITY_BY_COORDS_REQUEST,
  GET_CITY_BY_COORDS_SUCCESS,
  GET_CITY_BY_COORDS_FAIL,
} from '../constants/cityByCoordsConstants.js'

export const cityByCoordsReducer = (
  state = { cityFromCoords: null },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case GET_CITY_BY_COORDS_REQUEST:
      return { ...state, loading: true }
    case GET_CITY_BY_COORDS_SUCCESS:
      return { loading: false, cityFromCoords: payload }
    case GET_CITY_BY_COORDS_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}
