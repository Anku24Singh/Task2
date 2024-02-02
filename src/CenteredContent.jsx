// CenteredContent.js

import React from 'react';
import './CenteredContent.css'; // Import the CSS file for styling

const CenteredContent = () => {
  return (
    <div className="centered-container">
      <div className="content">
        <h1>Our Website </h1> <h1 className='sec'> Design Process</h1>
        <p>How to create a website tailored to uor unique business goals?<br></br>Take a look at our design process that helps us deliver.</p>
        <h3>cutomized and goal-oriented digital solutions</h3>
      </div>
      {/* <div className="button-container">
        <button>Contact Us</button>
      </div> */}
    </div>
  );
}

export default CenteredContent;