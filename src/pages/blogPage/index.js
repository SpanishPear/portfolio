import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavBar, BlogCard } from '../../components';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1095px',
    margin: '0 auto',
  },
  gridRow: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingLeft: '8%',
  },
  gridItem: {
    height: '550px',
    flexBasis: '20%',
    '-ms-flex': 'auto',
    width: '259px',
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('1333')]: {
      flexBasis: '33.33%',
    },
    [theme.breakpoints.down('1073')]: {
      flexBasis: '33.33%',
    },
    [theme.breakpoints.down('815')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.down('555')]: {
      flexBasis: '100%',
    },
  },
}));

const BlogPage = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar active="Blog" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <div className={classes.container}>
          <div className={classes.gridRow}>
            <BlogCard
              className={classes.gridItem}
              subject="HOME COMPUTING"
              date="APRIL 24TH 2020"
              title="Making a prettier terminal"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <BlogCard
              className={classes.gridItem}
              subject="DUMMY DATA"
              date="DUMMY DATA"
              title="OH MY SOME DUMMY DATA"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <BlogCard
              className={classes.gridItem}
              subject="DUMMY DATA"
              date="DUMMY DATA"
              title="OH MY SOME DUMMY DATA"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <BlogCard
              className={classes.gridItem}
              subject="DUMMY DATA"
              date="DUMMY DATA"
              title="OH MY SOME DUMMY DATA"
              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default BlogPage;
