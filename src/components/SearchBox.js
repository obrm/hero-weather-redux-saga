import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  return (
    // <Form onSubmit={submitHandler} inline>
    <Form inline>
      <div className='input-group search-md search-sm'>
        <input
          type='text'
          name='q'
          // value={keyword}
          // onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Location...'
          className='mr-sm-2 ml-sm-3 form-control'
        />
      </div>
      <Button type='submit' variant='dark' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
