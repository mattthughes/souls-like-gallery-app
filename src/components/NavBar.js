import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/UserCurrentContext';
import styles from '../styles/NavBar.module.css'
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import Avatar from './Avatar';


import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // Using a post request to logout and then setting the logged in user to null
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {

    }
  };

  // Only the admin user is able to view the add game button
  const admin = (
    <>
      <NavLink className={styles.NavLink}
        activeClassName={styles.Active}
        to="/game/create">
        <i className="fa-solid fa-gamepad"></i>Add Game
      </NavLink>
    </>

  )

  // If the user is logged in these icons will be shown meaning a user can not add posts like other posts if they are not logged in
  const loggedInIcons = <>

    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
    <i className="far fa-plus-square"></i>Create Post
    </NavLink>

    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
    <i className="fa-solid fa-thumbs-up"></i>Liked
    </NavLink>

    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/trending">
    <i className="fa-solid fa-fire"></i>Trending
    </NavLink>

    <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
      <i className="fas fa-sign-out-alt"></i>Sign out
    </NavLink>

    <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
  </>;

  // If the user is not logged in they were will be shown the following icons which will give them a rough idea of what the application is about
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
        <Navbar.Brand className={styles.Headings}>
          <NavLink to="/">
            <img src={logo} alt='logo' height='45' />Souls Like Gallery
          </NavLink>
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
              <i className="fa-solid fa-photo-film"></i>Gallery
            </NavLink>

            {/* if the admin user is trying to access the admin page return the admin icons otherwise return an empty div */}
            {currentUser?.username === "admin" ? admin : <div></div>}
            {/* If the current user is logged in show the logged in icons otherwise show the logged out icons */}
            {currentUser ? loggedInIcons : loggedOutIcons}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar