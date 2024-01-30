import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"; 
import './newnav.css'
import Logo from '../../assets/myLogo.svg'

const Newnav = () => {
  const [showNav,setShowNav]= useState(false)
  const togglerNavItem=()=>{
    setShowNav(!showNav)
  }
  return (
    <nav className='navbar'>
        <div className='container'>
            <div>
                <img src={Logo} alt="" />

            </div>
          {/* toggelr button */}

          <div className='menu-icon' onClick={togglerNavItem}>
            {showNav? (<FaTimes color='white' size={30}/>):( <FaBars color='white' size={30}/>)}
             
          </div>
          <div className={`nav-List ${showNav && 'active'}`}>
            <ul>
               <li><NavLink to='/'>Home</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>  
                <li><NavLink to='/pro'>Product</NavLink></li>
                <li><NavLink to='/con'>Contact</NavLink></li>
            </ul>

          </div>
        </div>

    </nav>
  )
}

export default Newnav