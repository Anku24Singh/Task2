// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <div className="footer">
         {/* <div className="row">
            
        
      </div> */}
      <div className="row">
      {/* <img src={require('./image/loc2.jpg')} alt="Community Services" /> */}
        <h4><img src={require('./image/loc2.jpg')} alt="Community Services" />Location</h4>
        {/* <h4>Location</h4> */}
        <h4><img src={require('./image/msg.png')} alt="Community Services" />admin@webistic.com</h4>
        <h4><img src={require('./image/call2.png')} alt="Community Services" />Sales Enquiry: +91xxxxxxxxxx</h4>
        <h4>Talent Acquistion</h4>
        <SocialMediaIcons></SocialMediaIcons>
        <div className='copywr'>2023 Copywrite</div>
      </div>
      <div className="row">
      {/* <img src={require('./image/loc2.jpg')} alt="Community Services" /> */}
        <h2>Consulting</h2>
        <p> Product Design</p>
        <p> Data Science</p>
        <p>Cyber Security</p>
        <p>Staff Augmentation</p>
      </div>
      <div className="row">
      {/* <img src={require('./image/loc2.jpg')} alt="Community Services" /> */}
        <p>Contact Us</p>
        <p>Portfolio</p>
        <p>Services</p>
        <p>Career</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Pricing</p>
      </div>
    </div>
  );
}

export default Footer;