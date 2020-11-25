import React from 'react';
import { AboutSegment, LandingSegment, NavBar } from '../../components';
import './index.css';

const LandingPage = () => {
  console.log('hi');

  return (
    <div>
      <NavBar />
      <LandingSegment />
      <AboutSegment />
    </div>
  );
};

export default LandingPage;
