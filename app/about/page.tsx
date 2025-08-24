import React from "react";
import Navbar from "../Components/Navbar";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about_page">
      <Navbar />
      <main className="about_main">
        <h1 className="about_title">About</h1>
        <div className="info_container">
          <div className="student_info_box">
            <h3>Student Name</h3>
            <p>Le Ngoc Minh Chau</p>
          </div>
          <div className="student_info_box">
            <h3>Student Number</h3>
            <p>21654237</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;