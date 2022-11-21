import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const githuburl = "https://github.com/swaggermaestro/";
  const linkedinurl = "https://www.linkedin.com/in/simeon-boshoff/";
  const instagramurl = "https://www.instagram.com/simson.van.tasties/";

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href={githuburl} target="_blank" rel="noopener noreferrer" icon={<GitHub />} className={classes.root} />
      <BottomNavigationAction href={linkedinurl} target="_blank" rel="noopener noreferrer" icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction href={instagramurl} target="_blank" rel="noopener noreferrer" icon={<Instagram />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
