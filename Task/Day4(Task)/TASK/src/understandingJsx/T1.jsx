// 1. Write JSX for a <header> with a logo image and navigation links.

import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Company Logo" className="logo" style={{height:"80px", paddingLeft:"20px"}}/>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
