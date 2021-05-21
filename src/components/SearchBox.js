import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

import { getAutoCompleteResultsRequest } from '../redux/autoComplete/autoCompleteActions'
import { AUTO_COMPLETE_RESET } from '../redux/autoComplete/autoCompleteConstants'
import SearchResult from './SearchResult'
import {
  StyledSearchBoxDiv,
  StyledSearchResultsDiv,
  StyledSearchBoxInput,
  StyledSearchDiv,
} from './styled/Styled'

const SearchBox = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const darkMode = useSelector((state) => state.darkMode)
  const { theme } = darkMode

  const autoComplete = useSelector((state) => state.autoComplete)
  const { results } = autoComplete

  const onChangeHandler = (e) => {
    if (e.target.value === '') {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    }
    setText(e.target.value)
    dispatch(getAutoCompleteResultsRequest(e.target.value))
  }

  const onBlurHandler = () => {
    setTimeout(() => {
      dispatch({ type: AUTO_COMPLETE_RESET })
      setText('')
    }, 300)
  }

  return (
    <StyledSearchBoxDiv>
      <Form inline>
        <StyledSearchDiv className='input-group'>
          <StyledSearchBoxInput
            theme={theme}
            type='search'
            name='q'
            value={text}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            placeholder='Search Location...'
            className='mr-sm-2 ml-sm-3 form-control'
          />
        </StyledSearchDiv>
      </Form>
      <StyledSearchResultsDiv>
        {results &&
          results.map((result) => {
            return (
              <SearchResult key={result.Key} {...result} setText={setText} />
            )
          })}
      </StyledSearchResultsDiv>
    </StyledSearchBoxDiv>
  )
}

export default SearchBox
