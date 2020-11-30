import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ProgressiveImage from 'react-progressive-image-loading';
import logo from '../../assets/logo.svg';
import logoMini from '../../assets/logo-mini.svg';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '10%',
    minHeight: '9vh',
  },
  logo: {
    width: '3vw',
    height: '7vh',
    minHeight: '30px',
    minWidth: '30px',
    paddingLeft: '20px !important',
    cursor: 'pointer',
    [theme.breakpoints.down('635')]: {
      display: 'none',
    },
  },
  navRightItem: {
    textDecoration: 'none',
    fontWeight: 500,
    paddingLeft: '40px',
    color: '#4f4f4f',
    fontSize: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
    [theme.breakpoints.down('635')]: {
      // fontSize: '1rem',
      fontSize: '1.2rem',
      paddingLeft: '20px',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin="0 5vw"
        paddingBottom="1vh"
      >
        <div className="nav-item-right-container">
          <Link id="home" className={classes.navRightItem} to="/">
            Home
          </Link>
          {/* this will need to be replaced */}
          <Link id="about-button" className={classes.navRightItem} to="/">
            About
          </Link>
          <Link className={classes.navRightItem} to="/projects">
            Projects
          </Link>
          <Link className={classes.navRightItem} to="/blog">
            Blog!
          </Link>
          <Link className={classes.navRightItem} to="/resume">
            Resume
          </Link>
        </div>
        <ProgressiveImage
          preview={logoMini}
          src={logo}
          render={(src) => (
            <img loading="lazy" className={classes.logo} src={src} alt="logo" />
          )}
        />
      </Box>
    </header>
  );
};

export default NavBar;
