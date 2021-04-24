import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        className='navbar navbar-expand-lg navbar-dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand className='mr-n4'>
            <Navbar.Brand>
              <LinkContainer to='/home'>
                <Nav.Link>
                  <h3 className='logo'>Hero Weather</h3>
                </Nav.Link>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Nav>
              <LinkContainer to='/home'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home{' '}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className='fas fa-star'></i> Favorites
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
