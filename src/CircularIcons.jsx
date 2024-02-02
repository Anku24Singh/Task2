// CircularIcons.js

import React from 'react';
import './CircularIcons.css'; // Import the CSS file for styling

const CircularIcons = () => {
  return (
    <div className="icon-container">
      <div className="circular-icon"><img src={require('./image/first.jpeg')} alt="Community Services" /></div>
      <div className="circular-icon"><img src={require('./image/Second.jpeg')} alt="Community Services" /></div>
      <div className="circular-icon"><img src={require('./image/BULB.jpeg')} alt="Community Services" /></div>
      <div className="circular-icon"><img src={require('./image/ARROW.jpeg')} alt="Community Services" /></div>
      <div className="circular-icon"><img src={require('./image/THUMB.jpeg')} alt="Community Services" /></div>
      <div className="circular-icon"><img src={require('./image/Last.jpeg')} alt="Community Services" /></div>
    </div>
  );
}

export default CircularIcons;