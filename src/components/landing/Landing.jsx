import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <div id='landing' className="container container_landing">
      <h4 className="text-light">Hi! I am...</h4>
      <h1 className="section-title">Lexber Cabanlong</h1>
      <h4 className="text-light">Data Analyst</h4>
      <div className="callToAction">
        <a className="btn" href="https://drive.google.com/file/d/1EWDWFo507qnh65Td9KowvoQBsFCgc00Q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>

        <a className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  );
}

export default Landing;
