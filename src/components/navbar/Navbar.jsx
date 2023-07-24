import React from 'react'
import './navbar.css'
import {AiOutlinePhone, AiOutlineUser, AiOutlineHome, AiOutlineFolderOpen} from 'react-icons/ai'
import {PiCertificate} from 'react-icons/pi'
import {MdOutlineWorkOutline} from 'react-icons/md'

const Navbar = () => {
  return (
    <div class = "nav_container">
      <div class = "navbar">
          <a href = "#"><AiOutlineHome/></a> {/*Home*/}
          <a href = "#"><AiOutlineUser/></a> {/*About*/}
          <a href = "#"><MdOutlineWorkOutline/></a> {/*Work Experience*/}
          <a href = "#"><PiCertificate/></a>{/*Certificate*/}
          <a href = "#"><AiOutlineFolderOpen/></a> {/*Portfolio*/}
          <a href = "#"><AiOutlinePhone/></a>{/*Contact Me*/}
      </div>
    </div>
    
  )
}

export default Navbar