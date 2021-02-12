import React, { useState, useEffect } from "react";
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
import DvrIcon from "@material-ui/icons/Dvr";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import StorageIcon from "@material-ui/icons/Storage";
import GitHubIcon from "@material-ui/icons/GitHub";
import { DiMongodb, DiReact } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJavascript, SiMongodb, SiSpring } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiMaterialUi } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { GiSpring } from "react-icons/gi";
import { IoLogoNodejs } from "react-icons/io";
import { GrHeroku} from "react-icons/gr";
import zIndex from "@material-ui/core/styles/zIndex";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 300,
//     height: 340,
//   },
//   media: {
//     height: 0,
//     paddingTop: "20%", // 16:9
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

// export default function CodingCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "60%",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 FRONT-END
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>CSS3</li>
//               <li style={{ listStyleType: "none" }}>JavaScript</li>
//               <li style={{ listStyleType: "none" }}>ReactJS</li>
//               <hr style={{ border: "2px solid grey", width: "6%" }} />
//               <li style={{ listStyleType: "none" }}>Material UI</li>
//               <li style={{ listStyleType: "none" }}>Bootstrap</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <SettingsApplicationsIcon
//               color="disabled"
//               style={{ fontSize: "40px" }}
//             />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 BACK-END
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>NodeJS</li>
//               <li style={{ listStyleType: "none" }}>Express</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "calc(20px + 0.3vw)",
//                 }}
//               >
//                 DATABASES
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>PostgreSQL</li>
//               <li style={{ listStyleType: "none" }}>MongoDB</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginLeft: "4%", marginRight: "4%" }}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 COLLABO
//               </li>
//               <hr style={{ border: "2px solid grey", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>GitHub</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

////Second Version////

// export default function CodingCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "100%",
//         justifyContent: 'space-between'
//       }}
//     >
//       <div style={{ width: "30%",}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 FRONT-END
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>CSS3</li>
//               <li style={{ listStyleType: "none" }}>JavaScript</li>
//               <li style={{ listStyleType: "none" }}>ReactJS</li>
//               <hr style={{ border: "2px solid grey", width: "6%" }} />
//               <li style={{ listStyleType: "none" }}>Material UI</li>
//               <li style={{ listStyleType: "none" }}>Bootstrap</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '10%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <SettingsApplicationsIcon
//               color="disabled"
//               style={{ fontSize: "40px" }}
//             />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 BACK-END
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>HTML5</li>
//               <li style={{ listStyleType: "none" }}>NodeJS</li>
//               <li style={{ listStyleType: "none" }}>Express</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '20%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "calc(20px + 0.3vw)",
//                 }}
//               >
//                 DATABASES
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>PostgreSQL</li>
//               <li style={{ listStyleType: "none" }}>MongoDB</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/*  */}

//       <div style={{ width: "30%", marginTop: '30%'}}>
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>
//             <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <li
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "26px",
//                 }}
//               >
//                 COLLABO
//               </li>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none" }}>GitHub</li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

////Third version/////

// export default function CodingCard() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//     return (
//       <div
//         style={{
//           display: "flex",
//         //   flexDirection: "column",
//           width: "100%",
//           alignItems: 'center',
//           marginTop: '100px'
//         }}
//       >
//         <div style={{ width: "30%", marginLeft: '8%'}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <DvrIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   FRONT-END
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>HTML5</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>CSS3</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>JavaScript</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>ReactJS</li>
//                 <hr style={{ border: "2px solid grey", width: "6%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Material UI</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Bootstrap</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/*  */}

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <SettingsApplicationsIcon
//                 color="disabled"
//                 style={{ fontSize: "40px" }}
//               />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   BACK-END
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>HTML5</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>NodeJS</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>Express</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <StorageIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "calc(20px + 0.3vw)",
//                   }}
//                 >
//                   DATABASES
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>PostgreSQL</li>
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>MongoDB</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/*  */}

//         <div style={{ width: "30%",}}>
//           <Card className={classes.root}>
//             <CardMedia style={{ textAlign: "center" }}>
//               <GitHubIcon color="disabled" style={{ fontSize: "40px" }} />
//             </CardMedia>
//             <CardContent style={{}}>
//               <div
//                 style={{
//                   width: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   fontFamily: "Quicksand",
//                   alignItems: "center",
//                 }}
//               >
//                 <li
//                   style={{
//                     listStyleType: "none",
//                     fontWeight: "bold",
//                     fontSize: "26px",
//                   }}
//                 >
//                   COLLABO
//                 </li>
//                 <hr style={{ border: "2px solid yellow", width: "40%" }} />
//                 <li style={{ listStyleType: "none", fontSize: '20px' }}>GitHub</li>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

////Fourth Version////

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     height: 420,

