import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import headshot from '../../assets/headshot.png';
import data from '../../assets/data.json';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid blue',
  },

  aboutHeadshot: {
    height: '60vh',
    [theme.breakpoints.down('1160')]: {
      height: '50vw',
      margin: 'auto 0',
    },
    [theme.breakpoints.down('620')]: {
      display: 'none',
    },
  },

  aboutContentTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    width: '100%',
  },

  aboutHeadingRightBorder: {
    width: '100%',
    borderBottom: '5px solid  #378199',
    marginBottom: '1vh',
  },

  aboutContentText: {
    fontSize: '2vh',
    width: '70%',
    lineHeight: '3vh',
    [theme.breakpoints.down('1415')]: {
      width: '100%',
    },
    [theme.breakpoints.down('1000')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('620')]: {
      textAlign: 'center',
    },
  },

  headingTitle: {
    [theme.breakpoints.down('620')]: {
      margin: '0 auto',
    },
  },
}));

// breaks at 825px
const AboutSegment = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutContainer}>
      <Box display="flex" flexDirection="row" width="80%">
        <img className={classes.aboutHeadshot} alt="headshot" src={headshot} />
        <Box className={classes.aboutContentTextContainer}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box className={classes.headingTitle} m={0}>
              <h1>About</h1>
            </Box>
            <div className={classes.aboutHeadingRightBorder} />
          </Box>
          <Box className={classes.aboutContentText}>
            <NewlineText text={data.about} />
            <p>
              If you&apos;re a student looking for my teaching website, you can
              access that{' '}
              <a href="teach.spanishpe.ar" title="Shrey's Class">
                here
              </a>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const NewlineText = ({ text }) => {
  return text.split('\n').map((str) => <p>{str}</p>);
};
export default AboutSegment;
