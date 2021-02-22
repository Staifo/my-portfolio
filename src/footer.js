import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import CopyrightIcon from "@material-ui/icons/Copyright";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';


const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  const [sendMessage, setSendMessage] = useState(null);
  const [visitors, setVisitors] = useState(null);
  const sendMessageClick = useRef(null);
  const visitor = useRef(null);

  
const handleVisitor = () => {
setVisitors(!visitors);
visitors 
? visitor.current.style.visibility = 'visible' 
: visitor.current.style.visibility = 'hidden' 
}

  const handleClick = (e) => {
setSendMessage(e.target);
  }
  
  function sendEmail(e) {
    e.preventDefault();
  emailjs
      .sendForm(
        "gmail",
        "template_w1q8yk8",
        e.target,
        "user_BjIl2PZ9ESxBx8CpYdtxd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(()=>{ alert('Thanks for your message. I will get back to you as soon as possible. Have a good day.')}, 4000);
  }

  return (
    <div
      id="contactMe"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#343136",
        height: "max-content",
       
      }}
    >
    <div>
    </div>
      <div
        style={{
          color: "white",
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Send me a message
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "max-content",
        }}
      >
        <form
          style={{
            height: "400px",
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: "20px",
            marginTop: "40px",
            width: "40%",
            zIndex: '10',
          }}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <input type="hidden" name="contact_number" />
          {/* <label>Name</label>
      <input type="text" name="to_name" /> */}
          <label>From</label>
          <input type="text" name="from_name" style={{ color: "grey" }} />
          <label>Email</label>
          <input type="email" name="email" style={{ color: "grey" }} />
          <label>Message</label>
          <textarea name="message" style={{ height: "160px", color: "grey" }} />
          <Button
          className='send'
            type="submit"
            value="Send"
            style={{ backgroundColor: "blue", fontSize: '16px', fontWeight: 'bold', color: 'white', width: '100%' }}
            onClick={handleClick}
          ><span className='moveSend'>Send</span> 
          {!sendMessage && <SendIcon ref={sendMessageClick} fontSize = 'large' className='moveOne' style={{marginLeft: '20px', visibility: 'visible'}}/>}
          { sendMessage && <SendIcon ref={sendMessageClick} fontSize = 'large' className = 'sendIcon' style={{marginLeft: '20px', visibility: 'visible'}}/>}</Button>
        </form>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "10px", }}>
        <a
          href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
          target="_blanc"
          style={{ textDecoration: "none",}}
        >
          <LinkedInIcon
          className='linkedin'
            color="primary"
            fontSize="large"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a
          href="https://github.com/Staifo"
          target="_blanc"
          style={{ textDecoration: "none" }}
        >
          <GitHubIcon className='git' color="primary" fontSize="large" />
        </a>
      </div>
      <div style={{ color: "white", fontSize: "16px", display: 'flex', justifyContent:'center', alignItems:'center',}}>
        <CopyrightIcon fontSize="small" style={{ color: "white" }} />
        {date} Istayfo Ergün, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