//   },
//   media: {
//     height: 0,
//     paddingTop: "20%", // 16:9
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

// export default function CodingCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
//   const [logo, setLogo] = useState(null);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const logos = [
//     <DvrIcon style={{ color: "yellow", fontSize: "120px" }} />,
//     <DiReact style={{ color: "yellow", fontSize: "120px" }} />,
//     <SiJavascript style={{ color: "yellow", fontSize: "90px" }} />,
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLogo(logos[Math.floor(Math.random() * logos.length)]);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//     className='codingCardsDiv'
//       style={{

//         marginTop: "100px",

//       }}
//     >
//       <div
//       className='codingCards'
//         data-aos="zoom-out-right"
//         data-aos-offset="160"
//         data-aos-duration="3000"
//         style={{ width:'max-content', marginLeft: '2%',}}

//       >
//         <Card className={classes.root} id='singleCard'>
//           <CardMedia style={{ textAlign: "center",}} >

//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",

//               }}
//             >
//               <div
//                 className="nice"
//                 id='nice'
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",

//                   display: "flex",
//                   flexDirection: "column",
//                   color: "lightgrey",
//                 }}
//               >
//                 <span>FRONT</span>
//                 <span>
//                   End <DvrIcon style={{ color: "yellow", fontSize: "120px" }} />

//                 </span>
//               </div>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />

//               <li style={{ listStyleType: "none", fontSize: "20px" }}>HTML5</li>
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>CSS3</li>
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 JavaScript
//               </li>
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 ReactJS
//               </li>
//               <hr style={{ border: "2px solid grey", width: "6%" }} />

//               <li style={{ listStyleType: "none", fontSize: "16px", textAlign: 'center', }}>
//                Github | Material UI | Bootstrap | React Spring | Netlify | Agile Methods/Scrum
//               </li>

//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div
//        className='codingCards'
//         data-aos="zoom-out-right"
//         data-aos-offset="160"
//         data-aos-duration="3000"
//         style={{width:'max-content', marginLeft: '2%',}}
//       >
//         <Card className={classes.root} id='singleCard'>
//           <CardMedia style={{ textAlign: "center" }}>

//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 className="nice"
//                 id='nice'
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",

//                   display: "flex",
//                   flexDirection: "column",
//                   color: "lightgrey",
//                 }}
//               >
//                 <span>BACK</span>
//                 <span>
//                   End{" "}
//                   <SettingsApplicationsIcon
//                     style={{ color: "yellow", fontSize: "120px" }}
//                   />
//                 </span>
//               </div>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />

//               <li  style={{ listStyleType: "none", fontSize: "20px" }}>
//                 NodeJS
//               </li>
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 Express
//               </li>
//               <hr style={{ border: "2px solid grey", width: "6%", marginTop: '70px' }} />

//               <li style={{ listStyleType: "none", fontSize: "16px", textAlign: 'center',  width: '100%',}}>
//                Github | Express | NoSQL | SQL | Heroku | Agile Methods/Scrum
//               </li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div
//        className='codingCards'
//         data-aos="zoom-out-right"
//         data-aos-offset="160"
//         data-aos-duration="3000"
//         style={{ width:'max-content', marginLeft: '2%',}}
//       >
//         <Card className={classes.root} id='singleCard'>
//           <CardMedia style={{ textAlign: "center" }}>
//             {/* <DvrIcon color="disabled" style={{ fontSize: "40px" }} /> */}
//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 className="nice"
//                 id='nice'
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   display: "flex",
//                   flexDirection: "column",
//                   color: "lightgrey",
//                 }}
//               >
//                 <span>DATA</span>
//                 <span>
//                   BASES{" "}
//                   <StorageIcon style={{ color: "yellow", fontSize: "80px" }} />
//                 </span>
//               </div>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 PostgreSQL
//               </li>
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 MongoDB
//               </li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div
//         data-aos="zoom-out-right"
//         data-aos-offset="160"
//         data-aos-duration="3000"
//         style={{ width: "30%", marginLeft: "2%" }}
//       >
//         <Card className={classes.root}>
//           <CardMedia style={{ textAlign: "center" }}>

//           </CardMedia>
//           <CardContent style={{}}>
//             <div
//               style={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "Quicksand",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 className="nice"
//                 style={{
//                   listStyleType: "none",
//                   fontWeight: "bold",
//                   fontSize: "calc(60px + 2.2vw)",

//                   display: "flex",
//                   flexDirection: "column",
//                   color: "lightgrey",
//                 }}
//               >
//                 <span>Hosting&</span>
//                 <span>
//                   Collabo{" "}
//                   <GitHubIcon style={{ color: "yellow", fontSize: "100px" }} />
//                 </span>
//               </div>
//               <hr style={{ border: "2px solid yellow", width: "40%" }} />
//               <li style={{ listStyleType: "none", fontSize: "20px" }}>
//                 GitHub
//               </li>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

