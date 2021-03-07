import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CV from "./cv";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

const Cards = () => {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div
      className="cardmain"
      // style={{
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      //   flexDirection: "column",
      //   alignItems: "center",
      // }}
    >
      <div
        className="cardmain1"
        // style={{
        //   width: "95%",
        //   fontSize: "20px",
        //   borderTop: "1px solid lightgrey",
        //   borderBottom: "1px solid lightgrey",
        //   fontWeight: 'bold',
        //   display: 'flex',
        //   justifyContent: 'space-between',
        //   alignItems: 'center',
        //   fontFamily: 'Quicksand'
        // }}
      >
        <div
          className="wbsDiv"
          // style={{ fontSize: "16px", color: "lightgrey", marginLeft: "10px" }}
        >
          Location: WBS Coding School
        </div>
        <div style={{ fontSize: "20px" }}>Junior Full-Stack Web Developer</div>
        <div
          className="duration"
          // style={{ fontSize: "16px", color: "lightgrey", marginRight: "10px" }}
        >
          31.08.2020 - 11.12.2020
        </div>
      </div>
      <div
        className="whatilearned"
        // style={{
        //   width: "100%",
        //   fontSize: "16px",
        //   textAlign: "center",
        //   marginTop: "20px",
        //   fontFamily: "Quicksand",
        // }}
      >
        Languages, Mehods and Tools I learned and used
      </div>
      <div
        className="listmaindiv"
        // style={{
        //   display: "flex",
        //   width: "100%",
        //   justifyContent: "space-around",
        //   marginTop: "20px",
        //   marginBottom: "40px",
        //   fontFamily: "Quicksand",
        //   backgroundColor: "#F7FBFC",
        // }}
      >
        <div
          className="frontend1"
          // style={{
          //   backgroundColor: "#F7FBFC",
          //   width: "20%",
          //   textAlign: "center",
          // }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold", width: "100%" }}>
            Frontend
          </div>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Restful API's</li>
          <hr style={{ width: "40%", borderColor: "blue" }} />

          <div
            style={{ fontSize: "16px", fontWeight: "bold", marginTop: "10px" }}
          >
            Tools I used
          </div>

          <li>Git/GitHub</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>ReactSpring</li>
          <li>Netlify</li>
        </div>
        <div
          className="backend1"
          // style={{
          //   backgroundColor: "#F7FBFC",
          //   width: "20%",
          //   textAlign: "center",
          // }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>Backend</div>

          <li>NodeJS</li>
          <li>NoSQL</li>
          <li>SQL</li>

          <hr
            style={{ width: "40%", borderColor: "blue", marginTop: "82px" }}
          />

          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            Tools I used
          </div>
          <li>Git/GitHub</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Heroku</li>
        </div>
        <div
          className="databases"
          // style={{
          //   backgroundColor: "#F7FBFC",
          //   width: "20%",
          //   textAlign: "center",
          // }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>Databases</div>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </div>
        <div
          className="projectmanagement"
          // style={{
          //   backgroundColor: "#F7FBFC",
          //   width: "max-content",
          //   textAlign: "center",
          //   marginRight: "60px",
          // }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            Projectmanagement
          </div>
          <li>Agile Methods/Scrum</li>
          <br/>
          <li>First Experiences with:</li>
          <li>Jira</li>
          <li>Trello</li>
          <li>Discord</li>
        </div>
      </div>
    </div>
  );
};

export default Cards;
