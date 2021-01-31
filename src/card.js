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
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
             
            }}
          >
            <div style={{ width: "100%", textAlign: "center", fontSize: '20px' }}>
              Junior Webdeveloper
            </div>
            <div
              style={{
                display: "flex",
                width: "40%",
                justifyContent: "center",
                
               
              }}
            >
              <div>
                <div style={{fontSize:'20px'}}>Frontend</div>
                <ol style={{ listStyleType: "none", fontSize: '16px'}}>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Material UI</li>
                  <li>Bootstrap</li>
                </ol>
              </div>
              <div>
                <div style={{fontSize:'20px'}}>Backend</div>
                <ol style={{ listStyleType: "none", fontSize: '16px' }}>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ol>
              </div>
              <div>
                <div style={{fontSize:'20px'}}>Data Bases</div>
                <ol style={{ listStyleType: "none", fontSize: '16px' }}>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ol>
              </div>
              <div>
                <div style={{fontSize:'20px'}}>Hosting and Collabo</div>
                <ol style={{ listStyleType: "none", fontSize: '16px' }}>
                  <li>Git Hub</li>
                </ol>
              </div>
            </div>
          </div>
          
  );
};

export default Cards;
