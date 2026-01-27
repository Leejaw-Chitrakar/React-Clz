// 4. Spread an array of styles into an inline style object.
import React from 'react';

const T4 = () => {
  const baseStyle = {
    padding: '10px',
    borderRadius: '5px'
  };

  const successStyle = {
    backgroundColor: 'lightgreen',
    color: 'darkgreen'
  };

  const combinedStyle = { ...baseStyle, ...successStyle };

  return (
    <div>
      <div style={combinedStyle}>
        Success Message (Styled with Spread)
      </div>
    </div>
  );
};

export default T4;
