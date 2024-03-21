import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import grad from "../assets/images/grad.jpg";
import Slideshow from "./Slideshow";
import New from "../Pages/New";
import Nav from "./Navbar";
import Footer from "./Footer"

const Home = () => {
  const [typedHeader, setTypedHeader] = useState("");
  const headerToType = "Discover Your Potential Today!"; // Text to type

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= headerToType.length) {
        setTypedHeader(headerToType.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Typing speed set to 100 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Nav />
      <div className="header">
        <h1>Edemy : Unlock Your Future with Us!</h1>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={grad} alt="Sample" />
        </div>
        <div className="text-container">
          <p>
            "In the heart of the bustling city lies a hidden gem, our beloved
            university. Here, students from diverse backgrounds come together to
            embark on a journey of discovery and growth. With state-of-the-art
            facilities and passionate faculty, we strive to nurture the next
            generation of leaders and innovators. Our vibrant campus buzzes with
            energy as students engage in academic pursuits, extracurricular
            activities, and meaningful connections. At our university, every day
            is an opportunity to learn, explore, and make lifelong memories."
          </p>
        </div>
        
      </div>

      <Slideshow />
      <New />
     <Footer/>
    </div>
  );
};

export default Home;
