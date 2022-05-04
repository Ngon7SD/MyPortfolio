import React from "react";
import "./contact.css";
import Email from "../../img/email-icon.png";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_armaexr",
        "template_zufmqvy",
        formRef.current,
        "KdvPxhC7Ba0NqaG_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              Ngon7@yahoo.com
            </div>
            <div className="c-info-item">
              <a
                href="https://www.linkedin.com/in/ngon-nguyen/"
                target="_blank"
              >
                <img src={LinkedIn} alt="" className="c-icon" />
              </a>
              <a href="https://github.com/Ngon7SD" target="_blank">
                <img src={Github} alt="" className="c-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Contact Me!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
