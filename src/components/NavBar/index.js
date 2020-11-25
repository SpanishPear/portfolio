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

/*

    header [ id "header" ]
        [ div [ class "nav-container" ]
            [ div [ class "nav-item-right-container" ]
                [ a [ id "home", class "nav-right-item", href "/" ] [ text "Home" ]
                , a [ id "about-button", class "nav-right-item",  href "/"] [ text "About" ]
                , a [ class "nav-right-item", href "/projects" ] [ text "Projects." ]
                , a [ class "nav-right-item", href "/blog" ] [ text "Blog." ]
                , a [ class "nav-right-item", href "/resume" ] [ text "Resume." ]
                ]
            , a [] [ img [ onClick (ScrollTo "about-headshot"), class "nav-right-item logo", src "./src/assets/images/logo.png" ] [] ]
            ]
        ]



*/
