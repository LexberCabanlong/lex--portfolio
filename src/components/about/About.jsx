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
        <p className="text-light">I'm a data analyst with a passion for beautiful data visualizations that produce amazing insights.</p>
        <br />
        <p className="text-light" id="typing-text">
          I have over 4 years of experience in data analytics. I have a strong background in data visualization and I am proficient in Python, SQL, and Tableau. I use my creativity and problem-solving skills to solve complex problems.
        </p>
        <br />
        <p className="text-light">
          Throughout my career, I have had the opportunity to work with various industries, helping them make data-driven decisions. I am well-versed in handling large datasets, cleaning and transforming data, and building meaningful reports. My focus is not just on the technical aspect, but also on crafting user-friendly dashboards and visualizations that tell a compelling story.
        </p>
        <br />
        <p className="text-light">
          I thrive in collaborative environments where I can contribute ideas and work together to find the best solutions. I'm always looking to learn new tools, techniques, and methods to expand my skill set. Whether it's diving into machine learning models or exploring advanced data visualization techniques, I enjoy challenging myself to push the boundaries of what data can reveal.
        </p>
        <br />
        <p className="text-light">
          Outside of work, I enjoy experimenting with side projects, exploring new technologies, and staying up to date with industry trends. I'm passionate about sharing my knowledge and helping others grow in the data space, whether through mentoring, or participating in forums.
        </p>
      </div>
    </div>
  );
}

export default About;
