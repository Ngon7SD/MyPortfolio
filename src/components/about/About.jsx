import React from "react";
import "./about.css";


function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/2225499/pexels-photo-2225499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">My Background</h1>
        <p className="a-sub">
          Hi! I'm Ngon(Non), a Software Developer located here in Tampa,
          Florida.
        </p>
        <p className="a-desc">
          After graduating from my radiology technology program, I worked in
          some of Tampa Bay’s top-rated hospitals. I gained experience in
          surgical and in-patient procedure imaging, which eventually opened the
          door for me to expand my skills. I became proficient in computed
          tomography (CT) and magnetic resonance imaging (MRI), where I took
          images using X-ray radiation and the physics of magnets. These
          learning opportunities enabled me to work in fast-paced and
          high-stress emergency departments where imaging was critical for my
          patients. Working in the emergency department taught me how to manage
          my time, focus on the task at hand, and provide the most optimal
          quality imaging for my physicians to review.
        </p>
        <p className="a-desc">
          <br></br>I was introduced to software engineering through my
          experience in healthcare. It interested me and I decided I wanted to
          learn more about it. After researching my options, I chose to go back
          to school and build upon the foundation I have built as a radiology
          technologist the past six years. Thinkful is the perfect program to
          kickstart my career as a software developer and I am excited to see
          what the future brings.
        </p>
        <div>
          <h2 className="a-title">
            <br></br>About Me
          </h2>
          <p className="a-sub">
            When I am not working or in school, you can find me enjoying the
            outdoors in Tampa. I enjoy health and fitness, fishing on the
            shoreline, biking on the Tampa trails, and visiting dog parks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
