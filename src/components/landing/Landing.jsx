import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <div class = "container container_landing">
        <h4 class = "text-light">Hi! I am...</h4>
        <h1>Lexber Cabanlong</h1>
        <h4 class = "text-light">Web Developer & Data Analyst</h4>
        <div class = "callToAction">
          <a className = "btn">Resume</a>
          <a className = "btn btn-primary">Contact Me</a>
        </div>
    </div>
  )
}

export default Landing