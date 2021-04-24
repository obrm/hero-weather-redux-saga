import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header'
import CityWeather from './components/CityWeather'
import Favorites from './components/Favorites'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-md-center mt-5'>
            <Col md='auto'>
              <Route path='/favorites' component={Favorites} exact />
              <Route path='/home' component={CityWeather} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  )
}

export default App
