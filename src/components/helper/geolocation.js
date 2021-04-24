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

let result = navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  options
)

if (typeof result === 'number') {
  result = { latitude: 32.0759177, longitude: 34.7839602 }
}
