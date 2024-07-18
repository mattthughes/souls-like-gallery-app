import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/UserCurrentContext';
import styles from '../styles/NavBar.module.css'
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const admin = (
    <>
    <NavLink className={styles.NavLink}
    activeClassName={styles.Active}
     to="/games/create">
      <i class="fa-solid fa-gamepad"></i>Add Game
    </NavLink>
    </>
    
  )

  const loggedInIcons = <>
  <NavLink className={styles.NavLink} to="/trending">
  <i class="fa-solid fa-fire"></i>Trending
    </NavLink>
    <NavLink className={styles.NavLink} to="/liked">
    <i class="fa-solid fa-thumbs-up"></i>Liked Posts
    </NavLink>
    <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
      <i className="fas fa-sign-out-alt"></i>Sign out
    </NavLink>
  </>;

  
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in

      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  )

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    ><Container>
      <Navbar.Brand>
        <img src={logo} alt='logo' height='45' />
      </Navbar.Brand>
      <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
          <NavLink
            exact
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/"
          >
            <i className="fas fa-home"></i>Home
          </NavLink>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/gallery"
          >
            <i class="fa-solid fa-photo-film"></i>Gallery
          </NavLink>
          { currentUser?.username === "admin" ? admin : <div></div> }
          {currentUser ? loggedInIcons : loggedOutIcons}
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar