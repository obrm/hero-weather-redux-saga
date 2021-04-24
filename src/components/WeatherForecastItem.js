import { Card } from 'react-bootstrap'

const WeatherForecastItem = () => {
  return (
    <Card className='img-fluid card-forecast'>
      <Card.Img
        src='/img/weather-images/sunny-day.jpg'
        alt='Card image'
        style={{ width: '100%' }}
      />
      <Card.ImgOverlay className='text-center'>
        <h4 className='card-title'>Sunday</h4>
        <p className='card-text'>25 &deg;</p>
      </Card.ImgOverlay>
    </Card>
  )
}

export default WeatherForecastItem
