import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

import { getAutoCompleteResultsRequest } from '../redux/autoComplete/autoCompleteActions'
import { AUTO_COMPLETE_RESET } from '../redux/autoComplete/autoCompleteConstants'
import SearchResult from './SearchResult'
import {
  SearchBoxDiv,
  SearchResultsDiv,
  SearchBoxInput,
  SearchDiv,
} from './styles/components.styles'

const SearchBox = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const theme = useSelector((state) => state.themeToggle.theme)

  const results = useSelector((state) => state.autoComplete.results)

  const onChangeHandler = (e) => {
    if (e.target.value === '') {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    } else {
      setText(e.target.value)
      dispatch(getAutoCompleteResultsRequest(e.target.value))
    }
  }

  const onBlurHandler = () => {
    setTimeout(() => {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    }, 300)
  }

  return (
    <SearchBoxDiv>
      <Form inline>
        <SearchDiv className='input-group'>
          <SearchBoxInput
            theme={theme}
            type='search'
            name='q'
            value={text}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            placeholder='Search Location...'
            className='mr-sm-2 ml-sm-3 form-control'
          />
        </SearchDiv>
      </Form>
      <SearchResultsDiv>
        {results &&
          results.map((result) => {
            return (
              <SearchResult key={result.Key} {...result} setText={setText} />
            )
          })}
      </SearchResultsDiv>
    </SearchBoxDiv>
  )
}

export default SearchBox
