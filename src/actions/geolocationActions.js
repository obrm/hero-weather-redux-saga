import {
  GEOLOCATION_SUCCESS,
  GEOLOCATION_FAIL,
} from '../constants/geolocationConstants'

export const getGeolocation = () => async (dispatch) => {
  const successCallback = (position) => {
    const { coords } = position
    return coords
  }

  const errorCallback = (error) => {
    const { code } = error
    return code
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
  }

  const result = navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    options
  )

  if (typeof result !== 'number') {
    dispatch({
      type: GEOLOCATION_SUCCESS,
      payload: result,
    })
  } else {
    dispatch({
      type: GEOLOCATION_FAIL,
      payload: { latitude: 32.0759177, longitude: 34.7839602 },
    })
  }
}
