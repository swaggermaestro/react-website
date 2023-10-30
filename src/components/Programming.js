import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  bigContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  sandboxContainer: {
    background: "#233",
    textAlign: "center",
    position: "relative",
    margin: "1rem",
    borderRadius: "10px",
    padding: "1rem",
    flex: "1 0 auto",
    minWidth: "40rem",
    maxWidth: "40rem",
  },

  listItem: {
    background: "#395252",
    marginTop: "0.5rem",
    borderRadius: "5px",
    height: "4rem",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
  },

  iconStyle: {
    display: "flex",
    margin: "1rem",
  },

  categoryHeader: {
    textAlign: "left",
    marginLeft: "0.5rem",
    marginBottom: "0rem"
  },

  captionStyle: {
    color: "tomato",
  }

}));

const ProgrammingLanguages = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    caption: ""
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    caption: ""
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    caption: ""
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    caption: ""
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    caption: ""
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    caption: ""
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    caption: ""
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    caption: ""
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    caption: ""
  }

]

const mediumComfort = [
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    caption: ""
  },
  {
    name: "Haskell",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
    caption: ""
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    caption: ""
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    caption: ""
  },
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    caption: ""
  }
]

const lowComfort = [
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    caption: ""
  },



]

function Programming() {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <div className="box">
        <h1>Programming Experience</h1>
        <div className={classes.categoryHeader}>
          <h2 className={classes.captionStyle}>High proficiency</h2>
          <p>Frameworks which I know inside out and can code virtually anything with.</p>
        </div>
        {ProgrammingLanguages.map((item, index) => (
          <div className={classes.listItem}>
            <div className={classes.iconStyle}>
              <img height="40px" src={item.icon} />
            </div>

            <p>
              <b>{item.name}</b>&#8205;
            </p>

            <p>{item.caption}</p>
          </div>
        ))}

        <div className={classes.categoryHeader}>
          <h2 className={classes.captionStyle}>Medium proficiency</h2>
          <p>Frameworks which I have worked with in the past, and am confident in my abilities to build an MVP with.</p>

        </div>

        {mediumComfort.map((item, index) => (
          <div className={classes.listItem}>
            <div className={classes.iconStyle}>
              <img height="40px" src={item.icon} />
            </div>

            <p>
              <b>{item.name}</b>&#8205;
            </p>

            <p>{item.caption}</p>

          </div>
        ))}

        <div className={classes.categoryHeader}>
          <h2 className={classes.captionStyle}>Low proficiency</h2>
          <p>Frameworks which I have touched, but not properly explored.</p>
        </div>

        {lowComfort.map((item, index) => (
          <div className={classes.listItem}>
            <div className={classes.iconStyle}>
              <img height="40px" src={item.icon} />
            </div>

            <p>
              <b>{item.name}</b>&#8205;
            </p>

            <p>{item.caption}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Programming;