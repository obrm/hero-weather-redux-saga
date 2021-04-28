import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFavoritesWeather } from '../actions/weatherActions'
import Spinner from './layout/Spinner'
import ErrorToast from './ErrorToast'
import FavoriteItem from './FavoriteItem'

const Favorites = () => {
  const dispatch = useDispatch()

  const favorites = useSelector((state) => state.favorites)
  const { favoritesItems } = favorites

  const favoritesWeather = useSelector((state) => state.favoritesWeather)
  const { loading, favoritesWeatherItems, error } = favoritesWeather

  useEffect(() => {
    dispatch(getFavoritesWeather())
  }, [dispatch])

  return (
    <div>
      <h2 className='text-center mb-5'>Favorites</h2>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorToast />
      ) : favoritesItems && !loading && favoritesWeatherItems ? (
        <div className='favorites-grid text-center'>
          {favoritesWeatherItems.map((fav) => (
            <FavoriteItem
              cityName={fav.cityName}
              weather={fav.weather}
              key={fav.key}
              cityKey={fav.key}
            />
          ))}
        </div>
      ) : (
        <h2>There are no favorites yet</h2>
      )}
    </div>
  )
}

export default Favorites
