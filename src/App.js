import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-md-center mt-5'>
            <Col md='auto'>
              <Route path='/favorites' component={FavoritesPage} exact />
              <Route path='/home' component={HomePage} exact />
              <Route path='/' component={HomePage} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  )
}

export default App
