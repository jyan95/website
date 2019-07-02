import React from 'react';
import Experience from '../components/Experience';
import Education from '../components/Education';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import Markdown from '../components/Markdown';
import resume from '../assets/resume.md';
import education from '../assets/education.md';


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
  mainFeaturedPost: {
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
  mainFeaturedPostContent: {
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
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  {name: 'home', url: '/'},
  {name: 'portfolio', url: '/portfolio'},
  {name: 'resume', url: 'https://drive.google.com/file/d/1JXaUU60BelPoo6Kz2DIpdsfQk00NQam_/view?usp=sharing'}
];



const latestProjects = [
  {
    title: 'DealPal',
    date: 'June 2019',
    description:
      'Mobile optimized app designed to locate and track nearby deals.',
  },
  {
    title: 'mise en ++',
    date: 'May 2019',
    description:
      'Single page web app designed to help with your kitchen adventures!',
  },
];

const projects = [
  { name: 'DealPal', url: 'https://github.com/jyan95/project-deal-locator' },
  { name: 'mise en ++', url: 'https://github.com/jyan95/project-mise-en-plusplus' },
  { name: 'space x cookie monster', url: 'https://github.com/jyan95/project-space-x-cookiemonster'}
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
  'Mobile First Thinking',
  'Illustrator'
]

const social = [
  { page: 'GitHub', url: 'https://github.com/jyan95' },
  { page: 'LinkedIn', url: 'https://www.linkedin.com/in/jyan95' }
];

const Home = () => {
  // console.log(resume);
  const classes = useStyles();
  // fetch(resume)
  // .then(response => response.text())
  // .then(text => {
  //   // Logs a string of Markdown content.
  //   // Now you could use e.g. <rexxars/react-markdown> to render it.
  //   console.log(text);
  // });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar component="nav" variant="dense" className={classes.toolbar}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section.name}
              variant="body2"
              href={section.url}
              target='new'
              className={classes.toolbarLink}
            >
              {section.name}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
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
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    joshua yan
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    new york based fullstack software developer
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Latest Projects */}
          <Typography variant="h6" gutterBottom>
            latest projects
          </Typography>
          <Divider />
          <br/>
          <Grid container spacing={4} className={classes.cardGrid}>
            {latestProjects.map(project => (
              <Grid item key={project.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {project.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {project.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {project.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End latest projects */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Work and Education */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                work experience
              </Typography>
              <Divider />
              <Experience/>
              <Typography variant="h6" gutterBottom>
                education
              </Typography>
              <Divider />
              <Education/>
            </Grid>
            {/* End Work and Education */}
            {/* Side Content */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  technologies
                </Typography>
                <Typography>
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
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                projects
              </Typography>
              {projects.map(project => (
                <Link display="block" variant="body1" href={project.url} target='new' key={project.name}>
                  {project.name}
                </Link>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
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
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2019 Joshua Yan.&nbsp;All rights reserved. Fullstack Developer
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Home;
