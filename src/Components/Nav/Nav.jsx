import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import {} from "./Nav.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="Nav">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">A to Z Buy</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/">Products</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about">About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/counter">Counter</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
