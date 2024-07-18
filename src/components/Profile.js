import React from 'react';
import '../styles.css'; // Uppdaterad importväg
import profileImage from '../img/tjejen.png'; // Importera bilden

const Profile = () => (
  <div className="profile">
    <img src={profileImage} className="profileImage" alt="Profile" />
    <h2 className="profileName">STELLA STRÖM</h2>
  </div>
);

export default Profile;
