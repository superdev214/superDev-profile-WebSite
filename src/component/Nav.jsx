import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGlobalVariables } from "../hooks";
import { useBetween } from 'use-between';

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);
function NavBar() {
  const {activeNavItem, setClassActive} = useSharedGlobalVariables();
  return (
    <Navbar bg="none" expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          {
            console.log(activeNavItem)
          }
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setClassActive("Home")}
              className={activeNavItem === "Home" ? "active" : "null"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              onClick={() => setClassActive("About")}
              className={activeNavItem === "About" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Resume"
              onClick={() => setClassActive("Resume")}
              className={activeNavItem === "Resume" ? "active" : ""}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Service"
              onClick={() => setClassActive("Service")}
              className={activeNavItem === "Service" ? "active" : ""}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Portfolio"
              onClick={() => setClassActive("Portfolio")}
              className={activeNavItem === "Portfolio" ? "active" : ""}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              onClick={() => setClassActive("Contact")}
              className={activeNavItem === "Contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
