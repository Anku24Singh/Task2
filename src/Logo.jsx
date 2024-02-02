// Footer.js

import React from 'react';
import './Logo.css'; // Import the CSS file for styling


const Logo = () => {
  return (
    <div className="Logo">
         {/* <div className="row">
      </div> */}
      <div className="row">
        <img src={require('./image/LOGO2.png')} alt="Community Services" className='log'/>
        <div className='web'><b>Webistic</b></div>
       
      </div>
      <div className="row">
      <img src={require('./image/LOGO2.png')} alt="Community Services" className='log2'/>
        
        
      </div>
      <div className="row">
      <img src={require('./image/LOGO2.png')} alt="Community Services" className='log2'/>
      </div>
    </div>
  );
}

export default Logo;