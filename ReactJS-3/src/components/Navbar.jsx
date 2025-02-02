import React, { Component } from 'react';
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar
} from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img
              alt="brand"
              src="https://i.pinimg.com/474x/8e/5f/a6/8e5fa6f223b0329493d4b218c0e6c3f9.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: '100%' }}
            />{' '}

            Sid's Shooping App</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    )
  }
}

export default Navbar; 