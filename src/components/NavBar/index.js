import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <header id="header">
      <div className="nav-container">
        <div className="nav-item-right-container">
          <Link id="home" class="nav-right-item" to="/">
            Home
          </Link>
          {/* this will need to be replaced */}
          <Link id="about-button" class="nav-right-item" to="/">
            About
          </Link>
          <Link class="nav-right-item" to="/projects">
            Projects
          </Link>
          <Link class="nav-right-item" to="/blog">
            Blog
          </Link>
          <Link class="nav-right-item" to="/resume">
            Resume
          </Link>
        </div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default NavBar;
