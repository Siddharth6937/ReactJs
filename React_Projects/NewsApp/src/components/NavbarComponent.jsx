import { Container, Nav, Navbar } from 'react-bootstrap';


const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand >News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >About us</Nav.Link>
                        <Nav.Link >Contact us</Nav.Link>
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