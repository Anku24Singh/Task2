// SocialMediaIcons.js

import React from 'react';
import './SocialMediaIcons.css'; // Import the CSS file for styling
// import facebookLogo from './facebook-logo.png';
// import linkedinLogo from './linkedin-logo.png';
// import instagramLogo from './instagram-logo.png';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <img src={require('./image/fb2.png')} alt="Community Services" />
      <img src={require('./image/fb2.png')} alt="Community Services" />
      <img src={require('./image/fb2.png')} alt="Community Services" />
    </div>
  );
}

export default SocialMediaIcons;