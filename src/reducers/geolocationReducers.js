import {
  GEOLOCATION_SUCCESS,
  GEOLOCATION_FAIL,
} from '../constants/geolocationConstants'

export const geolocationReducer = (state = { coords: {} }, action) => {
  const { type, payload } = action

  switch (type) {
    case GEOLOCATION_SUCCESS:
    case GEOLOCATION_FAIL:
      return { coords: payload }
    default:
      return state
  }
}
