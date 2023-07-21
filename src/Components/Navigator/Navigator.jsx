
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigator() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         
          <Nav.Link href="/AllUsers">Users List</Nav.Link>
          <Nav.Link href="/productsList">Products List</Nav.Link>
          <Nav.Link href="/ordersList">Orders List</Nav.Link>
          <Nav.Link href="/Signin">Login</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigator;
