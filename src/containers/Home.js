/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    marginTop: "48px",
  },
  summary: { lineHeight: "1.4", fontSize: "4.5vw", fontWeight: 600 },
  italics: {
    marginTop: theme.spacing(3),
  },
  focus: {
    marginTop: "48px",
    lineHeight: "2.5",
    fontWeight: 600,
    fontSize: "3.3vw",
  },
  projects: {
    lineHeight: 1.5,
    fontWeight: 500,
    fontSize: "28px",
    marginTop: "24px",
  },
  philo: {},
  divider: {},
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid container>
          <Grid item xs={12} md={10}>
            <div style={{ padding: "56px 16px 16px 56px" }} id="title">
              <Typography style={{ fontSize: "2rem" }}>Joshua Yan</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={10}>
            <div style={{ padding: "64px 16px 0px 56px" }} id="summary">
              <Typography className={classes.summary}>
                Builder, swimmer, pianist, climber.
                <br />
                Currently leading a team at Kinetik, designing and delivering
                software solutions for managed care transportation.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.gridItem}>
          {/* Current areas of focus */}
          <Grid item xs={4} md={4}></Grid>
          <Grid item xs={8} md={8}>
            <Typography variant="h3" className={classes.focus} gutterBottom>
              Project management
              <br />
              System Design
              <br />
              Code Review
              <br />
              UI/UX, QA
            </Typography>
          </Grid>
          <Grid container spacing={2} className={classes.gridItem}>
            {/* Current areas of focus */}
            {/* Projects */}
            <Grid item xs={4} md={4}></Grid>
            <Grid item xs={8} md={7}>
              <Typography className={classes.projects} gutterBottom>
                A trip scheduling platform for health systems.
              </Typography>
              <Typography className={classes.projects} gutterBottom>
                A trip dispatch platform for transportation networks.
              </Typography>
              <Typography
                className={classes.projects}
                style={{ lineHeight: 1.5 }}
                gutterBottom
              >
                A claims generation, attestation, and submission platform for
                transportation providers.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.gridItem}>
            <Grid item xs={2} md={4}></Grid>
            <Grid item xs={10} md={6}>
              <Typography className={classes.philo} gutterBottom>
                Embracing individuality and autonomy, personal growth lies at
                the forefront of my leadership philosophy. I empower team
                members to identify and leverage their unique strengths,
                cultivating ownership and initiative toward shared goals.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
