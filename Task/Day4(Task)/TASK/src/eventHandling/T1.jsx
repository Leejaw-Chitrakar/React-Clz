// 1. Create a button that shows an alert when clicked.

import React from 'react';

const AlertButton = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

export default AlertButton;
