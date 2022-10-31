import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import GithubIcon from "../assets/github.svg";
import InstagramIcon from "../assets/ig.svg";
import MailIcon from "../assets/gmail.svg";
import LinkedInIcon from "../assets/in.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6, 0),
  },
}));

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

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          className={classes.sidebarSection}
          style={{ fontFamily: "Roboto Mono, monospace" }}
        >
          {social.map((network, idx) => (
            <IconButton href={network.url} target="new" key={network + idx}>
              <img
                src={network.icon}
                style={{ width: 30 }}
                alt={network.name}
              />
            </IconButton>
          ))}
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
