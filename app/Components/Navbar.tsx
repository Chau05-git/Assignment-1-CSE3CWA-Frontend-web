"use client";

import React, { useState } from "react";
import Link from "next/link"; 
import "./Navbar_style.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li className="nav_item"><Link href="/">Home</Link></li>
        <li className="nav_item"><Link href="#about">Pre-lab Question</Link></li>
        <li className="nav_item"><Link href="#services">Escape room</Link></li>
        <li className="nav_item"><Link href="#contact">Coding races</Link></li>
      </ul>
      <ul className="about_n_hamburger">
        <li className="about"><Link href="/about">about</Link></li>
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;