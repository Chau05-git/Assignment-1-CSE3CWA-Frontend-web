import React from "react";
import "./homepage.css";
import Navbar from "./Components/Navbar";


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

const Main_Page = () => {
  return(
    <main className="main_page">
      <Title_of_Page/>
      <Student_No/>
      <Navbar/>
    </main>
  );
} 
export default Main_Page