import React from 'react';
import '../CSS/Slideshow.css';
import cam from '../assets/images/cam.jpg';
import edin from '../assets/images/edin.jpg';
import ox from '../assets/images/ox.jpg';
import prince from '../assets/images/prince.jpg';
import hard from '../assets/images/hard.jpg';
import yale from '../assets/images/yale.jpg';
const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <img src={cam} alt="Sample" />
        <img src={ox} alt="Third Image" />
        <img src={prince} alt="Fourth Image" />
        <img src={hard} alt="Fourth Image" />
        <img src={yale} alt="Fourth Image" />
      </div>
    </div>
  );
};

export default Slideshow;
