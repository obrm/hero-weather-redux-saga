import FavoriteItem from './FavoriteItem'

const Favorites = () => {
  return (
    <div>
      <h2 className='text-center mb-5'>Favorites</h2>
      <div className='favorites-grid'>
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
      </div>
    </div>
  )
}

export default Favorites
