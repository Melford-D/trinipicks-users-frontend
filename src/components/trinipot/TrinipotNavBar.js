import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function TrinipotNavBar() {
  return (
    <Navbar className="boxShadow trinipot-bg">
      <Container>
        <Nav className="me-auto">
          <Link to="/selection">
            <Nav>Play</Nav>
          </Link>
          <Link to="/leaderboard">
            <Nav>Leaderboard</Nav>
          </Link>
          <Link to="/how-to-play">
            <Nav>How to Play</Nav>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TrinipotNavBar;
