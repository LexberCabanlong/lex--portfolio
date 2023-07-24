import React from 'react';
import './about.css';
import PFP_PIC from '../../assets/img/pfp_pic.jpg';

const About = () => {
  return (
    <div className="container_about">
      <div className="container">
        <img className="me_pic" src={PFP_PIC} alt="Profile Picture" />
      </div>
      <div className="container">
        <h1 className="text-emphasis-color">About Me</h1>
        <br />
        <p className="text-light">My fascination by the limitless possibilities of technology led me to finish my degree in <i>computer science</i>.
          I strive to make a positive impact through innovation and problem-solving with the fusion of <i>data analytics</i> and <i>web development</i>.
        </p>
        <br />
        <p className="text-light" id="typing-text">As someone who is committed to life-long learning, I actively pursue opportunities to enroll myself in courses that cater 
          to my passion for data analytics and web development. The potential to create web-based tools will not only present data insights but also 
          enable users to interact with and explore data dynamically. I can contribute meaningfully to an organization by building transformative applications 
          that leverage data to drive insights and facilitate informed decision-making processes.

        </p>
      </div>
    </div>
  );
}

export default About;
