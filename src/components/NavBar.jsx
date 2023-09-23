import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/book">Reserva</Nav.Link>
                        <Nav.Link as={Link} to="/menu">Carta</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/about">Sobre Nosotros</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/branches">Sucursales</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/rules">Reglamento</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
