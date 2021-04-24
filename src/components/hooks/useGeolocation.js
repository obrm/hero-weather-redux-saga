import React, { useState, useEffect } from 'react'

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { latitude: '', longitude: '' },
  })

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    })
  }

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      })
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return location
}

export default useGeolocation
