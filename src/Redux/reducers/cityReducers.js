import {
  GET_CITY_BY_COORDS_REQUEST,
  GET_CITY_BY_COORDS_SUCCESS,
  GET_CITY_BY_COORDS_FAIL,
} from '../constants/cityConstants'

export const cityByCoordsReducer = (state = { city: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CITY_BY_COORDS_REQUEST:
      return { ...state, loading: true }
    case GET_CITY_BY_COORDS_SUCCESS:
      return { loading: false, city: payload }
    case GET_CITY_BY_COORDS_FAIL:
      return { loading: false, error: payload }
    default:
      return state
  }
}
