import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    height: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '85vh',
    // border: '1px solid red',
  },
  landingTextTitle: {
    fontFamily: 'Roboto, sans-serif',
    letterSpacing: '0.1em',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: '#4f4f4f',
    width: '55%',
    fontSize: '10vw',
    /* pretty sure I should use em/rem */
    marginBottom: 0,
    margin: '0 auto',
    [theme.breakpoints.down('700')]: {
      fontSize: '13vw',
    },
  },
  landingTextSubtitle: {
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: '#378199',
    fontSize: '3.5vw',
    /* pretty sure I should use em/rem */
    marginTop: 0,
    width: '55%',
    margin: '0 auto',
    [theme.breakpoints.down('700')]: {
      fontSize: '6vw',
    },
  },
  textContainer: {
    [theme.breakpoints.down('1415')]: {
      width: '100%',
    },
  },
}));

const LandingSegment = () => {
  const classes = useStyles();

  return (
    <Box className={classes.landingContainer}>
      <Box display="flex" flexDirection="column">
        <Box className={classes.textContainer}>
          <h1 className={classes.landingTextTitle}>Shrey Somaiya</h1>
          <h3 className={classes.landingTextSubtitle}>Computer Scientist</h3>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingSegment;
