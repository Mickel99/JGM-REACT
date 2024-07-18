import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Uppdaterad importväg

const Header = () => (
  <div className="header">
    <Link to="/kontaktbok" className="iconButton">
      <i className="fa fa-address-book" />  
      <span className="topButtonText">Kontaktbok</span>
    </Link>
    <h1 className="title">PARENT COPING</h1>
    <Link to="/rakna" className="iconButton">
      <i className="fa fa-calculator" />  
      <span className="topButtonText">Räkna</span>
    </Link>
  </div>
);

export default Header;
