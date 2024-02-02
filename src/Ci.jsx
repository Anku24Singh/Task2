// CircularIcons.js

import React from 'react';
import './Ci.css'; // Import the CSS file for styling

const Ci = () => {
  return (
    <div className="icon-container">
      <div className="content-icon">Web Strategy<br></br><img src={require('./image/first.jpeg')} alt="Community Services" className='ii'/></div>
      <div className="content-icon">Planning &<br></br> Information Architecture<br></br><img src={require('./image/Second.jpeg')} alt="Community Services" className='ii'></img></div>
      <div className="content-icon">Creative<br></br>Design<br></br><img src={require('./image/BULB.jpeg')} alt="Community Services" className='ii'></img></div>
      <div className="content-icon">Responsive <br></br> Development<br></br><img src={require('./image/ARROW.jpeg')} alt="Community Services" className='ii'></img></div>
      <div className="content-icon">Quality <br></br>Assurance(QA)<br></br><img src={require('./image/THUMB.jpeg')} alt="Community Services" className='ii'></img></div>
      <div className="content-icon">Launch &<br></br>Optimization<br></br><img src={require('./image/Last.jpeg')} alt="Community Services" className='ii'></img></div>
    </div>
  );
}

export default Ci;