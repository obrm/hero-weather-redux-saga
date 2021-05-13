import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col } from 'react-bootstrap'
import { debounce } from 'lodash'

import { getAutoCompleteResults } from '../redux/autoComplete/autoCompleteActions'
import { getWeather } from '../redux/weather/weatherActions'
import { AUTO_COMPLETE_RESET } from '../redux/autoComplete/autoCompleteConstants'
import { GENERAL_RESET } from '../redux/general/generalConstants'

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

  const onChangeHandler = (e) => {
    if (e.target.value === '') {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    }
    setText(e.target.value)
    debouncedDispatch(e.target.value)
  }

  const onBlurHandler = () => {
    setTimeout(() => {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    }, 100)
  }

  const onClickHandler = (location, cityName) => {
    dispatch({ type: GENERAL_RESET })
    dispatch(getWeather(location, cityName))
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
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
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
              onClick={() => onClickHandler(result.Key, result.LocalizedName)}
            >
              {result.LocalizedName}
            </Col>
          ))}
      </div>
    </div>
  )
}

export default SearchBox
