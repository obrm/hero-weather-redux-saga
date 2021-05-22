import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/theme'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  const themeToggle = useSelector((state) => state.themeToggle)
  const { theme } = themeToggle

  return (
    <ThemeProvider theme={theme ? Theme.lightTheme : Theme.darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-center mx-auto mt-5'>
            <Col md='auto'>
              <Switch>
                <Route path='/favorites' component={FavoritesPage} exact />
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
