import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 16,
  },
  subtitle:{
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}));


const Education = () => {
  const classes = useStyles();

  return (
    <div>
    <CardContent>
      <Typography className={classes.title} gutterBottom>
        FULLSTACK SOFTWARE DEVELOPMENT IMMERSIVE
      </Typography>
      <Typography variant='body2' color='secondary' component="h2">
         Flatiron School, New York, NY, 2019
      </Typography>
    </CardContent>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          ECONOMICS BA
        </Typography>
        <Typography variant='body2' color='secondary' component="h2">
           Michigan State University, East Lansing, MI, 2013 - 2017
        </Typography>
      </CardContent>
    </div>
  )
}

export default Education;
