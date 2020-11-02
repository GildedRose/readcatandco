import React from 'react';
// Removed { NavDropdown } as it was not being used and generated errors
import { Nav, Navbar } from 'react-bootstrap';
import Auth from '../../utils/auth';
// import Cart from '../Cart';



const NavigationBar = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">The Red Cat & Co</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/ShopAll">Shop All</NavDropdown.Item>
            </NavDropdown> */}
          <Nav.Link href="/ShopAll">Shop</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          {Auth.loggedIn() ? (
            <>
              <Nav.Link href="/profile">My Account</Nav.Link>
              <Nav.Link href="/" onClick={logout}>
                Logout
            </Nav.Link>
            </>
          ) : (
              <>
                <Nav.Link href="/LogIn">Log In</Nav.Link>
                <Nav.Link href="/CreateAccount">Create an Account</Nav.Link>

              </>
            )}
            <Nav.Link href= "Cart" >Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;
