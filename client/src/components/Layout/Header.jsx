import React, { useState } from 'react';
import '../../CSS/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/icons/MallStackIconTitled.jpg" alt="Logo" />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">الرئيسية</a></li>
          <li><a href="/about-us">عنا</a></li>
          <li><a href="/contact-us">تواصل معنا</a></li>
          <li><a href="/malls">المعارض</a></li>
          <li><a href="/stores">المحلات</a></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;