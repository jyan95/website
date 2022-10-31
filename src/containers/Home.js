/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";

import GithubIcon from "../assets/github.png";
import InstagramIcon from "../assets/ig.png";
import MailIcon from "../assets/mail.png";
import LinkedInIcon from "../assets/in.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://i.imgur.com/WBlNmxU.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  bannerContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: 0,
  },
  technologiesBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const about = (
  <p>
    I was born in Michigan, and moved to China when I was 10.
    <br />
    I went to international schools in Wuxi, Suzhou, and Shanghai.
    <br />
    I moved back to Michigan for undergrad, and moved to New York shortly after.
    <br />
    I currently work at Kinetik as a Senior Engineer / Project Lead.
    <br />I spend most of my free time climbing, swimming, or learning about
    web3
  </p>
);

const social = [
  {
    name: "GitHub",
    url: "https://github.com/jyan95",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshua-yan",
    icon: LinkedInIcon,
  },
  {
    name: "Gmail",
    url: "mailto:jyan0602@gmail.com",
    icon: MailIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/joshuayan_/",
    icon: InstagramIcon,
  },
];

const technologies = [
  "JS (Node, Express, React, Redux, Jest)",
  "MongoDB (Mongoose)",
  "AWS (SLS, SQS, SNS)",
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
            style={{ display: "none" }}
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
            style={{ fontFamily: "Raleway, sans-serif" }}
            gutterBottom
          >
            <b>JOSHUA YAN</b>
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            new york based fullstack web developer
          </Typography>
        </div>
      </Paper>
      {/* End banner */}
      <Container maxWidth="lg">
        <main>
          <div id="about">
            <Typography
              variant="h6"
              style={{ fontFamily: "Roboto Mono, monospace" }}
              gutterBottom
            >
              <b>// about me</b>
            </Typography>
            <Divider />
            <CardContent>
              <Typography variant="subtitle1">{about}</Typography>
            </CardContent>
          </div>
          {/* Latest Projects */}

          {/* End latest projects */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Experience and Education */}
            <Grid item xs={12} md={8}>
              <div id="experience">
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                >
                  <b>// experience</b>
                </Typography>
                <Divider />
                <Experience />
                <Typography
                  variant="h6"
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  gutterBottom
                >
                  <b>// education</b>
                </Typography>
                <Divider />
                <Education />
              </div>
            </Grid>
            {/* End Experience and Education */}
            {/* Side Content */}
            <Grid item xs={12} md={4}>
              <Paper elevation={1} className={classes.technologiesBox} square>
                <Typography
                  variant="h6"
                  style={{ fontFamily: "Roboto Mono, monospace" }}
                  gutterBottom
                >
                  technologies
                </Typography>
                <Typography variant="body2">
                  {technologies.map((t) => {
                    return (
                      <span key={t}>
                        + {t}
                        <br />
                      </span>
                    );
                  })}
                </Typography>
                <br />
              </Paper>
              <Typography
                variant="h6"
                align="right"
                gutterBottom
                className={classes.sidebarSection}
                style={{ fontFamily: "Roboto Mono, monospace" }}
              >
                {social.map((network) => (
                  <IconButton href={network.url} target="new">
                    <img
                      src={network.icon}
                      style={{ width: 30 }}
                      alt={network.name}
                    />
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
};

export default Home;
