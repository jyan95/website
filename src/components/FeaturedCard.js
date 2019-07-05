import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '../assets/github.png';
import LaunchIcon from '@material-ui/icons/Launch'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1
  },
  image: {
    position: 'relative',
    zIndex: 0,
    height: 255,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.1,
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
    color: 'white',
    opacity: 0.7,
    height: 18,
    width: 18,
    position: 'absolute',
    transition: theme.transitions.create('opacity'),
  },
  descriptionBox: {
    position: 'relative',
    padding: theme.spacing(2),
    zIndex: 10,
    backgroundColor: theme.palette.grey[200],
  },
}));

const FeaturedCard = (props) => {
  // console.log(props.project.img);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardContent>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={12} md={5}>
            <ButtonBase
              focusRipple
              className={classes.image}
              focusvisibileclassname={classes.focusVisible}
              style={{width: 600}}
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
          <Grid item xs={12} md={7}>
            <Typography
              gutterBottom
              variant="h5"
              align='right'
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
            <Grid item align='right'>
              <IconButton href={props.project.url} target='new'>
                <LaunchIcon/>
              </IconButton>
              <IconButton href={props.project.repo} target='new'>
                <img src={GithubIcon} style={{width:22}} alt='Github'/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  );
}

export default FeaturedCard;
