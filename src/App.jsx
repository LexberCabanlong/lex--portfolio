import React, { useState } from 'react';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import WorkExperience from './components/work_experience/Work_Experience';
import Portfolio from './components/portfolio/Portfolio';
import MuiPopup from './components/popup/Popup';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <Landing onContactClick={handleOpen} />
      <About />
      <WorkExperience />
      <Portfolio />
      <MuiPopup open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
