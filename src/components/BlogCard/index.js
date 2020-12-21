import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 20,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontStyle: 'italic',
    textDecoration: 'bold',
  },
  subject: {
    color: 'rgb(100, 21, 255)',
    letterSpacing: '0.1em',
    marginBottom: '10px',
    '&::after': {
      content: '""',
      display: 'block',
      width: '2rem',
      borderBottom: '2px solid rgb(100, 21, 255)',
    },
  },
});

const BlogCard = ({ image, subject, date, title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Box>
          <Typography
            className={classes.subject}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {subject}
          </Typography>
        </Box>
        <Typography
          className={classes.subtitle}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {date}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default BlogCard;
