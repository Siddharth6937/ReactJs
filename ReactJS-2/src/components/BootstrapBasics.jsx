import React from "react";
import {Button, Container,Navbar,Nav} from 'react-bootstrap';


class BootstrapBasics extends React.Component {
    render() {
        return (
            <>


<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

                <div>Bootstrap</div>
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="primary">Primary</Button>{' '}
            </>
        )
    }
}

export default BootstrapBasics;