import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand >
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{borderRadius:"100%"}}
                    />{' '}
                    News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About us</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>Contact us</Nav.Link>
                        <Nav.Link as={NavLink} to='/count'>Count</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >Sign up</Nav.Link>
                        <Nav.Link eventKey={2}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;