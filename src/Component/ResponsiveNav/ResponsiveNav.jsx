import React, { useState } from 'react'
import Logo from '../../assets/myLogo.svg'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"; 
import './responsiveNav.css'

const ResponsiveNav = () => {
    const [showNav,setShowNav]= useState(false)
    const togglerNavItems=()=>{
        setShowNav(!showNav)
    }
  return (
    <nav className='navbar'>
        <div className="container">
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className="menu-icon" onClick={togglerNavItems}>
                {showNav ? (<FaTimes color='white' size='30px' />):(<FaBars color='white' size='30px' />) }
          
        </div>
            <div className={`nav-elements ${showNav && 'active'}`}>
                <ul>
                  <li><NavLink to='/'>Home</NavLink></li> 
                  <li><NavLink to='/blog'>Blog</NavLink></li>
                  <li><NavLink to='/pro'>Project</NavLink></li>
                  <li><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default ResponsiveNav