////Fifth Version////

const CodingCard = () => {
  const [openFrontend, setOpenFrontend] = useState(null);
  const [openBackend, setOpenBackend]=useState(null);
  const [logo, setLogo] = useState(null);
  console.log(openFrontend);

  const handleClick = (e) => {
    setOpenFrontend(e.target);
  };

  const handleBackend = (e) => {
    setOpenBackend(e.target)
  }

  // const logos = [
  //       <DvrIcon style={{ color: "yellow", fontSize: "120px" }} />,
  //       <DiReact style={{ color: "yellow", fontSize: "120px" }} />,
  //       <SiJavascript style={{ color: "yellow", fontSize: "90px" }} />,
  //     ];

  //     useEffect(() => {
  //       const interval = setInterval(() => {
  //         setLogo(logos[Math.floor(Math.random() * logos.length)]);
  //       }, 4000);
  //       return () => clearInterval(interval);
  //     }, []);

  return (
    <div  id="codingSkills" className="codingLangDiv" style={{ width: "100%", marginTop: '10%' }}>
      {!openFrontend && (
        <div
          className="frontend"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: '60px'
          }}
        >
          <div
            className="rotate"
            style={{
              fontSize: "60px",
              color: "blue",
              width: "440px",
              height: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              position: "absolute",
              zIndex: "0",
            }}
          >
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <AiOutlineHtml5 style={{}} />
              <DiCss3 style={{ color: "blue" }} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "90px",
                marginBottom: "90px",
              }}
            >
              <SiJavascript />
              <DiReact />
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <SiMaterialUi />
              <BsBootstrap />
            </div>
          </div>
          <div className="frontendbutton">
            <div style={{marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',}} className="innerfrontendbutton" onClick={handleClick}>
              <div
                id="innerfrontendbutton"  style={{fontSize: 'calc(40px + 2.0vw)'}}>
                Front
              </div>
              <div id="innerfrontendbutton"  
              style={{fontSize: 'calc(40px + 2.0vw)'}} 
              // style={{
              //     fontFamily: "Quicksand",
              //     fontSize: "3.6vw",
              //     fontWeight: "bold",
              //     lineHeight: "50px",
              //   }} 
                >End</div>
            </div>
          </div>
        </div>
      )}
      {openFrontend && (
        <div
          className="frontend2"
          style={{
            position: "relative",
            zIndex: "10",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: '60px',
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 0,
              fontSize: "calc(260px + 10vw)",
              fontWeight: "bold",
              color: "rgb(211, 211, 211, 0.26)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              lineHeight: "380px",
              fontFamily: "Impact",
            }}
          >
            {" "}
            Frontend
          </div>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div
              className="rotate"
              style={{
                fontSize: "60px",
                color: "blue",
                width: "440px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                position: "absolute",
                zIndex: "0",
                
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <DiCss3 style={{}} />
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "120px",
                  marginBottom: "120px",
                  
                }}
              >
                <SiJavascript style={{ fontSize: "50px" }} />
                <DiReact />
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <AiOutlineHtml5 style={{}} />
              </div>
            </div>
            <div className="frontendbutton">
              <div
                className="innerfrontendbutton"
                style={{
                  marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',
                  width: "300px",
                  height: "300px",
                  color: "lightblue",
                  border: "10px solid lightblue",
                }}
                onClick={handleClick}
              >
                {/* <div style={{fontSize: '80px', lineHeight: '90px'}}>Lan</div> */}
                <div
                  className="allCodingLang"
                  style={{
                    listStyleType: "none",
                    fontSize: "26px",
                    textAlign: "center",
                    lineHeight: "26px",
                  }}
                >
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                </div>
                {/* <div style={{fontSize: '54px', lineHeight: '60px'}}>guages</div> */}
              </div>
            </div>
          </div>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div
              className="rotate"
              style={{
                fontSize: "60px",
                color: "blue",
                width: "440px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                position: "absolute",
                zIndex: "0",
                
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
              >
                <GitHubIcon style={{ fontSize: "60px" }} />
                <SiNetlify />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "100px",
                  marginBottom: "100px",
                  
                }}
              >
                <SiMaterialUi />
                <BsBootstrap />
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
              >
                <GiSpring />
              <DiScrum />
              </div>
            </div>
            <div className="frontendbutton">
              <div
                className="innerfrontendbutton"
                style={{
                  marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',
                  width: "300px",
                  height: "300px",
                  color: "lightblue",
                  border: "10px solid lightblue",
                }}
                onClick={handleClick}
              >
                {/* <div style={{fontSize: '80px', lineHeight: '80px'}}>Tools</div> */}
                <div
                  className="allCodingLang"
                  style={{
                    listStyleType: "none",
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "26px",
                  }}
                >
                  <li>GitHub</li>
                  <li>Material UI</li>
                  <li>Bootstrap</li>
                  <li>Netlify</li>
                  <li>React Spring</li>
                  <li>Scrum</li>
                </div>
                {/* <div style={{fontSize: '60px', lineHeight: '60px'}}>I used</div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {!openBackend && (
        <div
          className="frontend"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="rotate"
            style={{
              fontSize: "60px",
              color: "blue",
              width: "440px",
              height: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              position: "absolute",
              zIndex: "0",
            }}
          >
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IoLogoNodejs style={{}} />
              <DiPostgresql style={{ color: "blue" }} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "90px",
                marginBottom: "90px",
              }}
            >
              <SiMongodb />
              <GitHubIcon  style={{fontSize: '60px'}}/>
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <DiScrum />
              <GrHeroku />
            </div>
          </div>
          <div className="frontendbutton">
            <div style={{   marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',}} className="innerfrontendbutton" onClick={handleBackend}>
              <div
                id="innerfrontendbutton"
                style={{fontSize: 'calc(40px + 2.1vw)'}}
                // style={{
                //   fontFamily: "Quicksand",
                //   fontSize: "3.6vw",
                //   fontWeight: "bold",
                //   lineHeight: "50px",
                // }}
              >
                Back
              </div>
              <div id="innerfrontendbutton"  
              style={{fontSize: 'calc(40px + 2.0vw)'}} 
              // style={{
              //     fontFamily: "Quicksand",
              //     fontSize: "3.6vw",
              //     fontWeight: "bold",
              //     lineHeight: "50px",
              //   }} 
                >End</div>
            </div>
          </div>
        </div>
      )}
      {openBackend && (
        <div
          className="frontend2"
          style={{
            position: "relative",
            zIndex: "10",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 0,
              fontSize: "calc(260px + 10vw)",
              fontWeight: "bold",
              color: "rgb(211, 211, 211, 0.26)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              lineHeight: "380px",
              fontFamily: "Impact",
            }}
          >
            {" "}
            Backend
          </div>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div
              className="rotate"
              style={{
                fontSize: "60px",
                color: "blue",
                width: "440px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                position: "absolute",
                zIndex: "0",
                
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center", 
                }}
              >
                {/* <IoLogoNodejs style={{}} /> */}
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "120px",
                  marginBottom: "120px",
                  
                }}
              >
               <IoLogoNodejs style={{}} />
                {/* <SiJavascript style={{ fontSize: "50px" }} />
                <DiReact /> */}
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                {/* <AiOutlineHtml5 style={{}} /> */}
              </div>
            </div>
            <div className="frontendbutton">
              <div
                className="innerfrontendbutton"
                style={{
                  marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',
                  width: "300px",
                  height: "300px",
                  color: "lightblue",
                  border: "10px solid lightblue",
                }}
                onClick={handleClick}
              >
                {/* <div style={{fontSize: '80px', lineHeight: '90px'}}>Lan</div> */}
                <div
                  className="allCodingLang"
                  style={{
                    listStyleType: "none",
                    fontSize: "26px",
                    textAlign: "center",
                    lineHeight: "26px",
                  }}
                >
                  <li>NodeJS</li>
                  
                </div>
                {/* <div style={{fontSize: '54px', lineHeight: '60px'}}>guages</div> */}
              </div>
            </div>
          </div>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <div
              className="rotate"
              style={{
                fontSize: "60px",
                color: "blue",
                width: "440px",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                position: "absolute",
                zIndex: "0",
                
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
              >
                <GitHubIcon style={{ fontSize: "60px" }} />
                <GrHeroku />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "100px",
                  marginBottom: "100px",
                  
                }}
              >
                <DiPostgresql />
                <DiMongodb />
              </div>
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
              >
                <div style={{fontSize: '40px'}}>EX</div>
              <DiScrum />
              </div>
            </div>
            <div className="frontendbutton">
              <div
                className="innerfrontendbutton"
                style={{
                  marginTop: "14px",
                  marginLeft: '14px',
                  marginBottom: '14px',
                  marginRight: '14px',
                  width: "300px",
                  height: "300px",
                  color: "lightblue",
                  border: "10px solid lightblue",
                }}
                onClick={handleClick}
              >
                {/* <div style={{fontSize: '80px', lineHeight: '80px'}}>Tools</div> */}
                <div
                  className="allCodingLang"
                  style={{
                    listStyleType: "none",
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "26px",
                  }}
                >
                  <li>GitHub</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                  <li>Scrum</li>
                </div>
                {/* <div style={{fontSize: '60px', lineHeight: '60px'}}>I used</div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default CodingCard;
