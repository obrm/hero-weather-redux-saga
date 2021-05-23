import React from 'react'
import { useSelector } from 'react-redux'

import FavoriteItem from './FavoriteItem'
import { FavoritesGrid } from './styles/components.styles'

const FavoriteList = () => {
  const favorites = useSelector(
    (state) => state.favorites.favoritesItemsWeather
  )

  return (
    <FavoritesGrid className='text-center'>
      {favorites.map(({ favoriteCityName, weather, key }) => (
        <FavoriteItem
          favoriteCityName={favoriteCityName}
          weather={weather}
          key={key}
          cityKey={key}
        />
      ))}
    </FavoritesGrid>
  )
}

export default FavoriteList
