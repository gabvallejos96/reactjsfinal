import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Navbar fixed="top"  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logoHeader' src="https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png" alt="razerlogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/home"}>Home</Link>

            </Nav.Link>
            
            <Nav.Link>
              <Link to={"/cat"}>Products</Link>
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/cat/men's clothing"}>Men's clothing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/cat/electronics"}>Electronics</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/cat/women's clothing"}>Women's clothing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to={"/cat/jewelery"}>Jewelery</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#cart"> <CartWidget/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBar