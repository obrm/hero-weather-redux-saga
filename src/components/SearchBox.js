import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col } from 'react-bootstrap'
import { debounce } from 'lodash'

import { getAutoCompleteResults } from '../Redux/actions/autoCompleteActions'
import {
  getCurrentWeather,
  getFiveDaysWeather,
} from '../Redux/actions/weatherActions'
import { AUTO_COMPLETE_RESET } from '../Redux/constants/autoCompleteConstants'
import { FAVORITE_RESET_ITEM } from '../Redux/constants/favoritesConstants'
import {
  CURRENT_WEATHER_RESET,
  FIVE_DAYS_WEATHER_RESET,
} from '../Redux/constants/weatherConstants'

const SearchBox = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const autoComplete = useSelector((state) => state.autoComplete)
  const { results } = autoComplete

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(getAutoCompleteResults(value))
    }, 1000),
    []
  )

  const onChangeHandler = (text) => {
    setText(text)
    debouncedDispatch(text)
  }

  const onSubmitHandler = ({ location, cityName }) => {
    dispatch({ type: CURRENT_WEATHER_RESET })
    dispatch({ type: FIVE_DAYS_WEATHER_RESET })
    dispatch({ type: FAVORITE_RESET_ITEM })
    dispatch(getCurrentWeather(location, cityName))
    dispatch(getFiveDaysWeather(location))
    dispatch({ type: AUTO_COMPLETE_RESET })
    setText('')
  }

  return (
    <div className='search-box'>
      <Form inline>
        <div className='input-group search-md search-sm'>
          <input
            type='search'
            name='q'
            value={text}
            onChange={(e) => {
              if (e.target.value === '') {
                dispatch({ type: AUTO_COMPLETE_RESET })
                setText('')
              }
              onChangeHandler(e.target.value)
            }}
            onBlur={(e) => {
              setTimeout(() => {
                dispatch({ type: AUTO_COMPLETE_RESET })
                setText('')
              }, 100)
            }}
            placeholder='Search Location...'
            className='mr-sm-2 ml-sm-3 form-control'
          />
        </div>
      </Form>
      <div className='search-results'>
        {results &&
          results.map((result, i) => (
            <Col
              key={i}
              className='suggestion'
              onClick={(e) => {
                onSubmitHandler({
                  location: result.Key,
                  cityName: result.LocalizedName,
                })
              }}
            >
              {result.LocalizedName}
            </Col>
          ))}
      </div>
    </div>
  )
}

export default SearchBox
