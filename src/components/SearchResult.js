import { useDispatch } from 'react-redux'

import { getWeatherRequest } from '../redux/weather/weatherActions'
import { GENERAL_RESET } from '../redux/general/generalConstants'
import { Suggestions } from './styles/components.styles'

const SearchResult = ({ Key, LocalizedName, setText }) => {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch({ type: GENERAL_RESET })
    dispatch(
      getWeatherRequest({
        location: Key,
        cityName: LocalizedName,
      })
    )
    setText('')
  }

  return <Suggestions onClick={onClickHandler}>{LocalizedName}</Suggestions>
}

export default SearchResult
