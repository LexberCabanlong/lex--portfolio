import React from 'react'
import Landing from './components/landing/Landing'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import WorkExperience from './components/work_experience/Work_Experience'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <WorkExperience/>
      <Portfolio/>
    </>
  )
}
export default App
