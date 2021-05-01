import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CVImage from "./images/CVImage.jpg";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Projects from "./projects";
import DvrIcon from "@material-ui/icons/Dvr";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import StorageIcon from "@material-ui/icons/Storage";
import GitHubIcon from "@material-ui/icons/GitHub";
import Trail from "./hi";
import { Carousel } from "react-responsive-carousel";
import login2 from "./images/login2.png";
import home from "./images/home.png";
import single from "./images/single.png";
import logo4 from "./images/logo4.png";
import first1 from "./images/first1.png";
import first2 from "./images/first2.png";
import first3 from "./images/first3.png";
import cook1 from "./images/cook1.png";
import ugali1 from "./images/ugali1.png";
import kochen from "./images/kochen.png";
import love from "./images/love.png";
import testen from "./images/testen.png";
import newUgali from "./images/newUgali.png";
import newLove from "./images/newLove.png";
import newLoove from "./images/newLoove.png";
import pic1 from "./images/pic1.png";
import neu1 from "./images/neu1.png";
import todo1 from "./images/todo1.jpg";
import todo2 from "./images/todo2.jpg";
import todo3 from "./images/todo3.jpg";
import portfolio1 from "./images/portfolio1.jpg";
import portfolio2 from "./images/portfolio2.jpg";
import portfolio3 from "./images/portfolio3.jpg";
import portfolio4 from "./images/portfolio4.jpg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import Cards from "./card";
import CV from "./cv";
import Info from "./info";
import CodingCard from "./codingCards";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { DiReact } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { IoIosGitNetwork } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import Footer from "./footer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import CVneu from "./images/CVneu.jpg";
// import TemporaryDrawer from "./navbarneu";
import Navbarneu from "./navbarneu";
import { IoMdGlobe } from "react-icons/io";
import { GiPalmTree } from "react-icons/gi";
import { MdBeachAccess } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MdPeopleOutline } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";
import CodingCertificate from "./CodingCertificate";
import Bachelor from "./BachelorOfArts";
import CertificateIV from "./CertificateIV";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function App() {
  const [click, setClick] = useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [load, setLoad] = useState(null);
  const [open, sets] = useState(true);
  const [code, setCode] = useState(null);
  const [code2, setCode2] = useState(null);
  const [logo, setLogo] = useState(null);
  const [counter, setCounter] = useState(12);
  const [buttonText, setButtonText] = useState(null);
  const [skills, setSkills] = useState(null);
  const [projects, setProjects] = useState(null);
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [top, setTop] = useState(null);
  const [changeNavigation, setChangeNavigation] = useState(null);
  const [changeToSide, setChangeToSide] = useState(null);
  const [aboutMeDiv, setAboutMeDiv] = useState(null);
  const [codingskillDiv, setcodingskillDiv] = useState(null);

  const counter1 = useRef(null);
  const button = useRef(null);
  const button1 = useRef(null);
  const codingSkills = useRef(null);
  const projectsButton = useRef(null);
  const aboutMeButton = useRef(null);
  const contactMeButton = useRef(null);
  const changeNavbar = useRef(null);
  const mainNav = useRef(null);
  const navbarNeuDivHidden = useRef(null);
  const topButton = useRef(null);
  const icons = useRef(null);
  const navbarVisible = useRef(null);

  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const Codes = ["JavaScript", "ReactJS", "NodeJS"];
  const Codes2 = ["NodeJS", "MongoDB", "Git"];

  //REACT SPRING SLIDER
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${
      delta[0] < 0 ? "#f093fb 0%, #f5576c" : "#96fbc4 0%, #f9f586"
    } 100%)`,
    size: down ? 1.1 : 1,
    immediate: (name) => down && name === "x",
  });
  const avSize = x.interpolate({
    map: Math.abs,
    range: [50, 300],
    output: ["scale(0.5)", "scale(1)"],
    extrapolate: "clamp",
  });
  /////////////

  /// TOOLTIP
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "lightgrey",
      color: "white",
      boxShadow: theme.shadows[1],
      fontFamily: "Quicksand",
      fontSize: 26,
      maxWidth: 600,
    },
  }))(Tooltip);
  ///////

  ////EVENTHANDLERS
  const handleClick = (e) => {
    setClick(e.target);
  };

  const handleAboutMeDiv = (e) => {
    setAboutMeDiv(e.target);
  };

  const handleCodingskillDiv = (e) => {
    setcodingskillDiv(e.target);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setButtonText(!buttonText);
    buttonText
      ? (button.current.innerText = "Resume")
      : (button.current.innerText = "Close Resume");
    buttonText
      ? (button.current.style.backgroundColor = "rgb(245, 245, 245,0.2)")
      : (button.current.style.backgroundColor = "lightgreen");
    buttonText
      ? (button1.current.innerText = "Resume")
      : (button1.current.innerText = "Close Resume");
    buttonText
      ? (button1.current.style.backgroundColor = "#E0E0E0")
      : (button1.current.style.backgroundColor = "lightgreen");
    !buttonText
      ? (button.current.style.right = "0")
      : (button.current.style.right = "-40px");
  };

  const handleSkills = () => {
    setSkills(!skills);
    skills
      ? (codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)")
      : (codingSkills.current.style.backgroundColor = "lightgreen");
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleProjects = () => {
    setProjects(!projects);
    projects
      ? (projectsButton.current.style.backgroundColor =
          "rgb(245, 245, 245,0.2)")
      : (projectsButton.current.style.backgroundColor = "lightgreen");
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleAboutMe = () => {
    setAbout(!about);
    about
      ? (aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)")
      : (aboutMeButton.current.style.backgroundColor = "lightgreen");
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleContactMe = () => {
    setContact(!contact);
    contact
      ? (contactMeButton.current.style.backgroundColor =
          "rgb(245, 245, 245,0.2)")
      : (contactMeButton.current.style.backgroundColor = "lightgreen");
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleTop = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleSkillsSide = () => {
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleProjectsSide = () => {
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleAboutMeSide = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleContactMeSide = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleNav = (e) => {
    // setChangeNavigation(!changeNavigation);
    // changeNavigation
    //   ? (mainNav.current.style.visibility = "hidden")
    //   : (mainNav.current.style.visibility = "visible");
    mainNav.current.style.visibility = "visible";
    codingSkills.current.style.visibility = "hidden";
    projectsButton.current.style.visibility = "hidden";
    contactMeButton.current.style.visibility = "hidden";
    aboutMeButton.current.style.visibility = "hidden";
    button.current.style.visibility = "hidden";
    topButton.current.style.visibility = "hidden";
    icons.current.style.visibility = "hidden";
    changeNavbar.current.style.visibility = "hidden";
    navbarVisible.current.style.visibility = "visible";
  };

  const handleVisible = (e) => {
    setChangeToSide(e.target);
    codingSkills.current.style.visibility = "visible";
    projectsButton.current.style.visibility = "visible";
    contactMeButton.current.style.visibility = "visible";
    aboutMeButton.current.style.visibility = "visible";
    button.current.style.visibility = "visible";
    topButton.current.style.visibility = "visible";
    icons.current.style.visibility = "visible";
    changeNavbar.current.style.visibility = "visible";
    navbarVisible.current.style.visibility = "hidden";
    mainNav.current.style.visibility = "hidden";
  };
  //////

  ////REACT SPRING TRAIL
  useEffect(() => {
    if (open || set) {
      return <Trail />;
    }
  }, []);
  ////

  //////
  useEffect(() => {
    const interval = setInterval(() => {
      setCode(Codes[Math.floor(Math.random() * Codes.length)]);
      setCode2(Codes2[Math.floor(Math.random() * Codes2.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  /////

  ///counter///

  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  //   if (counter === 0) {
  //     return (counter1.current.style.visibility = "hidden");
  //   }
  // }, [counter]);

  /////

  return (
    <div
      className="App"
      // style={{ minWidth: "100%" }}
    >
    <Switch>
    <Route exact path='/'>
      <div
        className="navbarDiv"
        // data-aos="zoom-out-left"
        // data-aos-delay="100"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-cubic"
        // style={{
        //   backgroundColor: "#343136",
        //   minWidth: "100%",
        //   display: "flex",
        //   position: "fixed",
        //   top: "0%",
        //   zIndex: "10",
        // }}
      >
        <div
          className="navbar"
          // style={{
          //   width: "100%",
          //   display: "flex",
          //   justifyContent: "space-around",
          //   marginTop: "10px",
          //   marginRight: "20px",
          //   marginBottom: "10px",
          // }}
          ref={mainNav}
        >
          {/* {changeToSide && <Button
              className="navbutton"
              variant="contained"
              style={{ fontSize: "1.4vh"}}
              
            >
              NAVBAR SIDE
            </Button>} */}
          <a href="#codingSkills" style={{ textDecoration: "none" }}>
            <Button
              className="navbutton"
              variant="contained"
              style={{ fontSize: "1.4vh" }}
              onClick={handleSkills}
            >
              My Coding Skills
            </Button>
          </a>
          <a href="#myProjects" style={{ textDecoration: "none" }}>
            <Button
              className="navbutton"
              variant="contained"
              color="disabled"
              style={{ fontSize: "1.4vh" }}
              onClick={handleProjects}
            >
              My Projects
            </Button>
          </a>
          <a href="#resume" style={{ textDecoration: "none" }}>
            <Button
              className="navbutton"
              variant="contained"
              color="disabled"
              onClick={handleExpandClick}
              style={{ fontSize: "1.4vh" }}
              ref={button1}
            >
              Resume
            </Button>
          </a>
          <a href="#aboutMe" style={{ textDecoration: "none" }}>
            <Button
              className="navbutton"
              variant="contained"
              color="disabled"
              style={{ fontSize: "1.4vh" }}
              onClick={handleAboutMe}
            >
              About me
            </Button>
          </a>
          <a href="#contactMe" style={{ textDecoration: "none" }}>
            <Button
              className="navbutton"
              variant="contained"
              color="disabled"
              style={{ fontSize: "1.4vh" }}
              onClick={handleContactMe}
            >
              Contact Me
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
            target="_blanc"
            style={{ textDecoration: "none" }}
          >
            <LinkedInIcon
              className="linkedin"
              color="primary"
              style={{ fontSize: "3.4vh" }}
            />
          </a>
          <a
            href="https://github.com/Staifo"
            target="_blanc"
            style={{ textDecoration: "none" }}
          >
            <GitHubIcon
              className="git"
              color="primary"
              style={{ fontSize: "3.4vh" }}
            />
          </a>
        </div>
      </div>
      {/* <Switch>
        <Route path='/codingcertificate'>
        <CodingCertificate/>
        </Route>
        <Route path='/bachelor'>
        <Bachelor/>
        </Route>
        <Route path='/certificateiv'>
        <CertificateIV/>
        </Route>
      </Switch> */}
      <Navbarneu
        handleExpandClick={handleExpandClick}
        button={button}
        codingSkills={codingSkills}
        projectsButton={projectsButton}
        aboutMeButton={aboutMeButton}
        contactMeButton={contactMeButton}
        handleSkillsSide={handleSkills}
        handleAboutMeSide={handleAboutMe}
        handleContactMeSide={handleContactMe}
        handleProjectsSide={handleProjects}
        handleTop={handleTop}
        handleNav={handleNav}
        changeNavbar={changeNavbar}
        navbarNeuDivHidden={navbarNeuDivHidden}
        topButton={topButton}
        icons={icons}
        navbarVisible={navbarVisible}
        handleVisible={handleVisible}
      />
      <div
        id="top"
        className="jumbo"
        // style={{
        //   width: "100%",
        //   height: "110vh",
        //   display: "flex",
        //   justifyContent: "center",
        // }}
      >
        <div
          className="jumbo1"
          // style={{
          //   width: "100%",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   height: "100vh",
          // }}
        >
          <div
            className="jumbo2"
            // style={{
            //   width: "100%",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   height: "max-content",
            // }}
          >
            <div
              className="jumbo4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="4000"
              // className="image"
              // style={{
              //   width: "max-content",
              //   height: "min-content",
              //   marginRight: "20px",
              // }}
            >
              <img
                className="image"
                id="image"
                src={CVImage}
                width="360px"
                style={{ borderRadius: "10%" }}
              />
            </div>
            <div
              className="square2"
              // style={{ display: "flex", height: "100%" }}
            >
              <div
                className="square"
                // style={{ width: "20px" }}
              >
                <div
                  id="square1"
                  // style={{ width: "100%", height: "100%" }}
                ></div>
              </div>
            </div>
            <div
              className="trailDiv"
              data-aos="fade-up-right"
              data-aos-duration="4000"
              // style={{
              // lineHeight: "100px",
              // marginLeft: "20px",
              // color: "white",
              // height: "100%",

              // textAlign: "center",
              // display: "flex",
              // alignItems: "center",
              // marginTop: "64px",
              // marginLeft: "20px",
              // border: '10px solid green'
              // }}
            >
              {" "}
              {/* <Trail
                open={open}
                onClick={() => set((state) => state)}
                style={{ fontSize: "calc(30px + 0.6vw)", marginBottom: "44%" }}
              > */}
              <div
                className="trailDiv2"
                // style={{
                //   color: "lightgrey",
                //   fontFamily: "Impact",
                //   fontWeight: "bold",
                //   opacity: "1",
                //   color: "grey",
                //   textAlign: "left",
                //   display: "flex",
                //   flexDirection: "column",
                //   height: "max-content",
                // }}
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="4000"
                  style={{ height: "max-content" }}
                >
                  Hi,
                </div>
                <div
                  className="hi"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                  style={{ height: "max-content" }}
                >
                  I'm Istayfo Ergün
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="6000"
                  className="junior"
                  id="junior"
                  // style={{
                  //   fontFamily: "Impact",
                  //   fontWeight: "bold",
                  //   opacity: "1",
                  //   color: "grey",
                  //   textAlign: "left",
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   height: "max-content",
                  // }}
                >
                  <div style={{ height: "max-content" }}>Junior</div>
                  <div style={{ height: "max-content" }}>Web</div>
                  <div style={{ height: "max-content" }}>
                    Developer<span style={{ fontSize: "100px" }}>.</span>
                  </div>
                </div>
              </div>
              {/* <br /> */}
              {/* <span style={{ color: "lightgrey", fontFamily: 'Indie Flower', position: "absolute",}}>...welcome to my portfolio</span> */}
              {/* <div
                  className="junior"
                  style={{
                    fontSize: "calc(40px + 4.2vw)",
                    fontFamily: "Impact",
                    fontWeight: "bold",
                    opacity: "1",
                    color: "grey",
                    // color: "#343136",
                    // textShadow: "4px 4px blue",
                    textAlign: "left",
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '100px'
                  }}
                >
                  <p>Junior</p> 
                    <p>Web</p>
                     <p>Developer<span style={{ fontSize: "100px" }}>.</span></p>
                  
                </div> */}
              {/* </Trail> */}
              <div
                className="welcome"
                // data-aos="fade-up-left"
                // data-aos-delay="1600"
                // data-aos-duration="2000"
                // style={{
                //   color: "lightgrey",
                //   fontFamily: "Indie Flower",
                //   position: "absolute",
                //   fontSize: "calc(20px + 1.2vw)",
                //   transform: "rotate(-6deg)",
                //   zIndex: "10",
                // }}
              >
                <div
                  className="welcome2"
                  style={{ fontSize: "calc(28px + 1vw" }}
                >
                  {" "}
                  ...welcome, let's do great things
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="count"
          ref={counter1}
          // style={{
          //   position: "absolute",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <div
            className="count1"
            // style={{
            //   fontSize: "200px",
            //   fontFamily: "Impact",
            //   color: "lightgrey",
            //   opacity: "0.2",
            // }}
          >
            {/* {counter} */}
          </div>
        </div>
      </div>
      <div id="resume" style={{ width: "100%" }}>
        <Card className={classes.root}>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div
                className="codeList"
                // style={{
                //   width: "100%",
                //   display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                // }}
              >
                <div
                  className="codeList1"
                  // style={{
                  //   width: "60%",
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   flexDirection: "column",
                  //   alignItems: "center",
                  // }}
                >
                  <Cards />
                  <hr style={{ width: "90%", borderColor: "1px solid blue" }} />
                  <div
                    className="codeList2"
                    // style={{
                    //   fontFamily: "Quicksand",
                    //   fontSize: "calc(10px + 0.5vw)",
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   alignItems: "center",
                    // }}
                  >
                    If you want to know more about me and my career path you can
                    have a look at my resume
                  </div>
                  <hr style={{ width: "90%", borderColor: "1px solid blue" }} />
                  <div className="design"></div>
                  {/* <img src={CVneu} width="100%" /> */}
                  <CV />
                </div>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      {/* <div
        className="aboutMe"
        style={{
          width: "100%",
          height: "200px",
          fontFamily: "Quicksand",
          fontSize: "30px",
          height: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
         
        }}
      >
        <div
          className="about"
          style={{
            fontSize: "220px",
            position: "absolute",
            zIndex: "0",
            fontFamily: "Impact",
            fontWeight: "bold",
            display: "flex",
            lineHeight: "180px",
            minWidth: "100%",
            textAlign: 'left',
            flexDirection: "column",
            marginTop: "10px",
            marginLeft: '30px'
            
          }}
        >
          <span
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            About
          </span>
          <span
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            style={{ display: "flex" }}
          >
            Me
          </span>
        </div> */}

      {/* <div
        className="myProjects"
        style={{
          width: "100%",
        }}
      >
        <div
          className="myProjects2"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "min-content",
          //   marginTop: "20px",
          //   width: "100%",
          //   height: "max-content",
          //   backgroundColor: "rgb(173, 216, 230, 0.1)",
          // }}
        >
          <span
            style={{ height: "max-content", lineHeight: "160px" }}
            className="nice"
          >
            About
          </span>
          <span id="aboutMe" className="nice" style={{ display: "flex" }}>
            Me{" "}
            <div
              className="arrow2"
              style={{ marginLeft: "10px", marginTop: "40px" }}
            ></div>
          </span>
        </div>
      </div> */}
      {/* <div
        className="iconContainer"
      >
        <div className="globe">
          <IoMdGlobe
            style={{ fontSize: "40px", zIndex: "0" }}
          />
        </div>
        <GiPalmTree
          className="palmtree"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <MdBeachAccess
          className="umbrella"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <GiGraduateCap
          className="student"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <MdPeopleOutline
          className="people"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <HiOutlineCode
          className="code"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
      </div> */}
      {!aboutMeDiv && (
        <div
          id="aboutMe"
          className="aboutMeDiv1"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              zIndex: "9",
            }}
          >
            {/* <div style={{position:'absolute', zIndex:'0',}}>
          <div className="globe2">
          <IoMdGlobe 
            style={{ fontSize: "40px", zIndex: "0" }}
          />
        </div>
        <GiPalmTree
          className="palmtree2"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <GiGraduateCap
          className="student2"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <MdPeopleOutline
          className="people2"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <HiOutlineCode
          className="code2"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
          </div> */}
            <animated.div {...bind()} class="item" style={{ background: bg }}>
              {" "}
              <div
                style={{
                  fontFamily: "Quicksand",
                  color: "white",
                  fontSize: "40px",
                  position: "absolute",
                  textAlign: "center",
                  width: "100%",
                  marginLeft: "2px",
                }}
              >
                About Me
              </div>
              <animated.div
                class="av"
                style={{
                  transform: avSize,
                  justifySelf: delta[0] < 0 ? "end" : "start",
                }}
              />
              <animated.div
                onClick={handleAboutMeDiv}
                onTouchMove={handleAboutMeDiv}
                id="slider"
                class="fg"
                style={{
                  transform: interpolate(
                    [x, size],
                    (x, s) => `translate3d(${x}px,0,0) scale(${s})`
                  ),
                  fontFamily: "Quicksand",
                }}
              >
                <div id="aboutSpan">About Me.</div>
              </animated.div>
            </animated.div>
          </div>
        </div>
      )}
      {aboutMeDiv && (
        <div
          className="aboutMeDiv"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* <div style={{position:'absolute', zIndex:'0',}}>
          <div className="globe3">
          <IoMdGlobe 
            style={{ fontSize: "40px", zIndex: "0" }}
          />
        </div>
        <GiPalmTree
          className="palmtree3"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <GiGraduateCap
          className="student3"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <MdPeopleOutline
          className="people3"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
        <HiOutlineCode
          className="code3"
          style={{ fontSize: "40px", zIndex: "0" }}
        />
          </div> */}
          <div className="animationTest">
            <div className="animationTest1">About Me</div>
            <div className="animationTest2"> I traveled the world</div>
            <div className="animationTest3">I studied</div>
            <div className="animationTest4">Now I code</div>
          </div>
          <div
            id="info"
            // style={{
            //   padding: "40px",
            //   width: "100%",
            //   zIndex: "10",
            //   textAlign: "justify",
            //   display: "flex",
            //   justifyContent: "center",
            //   marginTop: "140px",
            // }}
          >
            <div
              id="info2"
              // style={{
              //   width: "60%",
              //   fontSize: "25px",
              //   fontFamily: "Quicksand",
              // }}
            >
              {" "}
              "Coding is the manifestation of ideas and visions into reality! As
              far as I can remember I was interested in coding. After finishing
              highschool I went to the public library, grabbed a book about HTML
              and wrote my first code. However, I studied International
              Business, gained experience in Sales and traveled the world, just
              to realize that coding is my calling. I love seeing how code has
              an immediate impact and result. I love solving problems and
              communicating. Let’s create great things!"
            </div>
          </div>
        </div>
      )}
      {/* <div
        className="codingLang"
        style={{
          width: "100%",
          display: "flex",
          height: "min-content",
        }}
      > */}

      {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
            width: "max-content",
            marginLeft: "20px",
          }}
        >
          <span className="nice">My</span>
          <span style={{ display: "flex" }} className="nice">
            Coding{" "}
            <div
              className="arrow"
              style={{ marginLeft: "20px", marginTop: "60px" }}
            ></div>
          </span>
          <span className="nice" style={{}}>
            Skills{" "}
            <span
              style={{
                border: "10px solid yellow",
                fontFamily: "Quicksand",
                fontSize: "90px",
                borderTop: "hidden",
              }}
            >
              <span style={{ padding: "20px" }}>{code}</span>
            </span>
          </span>
        </div> */}

      {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {code === "JavaScript" && (
            <SiJavascript className="logo" style={{ fontSize: "2000%" }} />
          )}
          {code === "ReactJS" && (
            <DiReact className="logo" style={{ fontSize: "2200%" }} />
          )}
          {code === "NodeJS" && (
            <IoLogoNodejs className="logo" style={{ fontSize: "2200%" }} />
          )}
        </div>
      </div> */}
      {!codingskillDiv && (
        <div
          id="codingSkills"
          className="codingskillDiv"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="codingSkillmarginTop"
            style={{
              display: "flex",
              justifyContent: "center",
              zIndex: "9",
            }}
          >
            <animated.div {...bind()} class="item" style={{ background: bg }}>
              {" "}
              <div
                style={{
                  fontFamily: "Quicksand",
                  color: "white",
                  fontSize: "40px",
                  position: "absolute",
                  textAlign: "center",
                  width: "100%",
                  marginLeft: "2px",
                }}
              >
                Coding Skills
              </div>
              <animated.div
                class="av"
                style={{
                  transform: avSize,
                  justifySelf: delta[0] < 0 ? "end" : "start",
                }}
              />
              <animated.div
                onClick={handleCodingskillDiv}
                onTouchMove={handleCodingskillDiv}
                id="slider"
                class="fg"
                style={{
                  transform: interpolate(
                    [x, size],
                    (x, s) => `translate3d(${x}px,0,0) scale(${s})`
                  ),
                  fontFamily: "Quicksand",
                }}
              >
                Coding Skills.
              </animated.div>
            </animated.div>
          </div>
        </div>
      )}

      {codingskillDiv && (
        <div className="codeCard2" style={{ width: "100%" }}>
          <CodingCard
            codingskillDiv={codingskillDiv}
            code={code}
            code2={code2}
          />
        </div>
      )}
      <div
        // id='myProjects'
        className="projects"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <div
          className="codingLang"
          style={{
            width: "100%",
            display: "flex",
            height: "min-content",
          }}
        > */}

        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
            width: "max-content",
            marginLeft: "20px",
          }}
        >
          <span className="nice">My</span>
          <span style={{ display: "flex" }} className="nice">
            Coding{" "}
            <div
              className="arrow"
              style={{ marginLeft: "20px", marginTop: "60px" }}
            ></div>
          </span>
          <span className="nice" style={{}}>
            Skills{" "}
            <span
              style={{
                border: "10px solid yellow",
                fontFamily: "Quicksand",
                fontSize: "90px",
                borderTop: "hidden",
              }}
            >
              <span style={{ padding: "20px" }}>{code}</span>
            </span>
          </span>
        </div> */}

        {/* <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {code2 === "NodeJS" && (
              <IoLogoNodejs className="logo" style={{ fontSize: "2000%" }} />
            )}
            {code2 === "MongoDB" && (
              <DiMongodb className="logo" style={{ fontSize: "2200%" }} />
            )}
            {code2 === "Git" && (
              <IoIosGitNetwork className="logo" style={{ fontSize: "2200%" }} />
            )}
          </div>
        </div>
        <div id="myProjects"></div> */}
        <div id="myProjects"></div>

        {/* <div
          className="myProjects"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            border:'10px solid yellow'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "min-content",
              // marginTop: "160px",
              width: "100%",
              height: "max-content",
              backgroundColor: "rgb(173, 216, 230, 0.1)",
              height:'200px'
            }}
          >
            <span className="nice">My</span>
            <span style={{ display: "flex" }} className="nice">
              Projects{" "}
              <div
                id="myProjects"
                className="arrow2"
                style={{ marginLeft: "10px", marginTop: "40px" }}
              ></div>
            </span>
          </div>
        </div> */}
        {!click && (
          <div
            style={{
              width: "100%",
              // height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20%",
              marginTop: "120px",
            }}
          >
            <Projects />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                zIndex: "9",
                position: "absolute",
                marginTop: "130px",
              }}
            >
              <animated.div {...bind()} class="item" style={{ background: bg }}>
                {" "}
                <div
                  style={{
                    fontFamily: "Quicksand",
                    color: "white",
                    fontSize: "40px",
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    marginLeft: "2px",
                  }}
                >
                  My Projects
                </div>
                <animated.div
                  class="av"
                  style={{
                    transform: avSize,
                    justifySelf: delta[0] < 0 ? "end" : "start",
                  }}
                />
                <animated.div
                  onClick={handleClick}
                  onTouchMove={handleClick}
                  id="slider"
                  class="fg"
                  style={{
                    transform: interpolate(
                      [x, size],
                      (x, s) => `translate3d(${x}px,0,0) scale(${s})`
                    ),
                    fontFamily: "Quicksand",
                  }}
                >
                  My Projects.
                </animated.div>
              </animated.div>
            </div>
          </div>
        )}

        {click && (
          <div
            style={{
              // width: "100%",
              height: "100%",
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              // marginBottom: "80%",
              // height:'100vh'
            }}
          >
            <div
              //in case I want to use react spring animated.div
              // class="card"
              // onMouseMove={({ clientX: x, clientY: y }) =>
              //   set({ xys: calc(x, y) })
              // }
              // onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                // transform: props.xys.interpolate(trans),
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  data-aos="zoom-out-right"
                  data-aos-offset="160"
                  data-aos-duration="3000"
                  style={{
                    border: "2px solid lightgrey",
                    height: "630px",
                    marginBottom: "6%",
                  }}
                >
                  <LightTooltip
                    title="https://junior-coder.netlify.app/"
                    placement="top"
                  >
                    <a
                      target="_blank"
                      href="https://junior-coder.netlify.app/"
                      style={{ color: "white" }}
                    >
                      <div
                        className="juniorCoder"
                        style={{
                          fontFamily: "Impact",
                          fontSize: "70px",
                          width: "100%",
                          textAlign: "center",
                          backgroundColor: "lightgrey",
                        }}
                      >
                        JuniorCoder{" "}
                        <span
                          style={{ fontSize: "70px", fontFamily: "Quicksand" }}
                        >
                          {" "}
                          - My Final Project
                        </span>
                      </div>
                    </a>
                  </LightTooltip>
                  <Info />

                  <a target="_blank" href="https://junior-coder.netlify.app/">
                    <div
                      className="button"
                      color="primary"
                      onClick={handleClick}
                      style={{ width: "1000px", height: "400px" }}
                    >
                      <Carousel autoPlay infiniteLoop>
                        <div>
                          <img alt="" src={login2} />
                        </div>
                        <div>
                          <img alt="" src={home} />
                        </div>
                        <div>
                          <img alt="" src={single} />
                        </div>
                      </Carousel>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="otherProjects"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginBottom: "60px",
              }}
            >
              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{
                  border: "2px solid lightgrey",
                  height: "400px",
                  width: "max-content",
                }}
              >
                <div
                  style={{
                    width: "max-content",
                    height: "max-content",
                  }}
                >
                  <LightTooltip
                    title="https://leckerlecker.netlify.app"
                    placement="top"
                  >
                    <a href="https://leckerlecker.netlify.app" target="_blanc">
                      <div
                        style={{
                          fontFamily: "Quicksand",
                          color: "grey",
                          textAlign: "center",
                          fontSize: "16px",
                          width: "400px",
                        }}
                      >
                        <b>COOKBOOK:</b> Our first group project - duration 1
                        week - creating a cookbook using just HTML5 and CSS3-not
                        responsive and not 100% finished
                      </div>
                    </a>
                  </LightTooltip>
                  <a href="https://leckerlecker.netlify.app" target="_blanc">
                    <div className="otherProjects1">
                      <img alt="" src={first1} width="400px" height="300px" />
                      {/* <Carousel autoPlay infiniteLoop>
                      <div>
                        <img alt="" src={first1} />
                      </div>
                      <div>
                        <img alt="" src={first2} />
                      </div>
                      <div>
                        <img alt="" src={first3} />
                      </div>
                    </Carousel> */}
                    </div>
                  </a>
                </div>
              </div>

              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{
                  border: "2px solid lightgrey",
                  height: "400px",
                  width: "max-content",
                }}
              >
                <div
                  style={{
                    width: "max-content",
                    height: "max-content",
                  }}
                >
                  <LightTooltip
                    title="https://todoodo.netlify.app"
                    placement="top"
                  >
                    <a href="https://todoodo.netlify.app" target="_blanc">
                      <div
                        style={{
                          fontFamily: "Quicksand",
                          color: "grey",
                          textAlign: "center",
                          fontSize: "16px",
                          width: "400px",
                        }}
                      >
                        <b>TODO LIST:</b> Solo work - duration 1 week - creating
                        a Todo list using Vanilla JavaScript
                      </div>
                    </a>
                  </LightTooltip>
                  <a href="https://todoodo.netlify.app" target="_blanc">
                    <div>
                      <img alt="" src={todo1} width="400px" />
                    </div>
                    {/* <Carousel autoPlay infiniteLoop>
                      <div>
                        <img alt="" src={todo1} />
                      </div>
                      <div>
                        <img alt="" src={todo2} />
                      </div>
                      <div>
                        <img alt="" src={todo3} />
                      </div>
                    </Carousel> */}
                  </a>
                </div>
              </div>
              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{ border: "2px solid lightgrey", height: "400px" }}
              >
                <div
                  style={{
                    width: "max-content",
                    height: "max-content",
                  }}
                >
                  <LightTooltip
                    title="https://portfolio-istayfo-ergun.netlify.app/"
                    placement="top"
                  >
                    <a
                      href="https://portfolio-istayfo-ergun.netlify.app/"
                      target="_blanc"
                    >
                      <div
                        style={{
                          fontFamily: "Quicksand",
                          color: "grey",
                          textAlign: "center",
                          fontSize: "16px",
                          width: "400px",
                        }}
                      >
                        <b>My Portfolio:</b> Surprise - I concider my portfolio,
                        which I created myself from scratch, as a project on its
                        own.
                      </div>
                    </a>
                  </LightTooltip>
                  <div>
                    <img alt="" src={portfolio1} width="400px" />
                  </div>
                  {/* <Carousel autoPlay infiniteLoop>
                    <div>
                      <img alt="" src={portfolio1} />
                    </div>
                    <div>
                      <img alt="" src={portfolio4} />
                    </div>
                    <div>
                      <img alt="" src={portfolio3} />
                    </div>
                  </Carousel> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <div
        className="footer"
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#343136",
          position: "sticky",
          bottom: "0",
          zIndex: "10",
        }}
      ></div>
      </Route>
      <Route path='/codingcertificate'>
        <CodingCertificate/>
        </Route>
        <Route path='/bachelor'>
        <Bachelor/>
        </Route>
        <Route path='/certificateiv'>
        <CertificateIV/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
