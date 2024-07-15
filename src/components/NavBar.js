import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" fixed="top" expand="md"><Container>
  <Navbar.Brand>
    <img src={logo} alt='logo' height='45'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink
      exact
      to="/"
      >Home
      </NavLink>
      <NavLink
      to="/signin"
      >Sign in
      </NavLink>
      <NavLink
      to="/signup"
      >Sign up
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar