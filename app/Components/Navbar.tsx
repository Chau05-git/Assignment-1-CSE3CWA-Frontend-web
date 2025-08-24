"use client";

import React, { useState } from "react";
import "./Navbar_style.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item"><a href="#home">Home</a></li>
        <li className="nav_item"><a href="#about">About</a></li>
        <li className="nav_item"><a href="#services">Services</a></li>
        <li className="nav_item"><a href="#contact">Contact</a></li>
      </ul>
      <ul className="about_n_hamburger">
        <li className="about"><a href="#contact">about</a></li>
        <li className="hamburger_menu">
          <div className="hamburger_icon" onClick={handleHamburgerClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </li>
      </ul>
      {showMenu && (
        <div className="hamburger_dropdown">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;