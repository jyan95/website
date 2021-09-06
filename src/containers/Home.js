import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Education from '../components/Education';
import FeaturedCard from '../components/FeaturedCard';
import BasicCard from '../components/BasicCard';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import GithubIcon from '../assets/github.png';
import FacebookIcon from '../assets/fb.png';
import InstagramIcon from '../assets/ig.png';
import MailIcon from '../assets/mail.png';
import LinkedInIcon from '../assets/in.png';

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
    I was born in Michigan
    <br/>
    I moved to China when I was 10
    <br/>
    I moved back to Michigan for university
    <br/>
    I moved to New York City to find work
    <br/>
    I left my job to learn how to code
    <br/>
    I am currently building software at Kinetik
    <br/>
    I enjoy rock climbing, swimming, and playing piano
    <br/>
  </p>

const projects = [
  {
    img: 'https://i.imgur.com/NXjFuUZ.png',
    title: 'DealPal',
    width: '30%',
    url: 'https://dealpal.herokuapp.com',
    repo: 'https://github.com/jyan95/project-deal-locator',
    description: 'Mobile optimized web app for locating nearby deals. View and track deals near you based on live deals from Groupon and Restaurant.com. Sign in to follow deals, and add deals to the map to be seen by other users. Hosted on Heroku.',
    tech: [
      'React',
      'JS',
      'Leaflet',
      'Ruby/Rails',
      'DiscountAPI',
      'MapquestAPI',
      'MaterialUI'
    ]
  },
  {
    img: 'https://i.imgur.com/p9mCAIP.png',
    title: 'mise en ++',
    width: '30%',
    url: 'https://miseenplus.herokuapp.com',
    repo: 'https://github.com/jyan95/project-mise-en-plusplus',
    description: 'Web app designed to help with recipe collection and cooking. Users can create kitchens to categorize / search and collect recipes, and cook when ready. Ingredients and instructions are separated and listed in to-do style, where users can track prep steps, in progess, and finished items, along with elapsed time for each. Hosted on Heroku.',
    tech: [
      'React',
      'JS',
      'Ruby/Rails',
      'Semantic'
    ]
  },
  {
    img: 'https://i.imgur.com/VP1vVyL.png',
    title: 'space x cookie monster',
    width: '30%',
    url: 'https://jyan95.github.io/spaceXcookiemonster',
    repo: 'https://github.com/jyan95/project-space-x-cookiemonster',
    description: "A simple 'dodge and collect' game to be played from your desktop browser. Built with vanilla JavaScript and HTML Canvas. Features scoreboard with high scores and persisted player stats. Frontend hosted on GitHub Pages, backend on Heroku.",
    tech: [
      'JS',
      'HTML Canvas',
      'Ruby/Rails',
      'Bootstrap'
    ]
  },
  {
    img: '',
    title: 'joshuayan.com',
    width: '30%',
    url: 'https://github.com/jyan95/website',
    repo: 'https://github.com/jyan95/website',
    description: "This here website",
    tech: [
      'React',
      'JS',
      'MaterialUI'
    ]
  },
  {
    img: '',
    title: 'Toolbox',
    width: '30%',
    url: 'https://github.com/jyan95/project-toolbox',
    repo: 'https://github.com/jyan95/project-toolbox',
    description: "Web app designed for users to rent and lend tools. Users can list tools available to lend, and rent tools from others.",
    tech: [
      'Ruby/Rails',
      'Bootstrap'
    ]
  },
  {
    img: '',
    title: "Biddler's Respite",
    width: '30%',
    url: 'https://github.com/jyan95/project-biddlers-respite',
    repo: 'https://github.com/jyan95/project-biddlers-respite',
    description: "A Trivia App to be played from your Command Line.",
    tech: [
      'Ruby',
      'Open Trivia Database API'
    ]
  },
];

const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/jyan95',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/joshua-yan',
    icon: LinkedInIcon
  },
  {
    name: 'Gmail',
    url: 'mailto:jyan0602@gmail.com',
    icon: MailIcon
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/jyan95',
    icon: FacebookIcon
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/joshuayan_/',
    icon: InstagramIcon
  },

];

const technologies = [
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'Express',
  'Jest',
  'MongoDB',
  'Mongoose',
  'AWS (SLS, SQS, SNS)
];

const Home = () => {
  // const [showMoreProjects, setShowMore] = useState(false);
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
              {projects.slice(0,3).map(p => (
                <FeaturedCard project={p}/>
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
            <br/>
            <Grid container spacing={2}>
              {projects.slice(3,projects.length).map(p => (
                <Grid item md={4} xs={12}>
                  <BasicCard project={p}/>
                </Grid>
              ))}
            </Grid>
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
              <Paper elevation={1} className={classes.technologiesBox} square>
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
                <br/>
              </Paper>
              <Typography
                variant="h6"
                align='right'
                gutterBottom
                className={classes.sidebarSection}
                style={{fontFamily: 'Roboto Mono, monospace'}}
              >
              {social.map(network => (
                <IconButton href={network.url} target='new'>
                  <img src={network.icon} style={{width:30}} alt={network.name}/>
                </IconButton>
              ))}
              </Typography>
            </Grid>
            {/* End Side Content */}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default Home;
