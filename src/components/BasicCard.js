import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 250
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BasicCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.project.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.project.description}
        </Typography>
        <br/>
        <Typography variant="body2" component="p" style={{
          fontFamily: 'Roboto Mono, monospace',
          fontSize: 10,
        }}>
          {props.project.tech.map(t => `${t} `)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
