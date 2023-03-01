import React, { useState } from 'react';
import './Navbar.css';
// import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import MenuBar from '../../assets/menu.svg';

const Navbar = () => {
const [menuVisible, setMenuVisible] = useState(false);

const toggleMenu = () => {
setMenuVisible(!menuVisible);
};

return (
<nav className="navbar">
<div className="logo-container">
{/* <img src={Logo} alt="Logo" className="logo" /> */}
<div className="logo-text">
<Link to="/" className="nav-link">
            DARK CHUCKLES
          </Link>
</div>
</div>
<buttons className="menu-toggle" onClick={toggleMenu}>
  <img src= {MenuBar} alt="Menu" />
</buttons>
<ul className={`menu ${menuVisible ? 'show' : ''}`}>
<li>
<Link to="/" className="nav-link" onClick={toggleMenu}>
Home
</Link>
</li>
<li>
<Link to="/About" className="nav-link" onClick={toggleMenu}>
About Us
</Link>
</li>
<li>
<Link to="/Policy" className="nav-link" onClick={toggleMenu}>
Our Policies
</Link>
</li>
</ul>
</nav>
);
};

export default Navbar;