import React from 'react';
import { AboutSegment, LandingSegment, NavBar } from '../../components';
import './index.css';

const LandingPage = () => {
  return (
    <div>
      <NavBar active="Home" />
      <LandingSegment />
      <AboutSegment />
    </div>
  );
};

export default LandingPage;
