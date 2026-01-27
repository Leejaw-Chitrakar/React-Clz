// 5. Create JSX with inline styles using an object.

import React from 'react';

const StyledBox = () => {
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '10px',
    color: 'darkblue',
    fontWeight: 'bold'
  };

  return (
    <div style={boxStyle}>
      This is a styled box!
    </div>
  );
};

export default StyledBox;
