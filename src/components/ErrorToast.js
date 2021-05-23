import { useState } from 'react'
import PropTypes from 'prop-types'
import { Toast } from 'react-bootstrap'

const ErrorToast = ({ error }) => {
  const [show, setShow] = useState(!!error)

  const hideToast = () => setShow(false)

  return (
    <Toast show={show} onClose={hideToast}>
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>Error</strong>
      </Toast.Header>
      <Toast.Body>
        <p>
          Ouch! We are sorry, but it seems that there is a {error} on our side.
        </p>
        <p>We are working on it and hope that it will be solved soon.</p>
        <p>Please try again later.</p>
      </Toast.Body>
    </Toast>
  )
}

ErrorToast.propTypes = {
  error: PropTypes.any,
}

export default ErrorToast
