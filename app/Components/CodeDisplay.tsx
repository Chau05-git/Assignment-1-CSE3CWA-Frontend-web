"use client";
import React from 'react';
import './CodeDisplay_style.css';

const CodeDisplay = () => {
  const sourceCode = `import React from "react";
import "./homepage.css";
import Navbar from "./Components/Navbar";
import Header from './Components/Headers';
import CodeDisplay from "./Components/CodeDisplay";

const Title_of_Page = () => {
  return(
    <h1 className="fixed_title">Welcome to my website</h1>
  );
}

const Student_No = () => {
  return(
    <h2 className="student_no">Student No: 21654237</h2>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer_content">
        <p>&copy; {currentYear} All rights reserved</p>
        <p>Student Name: Le Ngoc Minh Chau</p>
        <p>Student Number: 21654237</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  );
}

const Main_Page = () => {
  return(
    <main className="main_page">
      <Title_of_Page/>
      <Student_No/>
      <Navbar/>
      <Header/>
      <CodeDisplay/>
      <Footer/>
    </main>
  );
} 
export default Main_Page`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <h3>Source Code Output</h3>
        <button className="copy-button" onClick={handleCopy}>
          Copy Code
        </button>
      </div>
      <div className="code-content">
        <pre>
          <code>{sourceCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeDisplay;