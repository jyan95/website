import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

import InstagramIcon from "../assets/ig.svg";
import MailIcon from "../assets/gmail.svg";
import LinkedInIcon from "../assets/in.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: "32px 56px",
    backgroundColor: "#1C2C1B",
  },
}));

export const SOCIALS = [
  {
    name: "Gmail",
    url: "mailto:jyan0602@gmail.com",
    icon: MailIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshua-yan",
    icon: LinkedInIcon,
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/joshuayan_/",
    icon: InstagramIcon,
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6} md={6}>
          <Typography
            variant="h6"
            align="left"
            gutterBottom
            className={classes.sidebarSection}
          >
            <Link
              href="https://drive.google.com/file/d/1vFmotEK31wMtvMez96aF1V3MUfqCUIzu/view?usp=drive_link"
              color="inherit"
              underline="always"
              target="new"
            >
              resume
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            align="right"
            gutterBottom
            className={classes.sidebarSection}
            style={{ marginRight: "-16px" }}
          >
            {SOCIALS.map((network, idx) => (
              <IconButton href={network.url} target="new" key={network + idx}>
                <img
                  src={network.icon}
                  style={{ width: 30 }}
                  alt={network.name}
                />
              </IconButton>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
