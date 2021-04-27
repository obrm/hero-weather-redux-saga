import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFavoritesWeather } from '../actions/weatherActions'
import FavoriteItem from './FavoriteItem'

const Favorites = () => {
  const dispatch = useDispatch()

  const favorites = useSelector((state) => state.favorites)
  const { favoritesItems } = favorites

  const favoritesWeather = useSelector((state) => state.favoritesWeather)
  const { favoritesWeatherItems } = favoritesWeather

  useEffect(() => {
    dispatch(getFavoritesWeather())
  }, [dispatch])

  return (
    <div>
      <h2 className='text-center mb-5'>Favorites</h2>
      <div className='favorites-grid'>
        {favoritesItems &&
          favoritesItems.map((fav) => <FavoriteItem cityName={fav.cityName} />)}
      </div>
    </div>
  )
}

export default Favorites
