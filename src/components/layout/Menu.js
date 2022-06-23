import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Menu = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href ="/">Candidates</Nav.Link>
                            <Nav.Link href="/Signup">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Menu