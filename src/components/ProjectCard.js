import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1
  },
  image: {
    position: 'relative',
    height: 255,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  descriptionBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
}));

const ProjectCard = (props) => {
  // console.log(props.project.img);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardContent>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
        >
          <Grid item>
            <ButtonBase
              focusRipple
              className={classes.image}
              focusvisibileclassname={classes.focusVisible}
              style={{width: 500}}
              href={props.project.url}
              target='new'
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage:`url(${props.project.img})`
                }}
              />
              <span className={classes.imageBackdrop} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} md={6}>
            <Typography
              gutterBottom
              variant="h4"
              align='left'
              style={{fontFamily: 'Raleway, sans-serif'}}
            >
              <b>{props.project.title}</b>
            </Typography>
            <Paper elevation={1} className={classes.descriptionBox} square>
              <Typography variant="body2" gutterBottom>
                {props.project.description}
              </Typography>
            </Paper>
            <br/>
            <Typography
              variant="body2"
              color="textSecondary"
              align='right'
              style={{
                fontFamily: 'Roboto Mono, monospace',
                fontSize: 11,
              }}
            >
              {props.project.tech.map(t => `${t} `)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default ProjectCard;
