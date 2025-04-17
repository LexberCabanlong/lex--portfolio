import React from 'react'
import './navbar.css'
import {AiOutlinePhone, AiOutlineUser, AiOutlineHome, AiOutlineFolderOpen} from 'react-icons/ai'
import {PiCertificate} from 'react-icons/pi'
import {MdOutlineWorkOutline} from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="navbar">
        <a href="#landing"><AiOutlineHome/></a> {/* Home */}
        <a href="#about"><AiOutlineUser/></a> {/* About */}
        <a href="#work-experience"><MdOutlineWorkOutline/></a> {/* Work Experience */}
        <a href="#portfolio"><AiOutlineFolderOpen/></a> {/* Portfolio */}
        <a href="#contact"><AiOutlinePhone/></a> {/* Contact Me */}
      </div>
    </div>
    
  )
}

export default Navbar