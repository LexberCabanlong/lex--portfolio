import React from 'react';
import './about.css';
import PFP_PIC from '../../assets/img/pfp_pic.jpg';

const About = () => {
  return (
    <div id="about" className="container_about">
      <div className="container">
        <img className="me_pic" src={PFP_PIC} alt="Profile Picture" />
      </div>
      <div className="container">
        <h1 className="text-emphasis-color">About Me</h1>
        <br />
        <p className="text-light">
          I'm a data analyst with 4+ years of experience turning complex data into clear, actionable insights. I specialize in data visualization using 
          <b><i> Python</i></b>, <b><i>SQL</i></b>, and <b><i>Tableau</i></b>, and I’m passionate about creating dashboards that tell compelling stories.
        </p>
        <br />
        <p className="text-light">
          I've worked across industries and domain knowledges to help teams make data-driven decisions. From cleaning large datasets to building intuitive reports, 
          I focus on both technical precision and user-friendly design.
        </p>
        <br />
        <p className="text-light">
          I thrive in collaborative environments and love exploring new tools, data engineering techniques, 
          and advanced <b><i>data visualization</i></b> methods. Outside of work, I enjoy side projects, 
          mentoring and staying current with industry trends.
        </p>
      </div>
    </div>
  );
}

export default About;
