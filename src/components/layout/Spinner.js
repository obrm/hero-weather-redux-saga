import spinner from '../../img/spinner.gif'

const Spinner = () => (
  <>
    <img
      src={spinner}
      style={{ width: '170px', margin: '10rem auto 0', display: 'block' }}
      alt='Loading...'
    />
  </>
)

export default Spinner
