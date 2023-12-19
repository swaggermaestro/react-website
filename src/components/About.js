import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


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
          My name is Simeon, and I am a {getAge("2000/05/25")}-year-old Software Engineer currently working for Entelect, residing in Cape Town. I am originally from Centurion in Gauteng
          and I completed my BSc Honours degree in Computer Science at Stellenbosch University. I consider my top skill to be my ability to work with people. 
          In the IT industry, there is often a disconnect between the professionals developing a product and the consumers using it. I see myself as a bridge 
          between these two entities, as I aspire to create usable, efficient, and consumer-focused software.
            <br/>
            <br/>
            My long-term goal is simply to make a positive impact on the lives of everyday South Africans. I am highly optimistic about our country, and I believe that if we string together, we can achieve anything.
          </Typography>
          </div>
      </div>

  );
};

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}


export default Photos;
