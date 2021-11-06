import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../../assets/img/Trinipicks-Logo.png";
import { Link } from "react-router-dom";

function Topbar2() {
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
        <Nav>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar2;
