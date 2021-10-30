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
            <Link to="#how-it-works">
              <Nav>How it works</Nav>
            </Link>
            <Link to="#pricing">
              <Nav>Pricing</Nav>
            </Link>
            <Link to="#about">
              <Nav>About</Nav>
            </Link>
            <Link to="#contact">
              <Nav>Contact</Nav>
            </Link>
          </Nav>
          <Nav>
            <Link to="/login">
              <Nav>Login</Nav>
            </Link>
          </Nav>
          <Nav>
            <Link to="/signup" className="text-white">
              <Button className="signUp" variant="primary">
                Sign up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
