import { useDispatch } from 'react-redux'
import { Col } from 'react-bootstrap'

import { getWeatherRequest } from '../redux/weather/weatherActions'
import { GENERAL_RESET } from '../redux/general/generalConstants'

const SearchResult = ({ result, setText }) => {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch({ type: GENERAL_RESET })
    dispatch(
      getWeatherRequest({
        location: result.Key,
        cityName: result.LocalizedName,
      })
    )
    setText('')
  }

  return (
    <Col className='suggestion' onClick={onClickHandler}>
      {result.LocalizedName}
    </Col>
  )
}

export default SearchResult
