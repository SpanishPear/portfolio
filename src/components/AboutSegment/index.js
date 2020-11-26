import React from 'react';
import headshot from '../../assets/headshot.png';
import './index.css';
import data from '../../assets/data.json';

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
          <p className="about-content-text">
            <NewlineText text={data.about} />
            If you&apos;re looking for my teaching website, you can access that{' '}
            <a href="teach.spanishpe.ar" title="Shrey's Class">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const NewlineText = ({ text }) => {
  return text.split('\n').map((str) => <p>{str}</p>);
};
export default AboutSegment;
