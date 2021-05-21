import React from 'react'
import { StyledLink } from './styled/StyledUtils'

const PageNotFound = () => {
  return (
    <>
      <div style={{ height: '200px' }}></div>
      <div className='text-center'>
        <h1 className='x-large text-danger'>
          <i className='fas fa-exclamation-triangle'></i>&nbsp;&nbsp; 404 Not
          Found
        </h1>
        <h4>We are sorry, but the page you are looking for does not exist</h4>
        <StyledLink to='/'>Back To Home Page</StyledLink>
      </div>
    </>
  )
}

export default PageNotFound
