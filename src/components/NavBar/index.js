import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ProgressiveImage from 'react-progressive-image-loading';
import PropTypes from 'prop-types';
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
  active: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
}));

const NavBar = ({ active }) => {
  const classes = useStyles();

  const isActive = (slug) => {
    return slug === active ? `${classes.active}` : '';
  };

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
          <Link
            id="home"
            className={`${classes.navRightItem} ${isActive('Home')}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${classes.navRightItem} ${isActive('Projects')}`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`${classes.navRightItem} ${isActive('Blog')}`}
            to="/blog"
          >
            Blog!
          </Link>
          <Link
            className={`${classes.navRightItem} ${isActive('Resume')}`}
            to="/resume"
          >
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

NavBar.propTypes = {
  active: PropTypes.string.isRequired,
};
export default NavBar;
