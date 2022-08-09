import React from 'react';
import './NavBar.css';
import logo from '../../Assets/logo_white.png';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href='#'>
          <img src={logo} alt ='logo' />
        </a>
      </div>      
      <div className='navbar-links'>
      </div>

    </nav>
  )
}

export default NavBar