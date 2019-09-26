import React from 'react';

const Notification = ({ message, type = 'success' }) => {
  if (!message) {
    return null;
  }

  return (
    <ul className='notes'>
      <li className={`note note--${type}`}>
        <span>{message}</span>
      </li>
    </ul>
  );
};

export default Notification;
