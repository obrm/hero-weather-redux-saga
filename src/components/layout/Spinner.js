import spinner from '../../img/spinner.gif'

const Spinner = ({ margin }) => (
  <>
    <img
      src={spinner}
      style={{ width: '170px', margin, display: 'block' }}
      alt='Loading...'
    />
  </>
)

Spinner.defaultProps = {
  margin: '10rem auto 0',
}

export default Spinner
