import React from "react";
import "./homepage.css";
import Navbar from "./Components/Navbar";
import Header from './Components/Headers';


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
      <Footer/>
    </main>
  );
} 
export default Main_Page