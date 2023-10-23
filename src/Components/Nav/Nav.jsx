import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import {} from "./Nav.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="Nav py-3">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">A to Z Buy</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="d-flex me-3">
                <Nav.Link>
                  <NavLink to="/">Products</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/about">About Us</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/counter">Donate</NavLink>
                </Nav.Link>
              </div>
              <div className=" d-flex  ">
                <button className="btn text-white border-2 border-white mx-1">
                  <Link to={"/login"}> Sign in</Link>
                </button>
                <button className="btn text-white border-2 border-white mx-1">
                  <Link to={"/register"}> Sign up</Link>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
