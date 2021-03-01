import "./App.css";
import React, { useState, useEffect, useRef } from "react";
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
  const [logo, setLogo] = useState(null);
  const [counter, setCounter] = useState(12);
  const [buttonText, setButtonText] = useState(null);
  const [skills, setSkills] = useState(null);
  const [projects, setProjects] = useState(null);
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [top, setTop] = useState(null);
  const counter1 = useRef(null);
  const button = useRef(null);
  const button1 = useRef(null);
  const codingSkills = useRef(null);
  const projectsButton = useRef(null);
  const aboutMeButton = useRef(null);
  const contactMeButton = useRef(null);

  const classes = useStyles();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const Codes = ["JavaScript", "ReactJS", "NodeJS"];

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
      ? (projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)")
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
      ? (contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)")
      : (contactMeButton.current.style.backgroundColor = "lightgreen");
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleTop = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)"
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  };

  const handleSkillsSide = () => {
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)"
  }

  const handleProjectsSide = () => {
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)"
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  }

  const handleAboutMeSide = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)"
  }

  const handleContactMeSide = () => {
    codingSkills.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    projectsButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
    contactMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)"
    aboutMeButton.current.style.backgroundColor = "rgb(245, 245, 245,0.2)";
  }
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
      // setLogo(logos[Math.floor(Math.random() * logos.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  /////

  ///counter

  useEffect(() => {
    // if(counter > 0){
    //   return setTimeout(() => setCounter(counter - 1), 1000)
    // } else if  (counter === 0) {
    //   return counter1.current.style.visibility = 'hidden'
    // }
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      return (counter1.current.style.visibility = "hidden");
    }
  }, [counter]);

  /////

  return (
    <div className="App" style={{ minWidth: "100%" }}>
      <div
        className="navbarDiv"
        // data-aos="zoom-out-left"
        // data-aos-delay="100"
        // data-aos-duration="2000"
        // data-aos-easing="ease-in-cubic"
        style={{
          backgroundColor: "#343136",
          minWidth: "100%",
          display: "flex",
          // justifyContent: "flex-end",
          position: "fixed",
          top: "0%",
          zIndex: "10",
          // marginLeft: '40%'
        }}
      >
        <div
          className="navbar"
          class
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
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
      />
      <div
        id="top"
        className="jumbo"
        style={{
          width: "100%",
          height: "110vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
            }}
          >
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="4000"
              className="image"
              style={{
                width: "max-content",
                height: "min-content",
                // marginTop: "9%",
                marginRight: "20px",
              }}
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
              style={{ display: "flex", height: "100%" }}
            >
              <div className="square" style={{ width: "20px" }}>
                <div
                  id="square1"
                  style={{ width: "100%", height: "100%" }}
                ></div>
              </div>
            </div>
            <div
              className="trailDiv"
              data-aos="fade-up-right"
              data-aos-duration="4000"
              style={{
                lineHeight: "100px",
                marginLeft: "20px",
                // color: "white",
                // height: "100%",

                // textAlign: "center",
                // display: "flex",
                // alignItems: "center",
                // marginTop: "64px",
                // marginLeft: "20px",
                // border: '10px solid green'
              }}
            >
              {" "}
              {/* <Trail
                open={open}
                onClick={() => set((state) => state)}
                style={{ fontSize: "calc(30px + 0.6vw)", marginBottom: "44%" }}
              > */}
              <div
                className="trailDiv2"
                style={{
                  color: "lightgrey",
                  // fontSize: "calc(90px + 1.4vw)",
                  fontFamily: "Impact",
                  fontWeight: "bold",
                  opacity: "1",
                  color: "grey",
                  // color: "#343136",
                  // textShadow: "4px 4px blue",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  height: "max-content",
                }}
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
                  style={{
                    // fontSize: "calc(90px + 1.4vw)",
                    fontFamily: "Impact",
                    fontWeight: "bold",
                    opacity: "1",
                    color: "grey",
                    // color: "#343136",
                    // textShadow: "4px 4px blue",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    height: "max-content",
                    // marginTop: '100px'
                  }}
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
                style={{
                  color: "lightgrey",
                  fontFamily: "Indie Flower",
                  position: "absolute",
                  fontSize: "calc(20px + 1.2vw)",
                  // marginLeft: "26%",
                  transform: "rotate(-6deg)",
                  zIndex: "10",
                  // marginTop: '6%'
                }}
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
          ref={counter1}
          style={{
            // border: "10px solid red",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: '72%'
          }}
        >
          <div
            style={{
              fontSize: "200px",
              fontFamily: "Impact",
              color: "lightgrey",
              opacity: "0.2",
            }}
          >
            {/* {counter} */}
          </div>
        </div>
      </div>
      {/* <div style={{width: '100%', backgroundColor: '#343136', height: '40px'}}></div> */}
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
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Cards />
                  <hr style={{ width: "90%", borderColor: "1px solid blue" }} />
                  <div
                    style={{
                      fontFamily: "Quicksand",
                      fontSize: "calc(10px + 0.5vw)",
                      // marginBottom: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
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

      <div
        className="myProjects"
        style={{
          width: "100%",
          // height: "max-content",
          // display: "flex",
          // justifyContent: "space-evenly",
          // backgroundColor: 'grey'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
            marginTop: "20px",
            width: "100%",
            height: "max-content",
            backgroundColor: "rgb(173, 216, 230, 0.1)",
          }}
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
      </div>
      <div
      className='iconContainer'
        style={{
          width: "100%",
          height: "40%",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <div className="globe">
          <IoMdGlobe
            // className="globe"
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
      </div>
      <div
        className="info"
        style={{
          padding: "40px",
          width: "100%",
          zIndex: "10",
          textAlign: "justify",
          display: "flex",
          justifyContent: "center",
          marginTop: "140px",
        }}
      >
        <div
          style={{
            width: "60%",
            fontSize: "25px",
            fontFamily: "Quicksand",
          }}
        >
          {" "}
          "Coding is the manifestation of ideas and visions into reality! As far
          as I can remember I was interested in coding. After finishing
          highschool I went to the public library, grabbed a book about HTML and
          wrote my first code. However, I studied International Business, gained
          experience in Sales and traveled the world, just to realize that
          coding is my calling. I love seeing how code has an immediate impact
          and result. I love solving problems and communicating. Let’s create
          great things!"
        </div>
      </div>
      <div
        className="codingLang"
        style={{
          width: "100%",
          // height: "max-content",
          display: "flex",
          // justifyContent: "space-evenly",
          // backgroundColor: 'grey'
          height: "min-content",
          marginTop: "160px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
            // marginTop: "140px",
            width: "max-content",
            // backgroundColor: '#EEF7FF '
            marginLeft: "20px",
          }}
        >
          <span className="nice">My</span>
          <span style={{ display: "flex" }} className="nice">
            Coding{" "}
            <div
              className="arrow"
              // style={{ marginLeft: "20px", marginTop: "10px" }}
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
        </div>

        {/* <div data-aos="zoom-out-right" data-aos-offset="160"
     data-aos-duration="3000" style={{ width: "16%", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <span>
              <DvrIcon color="primary" fontSize="large" />
            </span>
            <span style={{ fontSize: "30px" }}>FRONT-END</span>
            <hr style={{ border: "1px solid blue", width: "20%" }} />
            <span style={{ fontSize: "20px" }}>HTML5</span>{" "}
            <span style={{ fontSize: "20px" }}>CSS3</span>{" "}
            <span style={{ fontSize: "20px" }}>Javascript</span>{" "}
            <span>ReactJS/Hooks</span> -{" "}
            <span style={{ fontSize: "20px" }}>Bootstrap</span>
            <span style={{ fontSize: "20px" }}>Material UI</span>
          </div>
        </div>
        <div data-aos="zoom-out-right" data-aos-offset="160"
     data-aos-duration="3000" style={{ width: "16%", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <span>
              <SettingsApplicationsIcon color="primary" fontSize="large" />
            </span>
            <span style={{ fontSize: "30px" }}>BACK-END</span>
            <hr style={{ border: "1px solid blue", width: "20%" }} />
            <span style={{ fontSize: "20px" }}>NodeJS</span>{" "}
            <span style={{ fontSize: "20px" }}>Express</span>
          </div>
        </div>
        <div data-aos="zoom-out-right" data-aos-offset="160"
     data-aos-duration="3000" style={{ width: "16%", textAlign: "center",}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <StorageIcon color="primary" fontSize="large" />
            </span>{" "}
            <span style={{ fontSize: "30px" }}>DATABASES</span>
            <hr style={{ border: "1px solid blue", width: "20%" }} />
            <span style={{ fontSize: "20px" }}>PostgreSQL</span>
            <span style={{ fontSize: "20px" }}>MongoDB</span>
          </div>
        </div>
        <div data-aos="zoom-out-right" data-aos-offset="160"
     data-aos-duration="3000" style={{ width: "16%", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <span>
              <GitHubIcon color="primary" fontSize="large" />
            </span>
            <span style={{ fontSize: "30px" }}>Hosting and Collabo</span>
            <hr style={{ border: "1px solid blue", width: "20%" }} />
            <span style={{ fontSize: "20px" }}>Github</span>
          </div>
        </div> */}
        <div
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
      </div>

      <div className="codeCard2" style={{ width: "100%" }}>
        <CodingCard />
      </div>

      {/* <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Quicksand",
          backgroundColor: "rgb(230, 225, 225,0.2)",
        }}
      >
        <div style={{ width: "16%", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(166, 217, 252, 0.1)",
              height: "400px",
            }}
          >
            {" "}
            <span style={{ marginTop: "40px" }}>
              <DvrIcon color="primary" fontSize="large" />
            </span>
            <span style={{ fontSize: "30px" }}>Project-Management</span>
            <hr style={{ border: "1px solid blue", width: "20%" }} />
            <span style={{ fontSize: "20px" }}>Agile Methods / Scrum</span>{" "}
          </div>
        </div>
      </div> */}

      <div
        className="projects"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <hr
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          style={{ width: "12%", color: "grey" }}
        /> */}
        {/* <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          className="myProjects"
          id="myProjects"
          style={{
            fontFamily: "Quicksand",
            fontSize: "40px",
            color: "grey",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p className="myProjectsText">My Projects</p>
        </div> */}
        {/* <hr
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          style={{ width: "12%", color: "grey" }}
        /> */}

        <div
          className="myProjects"
          style={{
            width: "100%",
            // height: "max-content",
            // display: "flex",
            // justifyContent: "space-evenly",
            // backgroundColor: 'grey'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "min-content",
              marginTop: "160px",
              width: "100%",
              height: "max-content",
              backgroundColor: "rgb(173, 216, 230, 0.1)",
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
        </div>
        {!click && (
          <div
            style={{
              width: "100%",
              height: "100%",
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
                  Slide or Click.
                </animated.div>
              </animated.div>
              {/* <Button
                className="projectsButton"
                style={{
                  height: "120px",
                  width: "340px",
                  fontSize: "40px",
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  backgroundColor: "rgb(230, 225, 225)",
                  color: "white",
                }}
                variant="contained"
                size="large"
                onClick={handleClick}
              >
                My Projects
              </Button> */}
            </div>
          </div>
        )}

        {click && (
          <div
            style={{
              width: "100%",
              height: "100%",
              marginTop: "100px",
              marginBottom: "10%",
            }}
          >
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                className="test"
                style={{
                  border: "2px solid black",
                  width: "400px",
                  height: "200px",
                }}ef
              >
            Hallo
              </div>
              <div
                style={{
                  border: "2px solid black",
                  width: "200px",
                  height: "200px",
                }}
              >
                Hallo
              </div>
            </div> */}
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
                      {/* <div style={{height: 'max-content', textAlign: 'center'}}>Individual work - created within 2 weeks</div> */}
                    </a>
                  </LightTooltip>
                  <Info />
                  {/* <div style={{backgroundColor: 'lightgrey', textAlign: 'center'}}>
                <IconButton id='clickme'
            // className={clsx(classes.expand, {
            //   [classes.expandOpen]: expanded,
            // })}
            // onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            
          >
            <span
              style={{
                fontSize: "16px",
                fontFamily: "Impact",
                // fontWeight: "bold",
                color: 'grey',
                
              }}
            >
              CLICK ME
            </span>
          </IconButton>
          </div> */}
                  <a target="_blank" href="https://junior-coder.netlify.app/">
                    <div
                      className="button"
                      color="primary"
                      onClick={handleClick}
                      style={{ width: "1000px", height: "400px",}}
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
                marginTop: "10%",
                marginBottom: "10%",
              }}
            >
              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{ border: "2px solid lightgrey", height: "540px" }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "200px",
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
                        }}
                      >
                        <b>COOKBOOK:</b> Our first group project - duration 1
                        week - creating a cookbook using just HTML5 and CSS3-not
                        responsive and not 100% finished
                      </div>
                    </a>
                  </LightTooltip>
                  <a href="https://leckerlecker.netlify.app" target="_blanc">
                    <Carousel autoPlay infiniteLoop>
                      <div>
                        <img alt="" src={first1} />
                      </div>
                      <div>
                        <img alt="" src={first2} />
                      </div>
                      <div>
                        <img alt="" src={first3} />
                      </div>
                    </Carousel>
                  </a>
                </div>
              </div>

              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{ border: "2px solid lightgrey", height: "540px" }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "200px",
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
                        }}
                      >
                        <b>TODO LIST:</b> Solo work - duration 1 week - creating
                        a Todo list using Vanilla JavaScript
                      </div>
                    </a>
                  </LightTooltip>
                  <a href="https://todoodo.netlify.app" target="_blanc">
                    <Carousel autoPlay infiniteLoop>
                      <div>
                        <img alt="" src={todo1} />
                      </div>
                      <div>
                        <img alt="" src={todo2} />
                      </div>
                      <div>
                        <img alt="" src={todo3} />
                      </div>
                    </Carousel>
                  </a>
                </div>
              </div>
              <div
                data-aos="zoom-out-right"
                data-aos-offset="160"
                data-aos-duration="3000"
                style={{ border: "2px solid lightgrey", height: "540px" }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "200px",
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
                        }}
                      >
                        <b>My Portfolio:</b> Surprise - I concider my portfolio,
                        which I created myself from scratch, as a project on its
                        own.
                      </div>
                    </a>
                  </LightTooltip>
                  {/* <a href='https://todoodo.netlify.app' target='_blanc'>
                  <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                      <img alt="" src={ugali1} />
                    </div>
                    <div>
                      <img alt="" src={kochen} />
                    </div>
                    <div>
                      <img alt="" src={love} />
                    </div>
                  </Carousel>
                  </a>
                  <div
                    style={{
                      fontFamily: "Quicksand",
                      color: "grey",
                      textAlign: "center",
                      width: "100%",
                      fontSize: "16px",
                    }}
                  >
                    ...and reacreating it using our own backend with Nodejs
                  </div> */}
                  <Carousel autoPlay infiniteLoop>
                    <div>
                      <img alt="" src={portfolio1} />
                    </div>
                    <div>
                      <img alt="" src={portfolio4} />
                    </div>
                    <div>
                      <img alt="" src={portfolio3} />
                    </div>
                  </Carousel>
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
    </div>
  );
}

export default App;
