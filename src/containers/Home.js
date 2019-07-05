import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectCard from '../components/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  banner: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://i.imgur.com/WBlNmxU.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  bannerContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  technologiesBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const about =
  <p>
    I lived in Michigan.
    <br/>
    I moved to China when I was 10.
    <br/>
    I moved back to Michigan for university.
    <br/>
    I now live in New York.
    <br/>
    I left my job to learn to write code.
    <br/>
    I really enjoy it.
    <br/>
    I also enjoy rock climbing, swimming, and shooting pool.
  </p>

const latestProjects = [
  {
    img: 'https://i.imgur.com/NXjFuUZ.png',
    title: 'DealPal',
    width: '30%',
    url: 'https://dealpal.herokuapp.com',
    description: 'Mobile optimized web app for locating nearby deals. View and track deals near you based on live deals from Groupon and Restaurant.com. Sign in to follow deals, and add deals to the map to be seen by other users.',
    tech: [
      'React',
      'Node.js',
      'Leaflet',
      'Ruby/Rails',
      'DiscountAPI',
      'MapquestAPI',
      'Material UI'
    ]
  },
  {
    img: 'https://i.imgur.com/p9mCAIP.png',
    title: 'mise en ++',
    width: '30%',
    url: 'https://miseenplus.herokuapp.com',
    description: 'Web app designed to help with recipe collection and cooking. Users can create kitchens to categorize / collect recipes, and cook when ready. Ingredients and instructions are separated and listed on a task lister page, where users can track to-dos, in progess, and finished items, along with elapsed time for each.',
    tech: [
      'React',
      'Node.js',
      'Ruby/Rails',
      'Semantic'
    ]
  },
  {
    img: 'https://i.imgur.com/VP1vVyL.png',
    title: 'space x cookie monster',
    width: '30%',
    url: 'https://jyan95.github.io/spaceXcookiemonster/',
    description: "A simple 'dodge and collect' game to be played from your desktop browser. Built on JavaScript and HTML Canvas.",
    tech: [
      'Node.js',
      'HTML Canvas',
      'Ruby/Rails',
      'Bootstrap'
    ]
  },
];

const projects = [
  {
    url: 'https://github.com/jyan95/project-deal-locator',
    title: 'DealPal',
  },
  {
    url: 'https://github.com/jyan95/project-mise-en-plusplus',
    title: 'mise en ++'
  },
  {
    url: 'https://github.com/jyan95/project-space-x-cookiemonster',
    title: 'space x cookie monster'
  }
];

const technologies = [
  'JavaScript ES6',
  'React',
  'Redux',
  'Ruby on Rails',
  'Git',
  'HTML / CSS',
  'Canvas',
  'Heroku',
  'AJAX',
  'Material UI / Semantic / Bootstrap',
  'Illustrator'
]

const social = [
  {
    page: 'GitHub',
    url: 'https://github.com/jyan95'
  },
  {
    page: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jyan95'
  },
  {
    page: 'Medium',
    url: 'https://medium.com/@jyan0602'
  },
  {
    page: 'Gmail',
    url: 'mailto:jyan0602@gmail.com'
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      {/* Start Banner */}
      <Paper className={classes.banner}>
        {
          <img
            style={{ display: 'none' }}
            src="https://i.imgur.com/WBlNmxU.jpg"
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.bannerContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                style={{fontFamily: 'Raleway, sans-serif'}}
                gutterBottom
              >
                <b>JOSHUA YAN</b>
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                paragraph
                style={{fontFamily: 'Ubuntu, sans-serif'}}
              >
                new york based fullstack web developer
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {/* End banner */}
      <Container maxWidth="lg">
        <main>
          <div id='about'>
            <Typography
              variant="h6"
              style={{fontFamily: 'Roboto Mono, monospace'}}
              gutterBottom
            >
              <b>// about me</b>
            </Typography>
            <Divider />
            <CardContent>
              <Typography variant='subtitle1'>
                {about}
              </Typography>
            </CardContent>
          </div>
          {/* Latest Projects */}
          <div id='work'>
            <Typography
              variant="h6"
              style={{fontFamily: 'Roboto Mono, monospace'}}
              gutterBottom
            >
              <b>// featured work</b>
            </Typography>
            <Divider />
            <br/>
            <br/>
            <Grid
              container
              direction='column'
              justify='space-evenly'
              spacing={6}
              alignItems='center'
            >
              {latestProjects.map(p => (
                <ProjectCard project={p}/>
              ))}
            </Grid>
            <br/>
            <br/>
            <Typography
              variant="h6"
              style={{fontFamily: 'Roboto Mono, monospace'}}
              gutterBottom
            >
              <b>// more work</b>
            </Typography>
            <Divider />
          </div>
          {/* End latest projects */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Experience and Education */}
            <Grid item xs={12} md={8}>
              <div id='experience'>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{fontFamily: 'Roboto Mono, monospace'}}
                >
                  <b>// experience</b>
                </Typography>
                <Divider />
                <Experience/>
                <Typography
                  variant="h6"
                  style={{fontFamily: 'Roboto Mono, monospace'}}
                  gutterBottom
                >
                  <b>// education</b>
                </Typography>
                <Divider />
                <Education/>
              </div>
            </Grid>
            {/* End Experience and Education */}
            {/* Side Content */}
            <Grid item xs={12} md={4}>
              <Paper elevation={1} className={classes.technologiesBox}>
                <Typography
                  variant="h6"
                  style={{fontFamily: 'Roboto Mono, monospace'}}
                  gutterBottom
                >
                  technologies
                </Typography>
                <Typography variant='body2'>
                  {technologies.map(t => {
                    return (
                      <span key={t}>
                        + {t}
                        <br/>
                      </span>
                    )
                  })}
                </Typography>
              </Paper>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
                style={{fontFamily: 'Roboto Mono, monospace'}}
              >
                more work
              </Typography>
              {projects.map(project => (
                <Link display="block" variant="body1" href={project.url} target='new' key={project.title}>
                  {project.title}
                </Link>
              ))}
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
                style={{fontFamily: 'Roboto Mono, monospace'}}
              >
                social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href={network.url} target='new' key={network.page}>
                  {network.page}
                </Link>
              ))}
            </Grid>
            {/* End Side Content */}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default Home;
