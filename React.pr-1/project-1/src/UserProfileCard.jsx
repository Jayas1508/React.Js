import React from 'react';
import './UserProfileCard.css';  

const UserProfileCard = ({ name, email, number }) => {
  return (
    <div className="user-profile-card">
      <div className="user-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
        <p className="user-number">{number}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
