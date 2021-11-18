import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Logo from "../assets/img/Trinipicks-Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="boxShadow"
    >
      <Container>
        <Navbar>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#how-it-works" className="menu-item">
              How it works
            </Nav.Link>
            <Nav.Link href="#pricing" className="menu-item">
              Pricing
            </Nav.Link>
            <Nav.Link href="#about" className="menu-item">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="menu-item">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Link to="/login">
              <Button className="login text-white">Login</Button>
            </Link>

            <Link to="/signup">
              <Button className="login text-white">Sign Up</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
