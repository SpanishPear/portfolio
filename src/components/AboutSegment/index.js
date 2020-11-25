import React from 'react';
import headshot from '../../assets/headshot.png';
import './index.css';

const AboutSegment = () => {
  console.log('test');
  return (
    <div id="about" className="about-container">
      <div className="about-content-container">
        <img id="about-headshot" alt="headshot" src={headshot} />
        <div className="about-content-text-container">
          <div className="about-heading-container">
            <h1 className="about-heading-text">About</h1>
            <div className="about-heading-right-border" />
          </div>
          <p className="about-content-text">Content</p>
        </div>
      </div>
    </div>
  );
};
export default AboutSegment;
