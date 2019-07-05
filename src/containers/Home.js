import React from 'react';
import $ from 'jquery';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectCard from '../components/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: 1,
    overflowX: 'auto',
    justifyContent: 'right'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  banner: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
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
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  technologiesBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  {
    name: 'work',
  },
  {
    name: 'experience',
  },
  {
    name: 'resume',
    url: 'https://drive.google.com/file/d/1JXaUU60BelPoo6Kz2DIpdsfQk00NQam_/view?usp=sharing'
  },
];

const about =
  <p>
    I was born in Michigan.
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
    url: 'https://dealpal.herokuapp.com'
  },
  {
    img: 'https://i.imgur.com/p9mCAIP.png',
    title: 'mise en ++',
    width: '30%',
    url: 'https://miseenplus.herokuapp.com'
  },
  {
    img: 'https://i.imgur.com/VP1vVyL.png',
    title: 'space x cookie monster',
    width: '30%',
    url: 'https://jyan95.github.io/spaceXcookiemonster/'
  },
];

const projects = [
  {
    url: 'https://github.com/jyan95/project-deal-locator',
    title: 'DealPal'
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
  }
];

const Home = () => {
  const classes = useStyles();

  function scrollTo(section) {
    console.log('scrolling to', section);
    $('html, body').animate({
    scrollTop: $(`#${section}`).offset().top
}, 1000);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbar}
        >
          {sections.map(section => (
            section.name === 'resume' ?
            <Link
              color="inherit"
              noWrap
              key={section.name}
              variant="body2"
              href={section.url}
              target='new'
              className={classes.toolbarLink}
              style={{fontFamily: 'Roboto Mono, monospace'}}
            >
              {section.name}
            </Link>
            :
            <Link
              color="inherit"
              noWrap
              key={section.name}
              variant="body2"
              onClick={() => scrollTo(section.name)}
              className={classes.toolbarLink}
              style={{fontFamily: 'Roboto Mono, monospace'}}
            >
              {section.name}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Start Banner */}
          <Paper className={classes.banner}>
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
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
              <b>// featured works</b>
            </Typography>
            <Divider />
            <br/>
            <Grid
              container
              direction='row'
              justify='center'
              spacing={2}
            >
              {latestProjects.map(p => (
                <Grid item key={p.title} xs={12} md={4}>
                  <ProjectCard project={p}/>
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
              <Paper elevation={0} className={classes.technologiesBox}>
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
