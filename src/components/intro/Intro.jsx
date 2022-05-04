import React from "react";
import "./intro.css";
import Me from "../../img/meAndMillie-removebg.png";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Ngon Nguyen</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Lifelong Learner</div>
              <div className="i-title-item">Career Changer</div>
              <div className="i-title-item">Pet Lover</div>
            </div>
          </div>
          <p className="i-desc">
            Motivated Full-Stack software engineer proficient in using
            Javascript for front-end and back-end programming, React, HTML, CSS,
            API implementing, Node.JS, Express, PostgreSQL, and frameworks like
            Bootstrap. Bringing 6 years of work experience in the health
            industry to utilize a strong understanding of problem-solving, soft
            skills, and how to collaborate and work together with a dynamic team
            of multiple departments.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
