import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './theme/GlobalStyle'
import { lightTheme, darkTheme } from './theme/theme'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  const darkMode = useSelector((state) => state.darkMode)
  const { theme } = darkMode

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-md-center mt-5'>
            <Col md='auto'>
              <Switch>
                <Route path='/favorites' component={FavoritesPage} exact />
                <Route path='/home' component={HomePage} exact />
                <Route path='/' component={HomePage} exact />
                <Route path='/*' component={PageNotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
