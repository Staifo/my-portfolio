import React, { useState } from "react";
import emailjs from "emailjs-com";
import CopyrightIcon from "@material-ui/icons/Copyright";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());

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
        height: "max-comtent",
      }}
    >
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
          <input
            type="submit"
            value="Send"
            style={{ backgroundColor: "blue" }}
          />
        </form>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "10px", }}>
        <a
          href="https://www.linkedin.com/in/istayfo-ergun-a606a564/"
          target="_blanc"
          style={{ textDecoration: "none",}}
        >
          <LinkedInIcon
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
          <GitHubIcon color="primary" fontSize="large" />
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
