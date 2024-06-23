import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PhotoLogo from '../assets/logo1.png'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg="dark">
      <Container>

        <Navbar.Brand href="#home">
          <img
            style={{ borderRadius: "100px" }}
            alt=""
            src={PhotoLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to='/contact' >Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/signup'>Sign Up</Nav.Link>
            <Nav.Link as={NavLink} to=''> Login </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;