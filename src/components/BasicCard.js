import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '../assets/github.png';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 275
  },
  footer: {
    paddingBottom: 12,
  },
});

const BasicCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item container direction='row' justify='flex-end'>
          <CardActions>
            <IconButton href={props.project.url} target='new'>
              <img src={GithubIcon} style={{width:25}} alt='Github'/>
            </IconButton>
          </CardActions>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Grid item>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.project.title}
              </Typography>
              <Typography variant="body2" component="p">
                {props.project.description}
              </Typography>
              <br/>
            </CardContent>
            <CardContent className={classes.footer}>
              <Typography variant="body2" component="p" style={{
                fontFamily: 'Roboto Mono, monospace',
                fontSize: 11,
              }}>
                {props.project.tech.map(t => `${t} `)}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default BasicCard;
