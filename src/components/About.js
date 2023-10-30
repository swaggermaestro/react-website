import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "94vh",
  },
  mainContainer: {
    background: "#233",
    height: "100%",
    // height: "95vh",
    position: "absolute",
  },
  heading: {
    paddingTop: "3rem",
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  plainText: {
    margin: "2rem",
    color: "white",
    textAlign: "center",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
      <Typography variant="h5" className={classes.heading}>
            More about me
          </Typography>

          <Typography className={classes.plainText}>
          My name is Simeon, and I am a 23-year-old Software Engineer residing in Cape Town, South Africa. I am originally from Centurion in Gauteng
          and I completed my BSc Honours degree in Computer Science at Stellenbosch University. I consider my top skill to be my ability to work with people. 
          In the IT industry, there is often a disconnect between the professionals developing a product and the consumers using it. I see myself as a bridge 
          between these two entities, as I aspire to create usable, efficient, and consumer-focused software.
            <br/>
            <br/>
            My long-term goal is simply to have a positive impact on the lives of everyday South Africans. I am highly optimistic about our country, and I believe 
            that if we work together, we can achieve anything.</Typography>
          </Grid>
    </Box>
  );
};

const useStyles2 = makeStyles((theme) => ({
  bigContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem",
    width: "100%",
    height: "40rem", // Change height to full viewport height
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

  imgStyle: {
      alignItems: "center",
      width: "90%",
      borderRadius: "10px",
      margin: "1rem",
    },

    captionStyle: {
      color: "tomato",
    },

    textStyle: {
      color: "white",
    }
}));

const Photos = () => {
  const classes = useStyles2();
  return (
      <div className={classes.bigContainer}>
          <div className="box">
          <Typography variant="h5" className={classes.captionStyle}>
            More about me
          </Typography>
          <br></br>

          <Typography className={classes.textStyle}>
            My name is Simeon, and I am a 22-year-old Software Engineer residing in Cape Town, South Africa. I'm originally from Centurion, Pretoria, and I completed my BSc Honours degree in Computer Science at Stellenbosch University.
            I consider my top skill to be how I work with people. In the IT industry, there exists a common disconnect between the professionals developing a product and the consumers using it. I consider myself to be a bridge between these two entities, 
            as I aspire to create usable, efficient, and consumer-focused software. 
            <br/>
            <br/>
            My long-term goal is simply to make a positive impact on the lives of everyday South Africans. I am highly optimistic about our country, and I believe that if we string together, we can achieve anything.
          </Typography>
          </div>
              

      </div>

  );
};


export default Photos;
