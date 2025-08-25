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

        <section className="video_section">
          <h2 className="video_title">Project Video</h2>

          {/* Option A: HTML5 video. Put your file at /public/video.mp4 or change src */}
          <div className="video_wrapper">
            <video
              className="about_video"
              controls
              preload="metadata"
              poster="/video-poster.jpg" /* optional poster image in public/ */
            >
              <source src="/Introduction-about-website" type="video/mp4" />
              Your browser does not support HTML5 video. You can download the file
              <a href="/Introduction-about-website" download> here</a>.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;