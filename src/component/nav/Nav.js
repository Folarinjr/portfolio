import React, {useState} from 'react'
import './Nav.css'
import {AiTwotoneHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactless} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactless/></a>
    </nav>
  )
}

export default Nav