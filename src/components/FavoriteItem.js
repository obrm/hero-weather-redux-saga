import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FavoriteItem = ({ cityName }) => {
  return (
    <Card className='img-fluid' style={{ width: '15rem', height: '160px' }}>
      <Link to='/home' className='favorite-text'>
        <Card.Img
          src='/img/weather-images/sunny-day.jpg'
          alt='Card image'
          style={{ width: '100%' }}
        />
        <Card.ImgOverlay className='text-center'>
          <h3>{cityName}</h3>
          <p className='card-text'>25 &deg;</p>
        </Card.ImgOverlay>{' '}
      </Link>
    </Card>
  )
}

export default FavoriteItem
