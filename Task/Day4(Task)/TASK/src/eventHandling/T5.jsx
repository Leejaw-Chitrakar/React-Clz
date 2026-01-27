// 5. Make a button that changes background color on click.

import React, { useState } from 'react';

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('white');

  const randomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <button onClick={randomColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
