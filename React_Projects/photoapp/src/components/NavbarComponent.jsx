import { Container, Nav, Navbar } from 'react-bootstrap';
import PhotoLogo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg="dark">
      <Container>
      
        <Navbar.Brand href="#home">
        <img
        style={{borderRadius : "100px"}}
              alt=""
              src = {PhotoLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Photo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={NavLink} to='/'>Photos</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Sign Up</Nav.Link>
            <Nav.Link >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;