import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';



export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="../Home">The Red Cat & Co</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Shop" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/ShopAll">Shop All</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        <Nav.Link href="/LogIn">Log In</Nav.Link>
        <Nav.Link href="/CreateAccount">Create Account</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)