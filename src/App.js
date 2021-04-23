import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header'
import SearchBox from './components/SearchBox'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-md-center mt-5'>
            <Col md='auto'>
              <SearchBox />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  )
}

export default App
