import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFavoritesWeather } from '../store/actions/weatherActions'
import Spinner from '../components/layout/Spinner'
import ErrorToast from '../components/ErrorToast'
import FavoriteItem from '../components/FavoriteItem'

const FavoritesPage = () => {
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
      ) : favoritesItems.length === 0 ? (
        <h4>There are no favorites yet</h4>
      ) : (
        favoritesItems &&
        !loading &&
        favoritesWeatherItems && (
          <div className='favorites-grid text-center'>
            {favoritesWeatherItems.map((fav) => (
              <FavoriteItem
                favoriteCityName={fav.favoriteCityName}
                weather={fav.weather}
                key={fav.key}
                cityKey={fav.key}
              />
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default FavoritesPage
